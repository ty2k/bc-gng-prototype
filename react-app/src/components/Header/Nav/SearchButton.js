import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ReactComponent as SearchIcon } from "../../assets/search-solid.svg";

const SearchButtonStyled = styled.button`
  background: none;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  height: 80px;
  width: 80px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  &:focus {
    background-color: #ededed;
    outline: 4px solid #3b99fc;
  }

  &:hover {
    background-color: #ededed;
  }

  svg {
    color: #313132;
    height: 25px;
    margin: 2px;
  }
`;

function SearchButton({ disabled, onButtonClick }) {
  return (
    <SearchButtonStyled
      aria-label={"Search"}
      disabled={disabled}
      onClick={onButtonClick}
    >
      <SearchIcon />
    </SearchButtonStyled>
  );
}

SearchButton.propTypes = {
  disabled: PropTypes.bool,
  onButtonClick: PropTypes.func.isRequired,
};

SearchButton.defaultProps = {
  onButtonClick: function (event) {
    event.preventDefault();
  },
};

export default SearchButton;
