import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ReactComponent as SearchIcon } from "../../assets/search-solid.svg";

const SearchButtonStyled = styled.div`
  background: none;
  box-sizing: border-box;
  display: inline-block;
  height: 76px;
  width: 80px;

  button.button--search {
    background: none;
    border: 0;
    cursor: pointer;
    display: inline-block;
    height: 44px;
    margin: 16px 20px;
    padding: 0;
    width: 44px;

    :focus {
      outline: 4px solid #3b99fc;
    }
  }

  button.button--search svg {
    color: #888888;
    margin: 2px;
  }

  // SearchButton in Nav menu is a special case
  &.div--search-button-nav {
    button.button--search {
      background-color: #f2f2f2;
      height: 80px;
      margin: 0;
      width: 80px;

      :focus {
        background-color: #dedede;
      }

      :hover {
        background-color: #dedede;
      }
    }

    button.button--search svg {
      color: #313132;
      height: 25px;
    }

    :hover {
      background-color: #ededed;
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
