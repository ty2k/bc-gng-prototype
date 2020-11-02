import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchForm = styled.form`
  align-self: center;
  background-color: #f2f2f2;
  box-sizing: border-box;
  display: inline-block;
  height: 80px;

  input[type="search"] {
    border: 0;
    display: inline-block;
    font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
    font-size: 16px;
    height: 44px;
    padding: 5px;
    vertical-align: middle;
    width: calc(100% - 44px);
  }

  &.form--input-hidden > input[type="search"] {
    display: none;
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
    height: 44px;
    margin: 18px;
    padding: 0;
    vertical-align: middle;
    width: 44px;
  }
`;

export const SearchBar = ({ inputHidden }) => (
  <SearchForm className={inputHidden ? "form--input-hidden" : null}>
    <input type="search" aria-label="Search" />
    <button
      aria-label="Search"
      className="button--search"
      type="submit"
      onClick={(e) => {
        e.preventDefault();
      }}
    />
  </SearchForm>
);

SearchBar.propTypes = {
  inputHidden: PropTypes.bool,
};

SearchBar.defaultProps = {
  inputHidden: true,
};
