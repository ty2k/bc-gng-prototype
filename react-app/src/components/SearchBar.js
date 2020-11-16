import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import SearchButton from "./SearchButton";

const SearchForm = styled.div`
  background-color: white;
  border-top: 2px solid #d6d6d6;
  border-bottom: 2px solid #003366;
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
  }
`;

function SearchBar() {
  const searchInput = useRef(null);

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  return (
    <SearchForm>
      <form>
        <input type="search" placeholder="Search gov.bc.ca" ref={searchInput} />
        <SearchButton />
      </form>
    </SearchForm>
  );
}

SearchBar.propTypes = {
  inputHidden: PropTypes.bool,
};

SearchBar.defaultProps = {
  inputHidden: true,
};

export default SearchBar;
