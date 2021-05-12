import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ReactComponent as SearchIcon } from "./assets/search-solid.svg";

const SearchForm = styled.div`
  background-color: white;
  border: 1px solid #d6d6d6;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  width: 100%;

  form {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  input[type="search"] {
    background: none;
    border: 0;
    display: inline-block;
    flex-grow: 1;
    font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
    font-size: 18px;
    padding: 10px;
    vertical-align: middle;

    :focus {
      outline: 4px solid #3b99fc;
    }
  }
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  height: 44px;
  min-width: 44px;
  overflow: hidden;
  padding: 10px;
  width: 44px;

  svg {
    color: #313132;
    height: 24px;
    width: 24px;
  }

  &:disabled,
  [disabled] {
    cursor: not-allowed;
  }

  &:focus {
    background-color: #f2f2f2;
    outline: 4px solid #3b99fc;
  }

  &:hover {
    background-color: #f2f2f2;
  }
`;

function SearchBar({
  initialInput = "",
  onButtonClick,
  parentCallback,
  placeHolder,
}) {
  const [inputValue, setInputValue] = useState(initialInput || "");

  function onChangeHandler(event) {
    setInputValue(event.target.value);

    if (parentCallback) {
      parentCallback(event.target.value);
    }
  }

  return (
    <SearchForm>
      <form>
        <input
          type="search"
          onChange={onChangeHandler}
          value={inputValue}
          placeholder={placeHolder}
          spellCheck={false}
        />
        <SearchButton
          disabled={onButtonClick ? false : true} // Disable if no onClick is provided
          onClick={onButtonClick}
        >
          <SearchIcon />
        </SearchButton>
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
