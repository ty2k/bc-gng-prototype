import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";

import constructionMessage from "../../../pages/Under-Construction/message";
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

function SearchBar({ placeHolder }) {
  const searchInput = useRef(null);

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  return (
    <SearchForm>
      <form>
        <ReactTooltip />
        <input
          type="search"
          placeholder={placeHolder}
          ref={searchInput}
          data-tip={constructionMessage}
        />
        <SearchButton data-tip={constructionMessage} />
      </form>
    </SearchForm>
  );
}

SearchBar.propTypes = {
  placeHolder: PropTypes.string,
};

SearchBar.defaultProps = {
  header: false,
  placeHolder: "Search gov.bc.ca",
};

export default SearchBar;
