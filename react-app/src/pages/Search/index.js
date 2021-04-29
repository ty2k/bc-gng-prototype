import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import xml2js from "xml2js";

import Icon from "../../components/Icon";
import LoadSpinner from "../../components/LoadSpinner";
import SearchBar from "../../components/SearchBar";

const StyledSearchResults = styled.div`
  max-width: 767px;
  margin: 0 auto;
  padding: 0 0 50px 0;

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
  const [state, setState] = useState({
    query: useQuery().get("q") || "", // Query parameter is in the form `?q=example`
    page: parseInt(useQuery().get("page"), 10) || 0, // Page parameter is in the form `?page=2`
    isLoading: useQuery().get("q") ? true : false,
    resultsObj: {},
    resultsArr: [],
    resultsCount: 0,
    firstResultShown: 0,
    lastResultShown: 0,
    newQuery: useQuery().get("q") || "",
  });

  let history = useHistory();

  // Callback provided to SearchBar to update state with text field input
  function updateNewQuery(input) {
    setState({
      ...state,
      newQuery: input,
    });
  }

  // Callback provided to SearchBar to conduct a new search
  function submitNewQuery(event) {
    event.preventDefault();
    // Don't do a new search with the same query
    if (state?.query !== state?.newQuery) {
      history.push(`/search?q=${state.newQuery}`);
      setState({
        ...state,
        query: state?.newQuery,
        page: 0,
        isLoading: state?.newQuery ? true : false,
        resultsObj: {},
        resultsArr: [],
        resultsCount: 0,
        firstResultShown: 0,
        lastResultShown: 0,
        newQuery: state?.newQuery,
      });
    }
  }

  // API call to get additional results for the same query
  function getMoreResults(event) {
    event.preventDefault();

    const params = {
      q: state?.query,
      page: state?.page + 1,
    };

    // GET request to the search API with same query and new page number
    axios.get("/api/search", { params }).then((res) => {
      // Parse XML response into JSON object
      let parser = new xml2js.Parser();
      parser.parseString(res?.data, (err, results) => {
        if (!err) {
          // Push new results to the results array
          let newResultsArr = [...state?.resultsArr];
          if (
            results?.GSP?.RES &&
            results?.GSP?.RES.length > 0 &&
            results?.GSP?.RES[0]?.R?.length > 0
          ) {
            newResultsArr = [...newResultsArr, ...results?.GSP?.RES[0]?.R];
          }

          // Update the last result shown
          let last = state?.lastResultShown;
          if (
            results?.GSP?.RES &&
            results?.GSP?.RES?.length > 0 &&
            results?.GSP?.RES[0]?.$?.SN &&
            results?.GSP?.RES[0]?.$?.EN
          ) {
            last = parseInt(results?.GSP?.RES[0].$?.EN, 10);
          }

          // Update the page number
          let page = state?.page;

          if (
            results?.GSP?.RES &&
            results?.GSP?.RES.length > 0 &&
            results?.GSP?.RES[0]?.R?.length > 0
          ) {
            page = parseInt(state?.page + 1, 10);
          }

          setState({
            ...state,
            resultsArr: newResultsArr,
            lastResultShown: last,
            page: page,
          });
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
    // Page (non-document) results should have a metatag for "navigaton_title"
    // and no explicit MIME type set.
    if (!result?.$?.MIME) {
      return (
        <a className="title" href={result?.UE}>
          {result?.MT?.length > 0 &&
            result?.MT?.map((metaTag) => {
              // Note misspelling of "navigation" to match API data
              if (metaTag?.$?.N === "navigaton_title") {
                return metaTag?.$?.V;
              }
            })}
        </a>
      );
    }

    // Document results should have a title (without suffix) which we prefer,
    // or a filename that can be used if the title is absent.
    let title = "";
    let fileName = "";

    result?.MT?.forEach((metaTag) => {
      if (metaTag?.$?.N === "title") {
        title = metaTag?.$?.V;
      }
      if (metaTag?.$?.N === "DCTERMS.filename") {
        fileName = metaTag?.$?.V;
      }
    });

    return (
      <a className="title" href={result?.UE}>
        {title ? title : fileName}
      </a>
    );
  }

  useEffect(() => {
    if (state?.query) {
      const params = {
        q: state?.query,
        page: state?.page === 0 ? 1 : state?.page,
      };

      // GET request to the search API using the query
      axios.get("/api/search", { params }).then((res) => {
        // Parse XML response into JSON object
        let parser = new xml2js.Parser();
        parser.parseString(res?.data, (err, results) => {
          if (err) {
            setState({
              ...state,
              isLoading: false,
            });
          } else {
            // Push results into an array for display
            let newResultsArr = [...(state?.resultsArr || [])];
            if (
              results?.GSP?.RES &&
              results?.GSP?.RES.length > 0 &&
              results?.GSP?.RES[0]?.R?.length > 0
            ) {
              newResultsArr = [...newResultsArr, ...results?.GSP?.RES[0]?.R];
            }

            // Update the resultsCount if the response includes a count
            let count = state?.resultsCount;
            if (
              results?.GSP?.RES &&
              results?.GSP?.RES.length > 0 &&
              results?.GSP?.RES[0]?.M[0]
            ) {
              count = parseInt(results?.GSP?.RES[0]?.M[0], 10);
            }

            // Update the first and last result shown
            let first = state?.firstResultShown;
            let last = state?.lastResultShown;
            if (
              results?.GSP?.RES &&
              results?.GSP?.RES?.length > 0 &&
              results?.GSP?.RES[0]?.$?.SN &&
              results?.GSP?.RES[0]?.$?.EN
            ) {
              first = 1; // Assumes we are adding results to a growing list
              last = parseInt(results?.GSP?.RES[0].$?.EN, 10);
            }

            setState({
              ...state,
              isLoading: false,
              resultsObj: results,
              resultsArr: newResultsArr,
              resultsCount: count,
              firstResultShown: first,
              lastResultShown: last,
              page: state?.page + 1, // Assumes we are not navigating straight to a page of results
            });
          }
        });
      });
    }
  }, [state.query]);

  return (
    <StyledSearchResults>
      {/* Page metadata */}
      <Helmet>
        <title>
          {state?.query?.length > 0
            ? `Search results for "${state?.query}"`
            : "Search"}
        </title>
        <meta
          name={"description"}
          content={
            state?.query?.length > 0
              ? `Search results for "${state?.query}"`
              : `Search gov.bc.ca`
          }
        />
      </Helmet>

      {/* Page title */}
      {state?.query?.length > 0 ? (
        <h1>
          Search results for <strong>{`"${state.query}"`}</strong>
        </h1>
      ) : (
        <h1>Search</h1>
      )}
      <SearchBar
        initialInput={state?.query}
        onButtonClick={(event) => {
          submitNewQuery(event);
        }}
        parentCallback={updateNewQuery}
      />

      {/* LoadSpinner until the API request is completed */}
      {state?.isLoading && <LoadSpinner />}

      {/* Count of results found */}
      {!state?.isLoading && state?.resultsCount > 0 && (
        <p className="results-found">
          Showing {new Intl.NumberFormat().format(state?.firstResultShown)}-
          {new Intl.NumberFormat().format(state?.lastResultShown)} of{" "}
          <strong>{new Intl.NumberFormat().format(state?.resultsCount)}</strong>{" "}
          results
        </p>
      )}

      {/* Filter menu */}
      {!state?.isLoading && state?.resultsCount > 0 && (
        <div className="filter-menu">
          <button className="active">All</button>
          <button>Services</button>
          <button>News</button>
          <button>Documents</button>
          <button>More Filters</button>
        </div>
      )}

      {/* List of results if applicable */}
      {!state?.isLoading &&
        state?.resultsCount > 0 &&
        state?.resultsObj?.GSP?.RES.length > 0 &&
        state?.resultsObj?.GSP?.RES[0]?.R?.map((result, index) => {
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
                    })}
                </p>
              </div>

              {/* Preview image */}
              <div className="image"></div>
            </div>
          );
        })}

      {/* Load more results button */}
      {!state?.isLoading && state?.lastResultShown < state?.resultsCount && (
        <div className="load-more">
          <button
            onClick={(e) => {
              getMoreResults(e);
            }}
          >
            Load more results
          </button>
        </div>
      )}

      {/* Message indicating no results if applicable */}
      {!state?.isLoading &&
        state?.query?.length > 0 &&
        Object.keys(state?.resultsObj).length > 0 &&
        !state?.resultsObj?.GSP?.hasOwnProperty("RES") && (
          <div className="no-results">
            <p>
              Your search - <strong>{state.query}</strong> - did not match any
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
    </StyledSearchResults>
  );
}

export default Search;
