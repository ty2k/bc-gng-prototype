import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import SearchBar from "../../components/SearchBar";

const StyledSearchResults = styled.main`
  h1 {
    font-size: 36px;
    font-weight: 400;
  }
`;

// Use the URLSearchParams API to parse the the query string
// TODO: Needs to be polyfilled for IE:
// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams#browser_compatibility
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Search() {
  // Look for query parameter in the form `?q=example`
  const query = useQuery().get("q");

  return (
    <StyledSearchResults>
      <h1>
        Search results for <strong>"{query}"</strong>
      </h1>
      <SearchBar initialInput={query} />
    </StyledSearchResults>
  );
}

export default Search;
