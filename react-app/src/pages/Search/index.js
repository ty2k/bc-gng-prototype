import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import xml2js from "xml2js";

import LoadSpinner from "../../components/LoadSpinner";
import SearchBar from "../../components/SearchBar";

import FilterMenu from "./FilterMenu";
import Result from "./Result";
import TabMenu from "./TabMenu";

import filterResults from "./filterResults";

const StyledSearchResults = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 0 0 120px 0;

  * {
    font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
  }

  @media (max-width: 768px) {
    margin-left: min(16px, 50%);
    margin-right: min(16px, 50%);
  }

  h1 {
    font-size: 36px;
    font-weight: 400;
  }

  p.results-found {
    font-size: 18px;
    margin-top: 24px;
  }

  div.load-more {
    display: flex;
    justify-content: space-evenly;

    button {
      background-color: #f2f2f2;
      border: none;
      color: #313132;
      cursor: pointer;
      font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
      font-size: 16px;
      font-weight: 700;
      padding: 10px 56px;

      &:focus {
        outline: 4px solid #3b99fc;
        text-decoration: underline;
      }

      &:hover {
        background-color: #dedede;
        text-decoration: underline;
      }

      &:disabled,
      &[disabled] {
        cursor: not-allowed;
        opacity: 0.3;
      }
    }
  }

  div.no-results {
    ul {
      li {
        margin: 10px 0;
      }
    }
  }
