import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

import { ReactComponent as SearchIcon } from "./assets/search-solid.svg";

const SearchButtonStyled = styled.div`
  align-self: center;
  background: none;
  background-color: #f2f2f2;
  box-sizing: border-box;
  display: inline-block;
  height: 80px;
  width: 80px;

  button.button--search {
    appearance: button;
    -moz-appearance: button;
    -webkit-appearance: button;
    background: none;
    border: 0;
    display: inline-block;
    height: 44px;
    margin: 18px;
    padding: 0;
    vertical-align: middle;
    width: 44px;
  }
  button.button--search svg {
    color: #313132;
    margin: 11px;
  }
`;

function SearchButton({ onButtonClick }) {
  console.log(onButtonClick);
  return (
    <SearchButtonStyled>
      <button
        aria-label="Open search menu"
        className="button--search"
        onClick={onButtonClick}
      >
        <SearchIcon />
      </button>
    </SearchButtonStyled>
  );
}

// SearchBar.propTypes = {
//   inputHidden: PropTypes.bool,
// };

// SearchBar.defaultProps = {
//   inputHidden: false,
// };

export default SearchButton;
