import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import MediaQuery from "react-responsive";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import xml2js from "xml2js";

import tabMap from "./tabMap";
import Icon from "../../components/Icon";
import LoadSpinner from "../../components/LoadSpinner";
import SearchBar from "../../components/SearchBar";

const StyledSearchResults = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 0 0 120px 0;

  @media (max-width: 768px) {
    margin-left: min(16px, 50%);
    margin-right: min(16px, 50%);
  }

  h1 {
    font-size: 36px;
    font-weight: 400;
  }

  p.results-found {
    font-size: 16px;
    margin-top: 24px;
  }

  div.filter-menu {
    border-bottom: 1px solid #d6d6d6;
    display: flex;
    flex-direction: row;
    justify-content: left;
    margin: 22px 0 30px 0;

    button {
      background: none;
      border: none;
      border-bottom: 5px solid transparent;
      font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
      font-size: 16px;
      margin: 0 12px;
      padding: 5px;

      &.active {
        border-bottom: 5px solid #fcba19;
      }

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        font-size: 18px;
        margin-left: auto;
        margin-right: 0;
      }

      &:focus {
        outline: 4px solid #3b99fc;
        text-decoration: underline;
      }

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }

      @media (max-width: 768px) {
        margin: 0 7px;

        /* On mobile, the More Filters button becomes a funnel icon */
        &#more-filters {
          border-bottom: none;
          height: 44px;
          width: 44px;

          svg {
            color: #313132;
            display: inline;
            height: 24px;
            margin: auto;
          }

          &:hover {
            background-color: #dedede;
          }
        }
      }

      @media (max-width: 576px) {
        margin: 0 3px;
        padding: 5px 2px;
      }
    }
  }

  div.result {
    display: flex;
    flex-direction: row;
    align-items: top;
    margin: 50px 0;

    div.text {
      display: inline-block;
      overflow-x: hidden;
      padding: 0 32px 0 0;
      width: 80%;

      svg {
        color: #003366;
        display: inline;
        height: 18px;
        margin-right: 8px;
        width: 18px;
      }

      a.title {
        color: #003366;
        cursor: pointer;
        display: inline;
        font-size: 24px;
        font-weight: 700;
        text-decoration: none;

        &:hover {
          color: #1a5a96;
          text-decoration: underline;
        }
      }
    }

    div.image {
      background-color: #f2f2f2;
      content: "";
      display: inline-block;
      height: 150px;
      width: 20%;
    }
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
  const [isLoading, setIsLoading] = useState(
    useQuery().get("q") ? true : false
  );
  const [isNoResultsFound, setIsNoResultsFound] = useState(false);
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
            newResults = [...newResults, ...res?.GSP?.RES[0]?.R];
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

          setIsLoading(false);
          setIsNoResultsFound(newResults.length > 0 ? false : true);
          setResults(newResults);
          setResultsCount(count);
          setLastResultShown(newLast);
          setPage(newPage);
        }
      });
    });
  }

  function getResultFileIcon(mimeType) {
    if (mimeType === "application/pdf") {
      return <Icon id={"file-pdf-solid.svg"} />;
    } else if (
      mimeType ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      return <Icon id={"file-word-solid.svg"} />;
    }
    return null;
  }

  function getResultTitle(result) {
    // All (1) or Services (4) tabs
    if (tab === 1 || tab === 4) {
      return (
        <a className="title" href={result?.UE}>
          {result?.T?.toString().split(" - Province of British Columbia", 1)[0]}
        </a>
      );
      // News (2) tab
    } else if (tab === 2) {
      return (
        <a className="title" href={result?.UE}>
          {result?.T?.toString().split(" | BC Gov News", 1)[0]}
        </a>
      );
      // Documents tab (3) and default
    } else {
      return (
        <a className="title" href={result?.UE}>
          {result?.T}
        </a>
      );
    }
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

      {/* Count of results found */}
      {resultsCount > 0 && (
        <p className="results-found">
          Showing 1-{new Intl.NumberFormat().format(lastResultShown)} of{" "}
          <strong>{new Intl.NumberFormat().format(resultsCount)}</strong>{" "}
          results
        </p>
      )}

      {/* Filter menu */}
      {query && (
        <div className="filter-menu">
          {tabMap.map((tabButton, index) => {
            return (
              <button
                key={`filter-menu-button-${index}`}
                id={`filter-button-${tabButton.id}`}
                className={tab === tabButton.index ? "active" : null}
                onClick={(e) => submitNewQuery(e, tabButton.index)}
              >
                {tabButton.label}
              </button>
            );
          })}
          <button id="more-filters" aria-label="More Filters">
            <MediaQuery maxWidth={"768px"}>
              <Icon id={"filter-solid.svg"} />
            </MediaQuery>
            <MediaQuery minWidth={"769px"}>More Filters</MediaQuery>
          </button>
        </div>
      )}

      {/* List of results if applicable */}
      {resultsCount > 0 &&
        results?.length > 0 &&
        results.map((result, index) => {
          return (
            <div className="result" key={`result-${index}`}>
              <div className="text">
                {/* File type icon (if result is a document) */}
                {result?.$?.MIME && getResultFileIcon(result?.$?.MIME)}

                {/* Title (without trailing "- Province of BC" suffix) */}
                {getResultTitle(result)}

                {/* Description */}
                <p className="description">
                  {result?.MT?.length > 0 &&
                    result?.MT?.map((metaTag) => {
                      if (metaTag?.$?.N === "description") {
                        return metaTag?.$?.V;
                      }
                      // .map() expects an explicit return value and React will
                      // throw a warning if this is not present
                      return null;
                    })}
                </p>
              </div>

              {/* Preview image */}
              <div className="image"></div>
            </div>
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
