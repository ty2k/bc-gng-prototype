import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ReactComponent as SearchIcon } from "./assets/search-solid.svg";

const SearchButtonStyled = styled.div`
  /* align-self: center; */
  background: none;
  box-sizing: border-box;
  display: inline-block;
  height: 76px;
  width: 80px;

  button.button--search {
    background: none;
    border: 0;
    display: inline-block;
    height: 44px;
    margin: 16px 20px;
    padding: 0;
    width: 44px;
  }

  button.button--search svg {
    color: #888888;
    margin: 2px;
  }

  // SearchButton in Nav menu is a special case
  &.div--search-button-nav {
    background-color: #f2f2f2;
    height: 80px;
    width: 70px;

    button.button--search {
      margin: 18px 19px 18px 13px;
    }

    button.button--search svg {
      color: #313132;
      margin: 11px;
    }
  }
`;

function SearchButton({ navButton, onButtonClick }) {
  return (
    <SearchButtonStyled className={navButton ? "div--search-button-nav" : null}>
      <button
        aria-label={navButton ? "Open search menu" : "Search"}
        className="button--search"
        onClick={onButtonClick}
      >
        <SearchIcon />
      </button>
    </SearchButtonStyled>
  );
}

SearchButton.propTypes = {
  navButton: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

SearchButton.defaultProps = {
  navButton: false,
  onButtonClick: function (event) {
    event.preventDefault();
  },
};

export default SearchButton;
