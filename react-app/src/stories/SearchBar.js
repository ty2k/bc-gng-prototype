import React from "react";
import styled from "styled-components";

const SearchForm = styled.form`
  border: 1px solid #707070;
  border-radius: 0px;
  box-sizing: border-box;
  display: inline-block;
  height: 44px;

  input[type="search"] {
    border: 0;
    display: inline-block;
    font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
    font-size: 16px;
    height: 42px;
    padding: 5px;
    vertical-align: middle;
    width: calc(100% - 44px);
  }

  button.button--search {
    appearance: button;
    -moz-appearance: button;
    -webkit-appearance: button;
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOC40NzQiIGhlaWdodD0iMTguNDc3IiB2aWV3Qm94PSIwIDAgMTguNDc0IDE4LjQ3NyI+CiAgPHBhdGggaWQ9InNlYXJjaC1taW51cyIgZD0iTTE4LjIyMiwxNy4yLDE3LjIsMTguMjIyYS44NjIuODYyLDAsMCwxLTEuMjIzLDBsLTMuNi0zLjZhLjg2NS44NjUsMCwwLDEtLjI1My0uNjEzdi0uNTg4YTcuNSw3LjUsMCwxLDEsMS4zLTEuM2guNTg4YS44NjUuODY1LDAsMCwxLC42MTMuMjUzbDMuNiwzLjZBLjg3My44NzMsMCwwLDEsMTguMjIyLDE3LjJabS01LjgwOS05LjdhNC45MDcsNC45MDcsMCwxLDAtNC45MDcsNC45MDdBNC45LDQuOSwwLDAsMCwxMi40MTMsNy41MDVaIi8+Cjwvc3ZnPgo=")
      no-repeat;
    background-position: center;
    border: 0;
    display: inline-block;
    height: 42px;
    margin: 0;
    padding: 0;
    vertical-align: middle;
    width: 44px;
  }
`;

export const SearchBar = () => (
  <SearchForm className="search">
    <input type="search" aria-label="Search" />
    <button className="button--search" type="submit" />
  </SearchForm>
);
