import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import xml2js from "xml2js";

import LoadSpinner from "../../components/LoadSpinner";
import SearchBar from "../../components/SearchBar";

const StyledSearchResults = styled.main`
  max-width: 767px;

  h1 {
    font-size: 36px;
    font-weight: 400;
  }

  p.results-found {
    font-size: 16px;
    margin-top: 24px;
  }

  ul {
    li {
      margin: 10px 0;
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
    isLoading: useQuery().get("q") ? true : false,
    results: {},
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
        query: state?.newQuery,
        isLoading: state?.newQuery ? true : false,
        results: {},
        newQuery: state?.newQuery,
      });
    }
  }

  useEffect(() => {
    // GET request to the search API using the query
    axios.get(`/api/search?q=${state?.query}`).then((res) => {
      // Parse XML response into JSON object
      let parser = new xml2js.Parser();
      parser.parseString(res?.data, (err, results) => {
        if (err) {
          setState({
            ...state,
            isLoading: false,
          });
        } else {
          setState({
            ...state,
            isLoading: false,
            results: results,
          });
        }
      });
    });
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
      {!state?.isLoading &&
        state?.query?.length > 0 &&
        Object.keys(state?.results).length > 0 &&
        state?.results?.GSP?.RES &&
        state?.results?.GSP?.RES[0]?.M && (
          <p className="results-found">
            Found{" "}
            <strong>
              {new Intl.NumberFormat().format(state?.results?.GSP?.RES[0]?.M)}
            </strong>{" "}
            results
          </p>
        )}

      {/* List of results if applicable */}
      {!state?.isLoading &&
        state?.query?.length > 0 &&
        Object.keys(state?.results).length > 0 &&
        state?.results?.GSP?.RES &&
        state?.results?.GSP?.RES[0]?.R?.map((result, index) => {
          return <p key={`result-${index}`}>{result.T}</p>;
        })}

      {/* Message indicating no results if applicable */}
      {!state?.isLoading &&
        state?.query?.length > 0 &&
        Object.keys(state?.results).length > 0 &&
        !state?.results?.GSP?.hasOwnProperty("RES") && (
          <>
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
          </>
        )}
    </StyledSearchResults>
  );
}

export default Search;
