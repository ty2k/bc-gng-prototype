import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import SearchButton from "./SearchButton";

const SearchForm = styled.div`
  background-color: white;
  border-bottom: 2px solid #003366;
  border-top: 2px solid #d6d6d6;
  box-sizing: border-box;
  display: flex;
  height: 80px;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  width: 100%;

  form {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    max-height: 76px;
    max-width: 952px;
    width: fit-content;
  }

  input[type="search"] {
    background: none;
    border: 0;
    display: inline-block;
    font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
    font-size: 24px;
    height: 76px;
    padding: 10px;
    vertical-align: middle;
    max-width: 872px;
    width: 872px;

    :focus {
      outline: 4px solid #3b99fc;
    }
  }
`;

function SearchBar({ placeHolder, toggleSearchBar }) {
  const [query, setQuery] = useState("");
  const searchInput = useRef(null);
  let history = useHistory();

  // On opening the SearchBar, focus moves to the text input field
  useEffect(() => {
    searchInput.current.focus();
  }, []);

  function handleClick(event) {
    event.preventDefault();

    history.push(`/search?q=${query}`);

    // Hide the SearchBar from the parent component
    toggleSearchBar();
  }

  return (
    <SearchForm>
      <form>
        <input
          type="search"
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeHolder}
          ref={searchInput}
        />
        <SearchButton
          disabled={query.length < 1}
          onButtonClick={(event) => handleClick(event)}
        />
      </form>
    </SearchForm>
  );
}

SearchBar.propTypes = {
  placeHolder: PropTypes.string,
  toggleSearchBar: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  placeHolder: "Search gov.bc.ca",
};

export default SearchBar;