`;

// Use the URLSearchParams API to parse the the query string
// TODO: Needs to be polyfilled for IE:
// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams#browser_compatibility
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Search() {
  // Query parameter is in the form `?q=example`
  const [query, setQuery] = useState(useQuery().get("q") || "");

  // Tab parameter defaults to 1 for "All" results
  const [tab, setTab] = useState(parseInt(useQuery().get("tab")) || 1);

  // `newQuery` represents a potential new search set by the state of the
  // on-page SearchBar component. Set to same value as `query` initially.
  const [newQuery, setNewQuery] = useState(useQuery().get("q") || "");

  const [page, setPage] = useState(0);
  const [facets, setFacets] = useState([]);
  const [isLoading, setIsLoading] = useState(
    useQuery().get("q") ? true : false
  );
  const [isNoResultsFound, setIsNoResultsFound] = useState(false);

  // Filter variables
  // TODO: Add handling for URL parameter filter menu display, filter config
  const [isFilterMenuShown, setIsFilterMenuShown] = useState(false);
  const [timeSelectOpen, setTimeSelectOpen] = useState(false);
  const [timeSelectValue, setTimeSelectValue] = useState("anytime");
  const [customDateRange, setCustomDateRange] = useState([
    new Date().getTime() - 24 * 60 * 60 * 1000,
    new Date().getTime(),
  ]);
  const [sortedBySelectOpen, setSortedBySelectOpen] = useState(false);
  const [sortedBySelectValue, setSortedBySelectValue] = useState("best-match");
  const [facetsOpen, setFacetsOpen] = useState([]);
  const [facetSelectValue, setFacetSelectValue] = useState({});

  // Results variables
  const [results, setResults] = useState([]);
  const [resultsCount, setResultsCount] = useState(0);
  const [lastResultShown, setLastResultShown] = useState(null);

  let history = useHistory();

  // Callback provided to SearchBar to update state with text field input
  function updateNewQuery(input) {
    setNewQuery(input);
  }

  // Callback provided to SearchBar and filter buttons to conduct a new search.
  // Default to tabIndex 1 ("All" results) if not specified explicitly.
  function submitNewQuery(event, tabIndex = 1) {
    event.preventDefault();

    // Only do a new search if the query or tab is changing from current state
    if ((newQuery && newQuery !== query) || tabIndex !== tab) {
      history.push(`/search?q=${newQuery}&tab=${tabIndex}`);
      setQuery(newQuery);
      setTab(tabIndex);
      setPage(0);
      setIsLoading(true);
      setIsNoResultsFound(false);
      setResults([]);
      setResultsCount(0);
      setLastResultShown(null);
      // TODO: Need to reset all the FilterMenu stuff here too
    }
  }

  // Make Search API call and store results in state
  function getResults() {
    setIsLoading(true);

    const params = {
      q: query,
      page: page + 1,
      tab: tab,
    };

    // GET request to the search API
    axios.get("/api/search", { params }).then((res) => {
      // Parse XML response into JSON object
      let parser = new xml2js.Parser();
      parser.parseString(res?.data, (err, res) => {
        if (err) {
          setIsLoading(false);
          // TODO: Error handling for UI
        } else {
          // Push new results to the results array
          let newResults = [...results];
          if (
            res?.GSP?.RES &&
            res?.GSP?.RES.length > 0 &&
            res?.GSP?.RES[0]?.R?.length > 0
          ) {
            let incoming = res?.GSP?.RES[0]?.R;

            incoming.forEach((result, index) => {
              result.bestMatchPosition = parseInt(
                newResults.length + index
              );
            });

            newResults = [...newResults, ...incoming];
          }

          // Update the resultsCount
          let count = resultsCount;
          if (
            res?.GSP?.RES &&
            res?.GSP?.RES.length > 0 &&
            res?.GSP?.RES[0]?.M[0]
          ) {
            count = parseInt(res?.GSP?.RES[0]?.M[0], 10);
          }

          // Update the last result shown
          let newLast = lastResultShown;
          if (
            res?.GSP?.RES &&
            res?.GSP?.RES?.length > 0 &&
            res?.GSP?.RES[0]?.$?.EN
          ) {
            newLast = parseInt(res?.GSP?.RES[0].$?.EN, 10);
          }

          // Update the page number
          let newPage = page;
          if (
            res?.GSP?.RES &&
            res?.GSP?.RES.length > 0 &&
            res?.GSP?.RES[0]?.R?.length > 0
          ) {
            newPage = parseInt(page + 1, 10);
          }

          // Update the facets available
          let newFacets = [];
          if (
            res?.GSP?.RES &&
            res?.GSP?.RES.length > 0 &&
            res?.GSP?.RES[0]?.PARM?.length > 0 &&
            res?.GSP?.RES[0]?.PARM[0]?.PMT?.length > 0
          ) {
            res.GSP.RES[0].PARM[0].PMT.forEach((facet) => {
              const facetName = facet?.$?.DN;
              let categories = [];

              if (facet?.PV?.length > 0) {
                facet.PV.forEach((category) => {
                  categories.push({
                    name: category?.$?.V,
                    count: category?.$?.C,
                  });
                });
              }

              newFacets.push({
                name: facetName,
                categories: categories,
              });
            });
          }

          setIsLoading(false);
          setIsNoResultsFound(newResults.length > 0 ? false : true);
          setResults(newResults);
          setResultsCount(count);
          setLastResultShown(newLast);
          setPage(newPage);
          setFacets(newFacets);
        }
      });
    });
  }

  // Run on first render and each time `query` or `tab` change
  useEffect(() => {
    if (query) {
      getResults();
    }
    // TODO: Leaving getResults out of the dependencies array below will throw
    // an ESLint warning. Including it will cause an infinite loop because of
    // all the dependencies on stateful variables in getResults(). Come back
    // to this after more experience with this hook.
  }, [query, tab]);

  return (
    <StyledSearchResults>
      {/* Page metadata */}
      <Helmet>
        <title>
          {query?.length > 0 ? `Search results for "${query}"` : "Search"}
        </title>
        <meta
          name={"description"}
          content={
            query?.length > 0
              ? `Search results for "${query}"`
              : `Search gov.bc.ca`
          }
        />
      </Helmet>

      {/* Page title */}
      {query?.length > 0 ? (
        <h1>
          Search results for <strong>{`"${query}"`}</strong>
        </h1>
      ) : (
        <h1>Search</h1>
      )}
      <SearchBar
        initialInput={query}
        onButtonClick={(event) => {
          submitNewQuery(event, tab);
        }}
        parentCallback={updateNewQuery}
      />

      {/* Tab menu and Filter menu */}
      {query && (
        <>
          <TabMenu
            isFilterMenuShown={isFilterMenuShown}
            setTab={submitNewQuery}
            tab={tab}
            setIsFilterMenuShown={setIsFilterMenuShown}
          />
          {isFilterMenuShown && (
            <FilterMenu
              facets={facets}
              resultsCount={results?.length || 0}
              setIsFilterMenuShown={setIsFilterMenuShown}
              timeSelectOpen={timeSelectOpen}
              setTimeSelectOpen={setTimeSelectOpen}
              timeSelectValue={timeSelectValue}
              setTimeSelectValue={setTimeSelectValue}
              customDateRange={customDateRange}
              setCustomDateRange={setCustomDateRange}
              sortedBySelectOpen={sortedBySelectOpen}
              setSortedBySelectOpen={setSortedBySelectOpen}
              sortedBySelectValue={sortedBySelectValue}
              setSortedBySelectValue={setSortedBySelectValue}
              facetsOpen={facetsOpen}
              setFacetsOpen={setFacetsOpen}
              facetSelectValue={facetSelectValue}
              setFacetSelectValue={setFacetSelectValue}
            />
          )}
        </>
      )}

      {/* Count of results found */}
      {/* TODO: Change verbage when results are being filtered. */}
      {resultsCount > 0 && (
        <p className="results-found">
          Showing 1-{new Intl.NumberFormat().format(lastResultShown)} of{" "}
          <strong>{new Intl.NumberFormat().format(resultsCount)}</strong>{" "}
          results
        </p>
      )}

      {/* List of results if applicable */}
      {resultsCount > 0 &&
        results?.length > 0 &&
        filterResults(
          results,
          tab,
          timeSelectValue,
          customDateRange,
          sortedBySelectValue,
          facetSelectValue
        ).map((result, index) => {
          return (
            <Result
              key={`result-${index}`}
              isDateShown={
                sortedBySelectValue === "most-recent" ||
                timeSelectValue !== "anytime"
              }
              result={result}
              tab={tab}
            />
          );
        })}

      {/* Load more results button */}
      {lastResultShown < resultsCount && (
        <div className="load-more">
          <button
            disabled={isLoading}
            onClick={() => {
              getResults();
            }}
          >
            Load more results
          </button>
        </div>
      )}

      {/* Message indicating no results if applicable */}
      {isNoResultsFound && (
        <div className="no-results">
          <p>
            Your search - <strong>{query}</strong> - did not match any
            documents.
          </p>
          <p>Suggestions:</p>
          <ul>
            <li>Make sure all words are spelled correctly.</li>
            <li>
              Try a different keyword like <strong>"MSP"</strong> or{" "}
              <strong>"jobs"</strong>.
            </li>
            <li>Try more generic keywords.</li>
          </ul>
        </div>
      )}

      {/* LoadSpinner until the API request is completed */}
      {isLoading && <LoadSpinner />}
    </StyledSearchResults>
  );
}

export default Search;
