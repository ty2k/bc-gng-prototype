import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ReactComponent as SearchIcon } from "./assets/search-solid.svg";

const SearchForm = styled.div`
  align-self: center;
  background-color: white;
  border-bottom: 2px solid #003366;
  box-sizing: border-box;
  display: block;
  height: 80px;
  margin: 0 auto;
  text-align: center;
  width: 100%;

  form {
    box-sizing: border-box;
    display: inline-block;
    max-height: 80px;
    max-width: 952px;
    width: fit-content;
  }

  input[type="search"] {
    background: none;
    border: 0;
    display: inline-block;
    font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
    font-size: 24px;
    height: 80px;
    padding: 5px;
    vertical-align: middle;
    max-width: 872px;
    width: 872px;
  }

  button.button--search {
    appearance: button;
    -moz-appearance: button;
    -webkit-appearance: button;
    /* Icon - magnifying glass */
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOC40NzQiIGhlaWdodD0iMTguNDc3IiB2aWV3Qm94PSIwIDAgMTguNDc0IDE4LjQ3NyI+CiAgPHBhdGggaWQ9InNlYXJjaC1taW51cyIgZD0iTTE4LjIyMiwxNy4yLDE3LjIsMTguMjIyYS44NjIuODYyLDAsMCwxLTEuMjIzLDBsLTMuNi0zLjZhLjg2NS44NjUsMCwwLDEtLjI1My0uNjEzdi0uNTg4YTcuNSw3LjUsMCwxLDEsMS4zLTEuM2guNTg4YS44NjUuODY1LDAsMCwxLC42MTMuMjUzbDMuNiwzLjZBLjg3My44NzMsMCwwLDEsMTguMjIyLDE3LjJabS01LjgwOS05LjdhNC45MDcsNC45MDcsMCwxLDAtNC45MDcsNC45MDdBNC45LDQuOSwwLDAsMCwxMi40MTMsNy41MDVaIi8+Cjwvc3ZnPgo=")
      no-repeat;
    background-position: center;
    border: 0;
    display: inline-block;
    height: 80px;
    padding: 0;
    vertical-align: middle;
    width: 80px;
  }
`;

function SearchBar() {
  return (
    <SearchForm>
      <form>
        <input type="search" aria-label="Search" />
        <button
          aria-label="Search"
          className="button--search"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
        />
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
