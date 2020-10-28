import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";
import styled from "styled-components";

import { Button } from "./Button";
import { SearchBar } from "./SearchBar";

const NavStyled = styled.nav`
  background-color: white;
  font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
  font-size: 16px;
  height: 54px;
  max-height: 52px;
  width: 100%;

  &.nav--dark {
    background-color: #888888;
  }

  &.nav--hidden {
    display: none;
  }

  ul {
    border-bottom: 2px solid #d1d1d1;
    height: 52px;
    margin: 0;
    max-height: 52px;
    padding: 0;
  }

  .nav--dark ul {
    border-bottom-color: #888888;
  }

  ul li {
    border-bottom: 4px solid transparent;
    display: inline-block;
    color: #313132;
    height: 50px;
    line-height: 50px;
    margin: 0;
    padding: 0 30px;
  }

  @media (max-width: 991px) {
    height: auto;
    max-height: 100%;

    ul {
      height: auto;
      max-height: 100%;
    }

    ul li {
      display: block;
      height: auto;
      line-height: 44px;
      padding: 0 20px;
    }

    div.nav-container--buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 0 10px 0;
      padding: 0 20px;
    }

    div.nav-container--buttons button {
      width: 100%;
    }

    div.nav-container--buttons button + button {
      margin-left: 20px;
    }
  }

  .nav--dark ul li {
    color: white;
  }

  ul li:focus {
    border-bottom-color: black;
    outline: 0;
  }

  ul li a {
    color: #313132;
  }

  .nav--dark ul li a {
    color: white;
  }

  form.search {
    display: block;
    margin: 20px;
  }
`;

export const Nav = ({ dark, hidden, links }) => (
  <NavStyled
    className={`${dark ? "nav--dark" : ""} ${hidden ? "nav--hidden" : ""}`}
  >
    <MediaQuery maxWidth={991}>
      <SearchBar />
      <div className="nav-container--buttons">
        <Button size="medium" label="Login" />
        <Button primary size="medium" label="Register" />
      </div>
    </MediaQuery>
    <ul>
      {links.map((link) => (
        <li key={link}>
          <a href="/#">{link}</a>
        </li>
      ))}
    </ul>
  </NavStyled>
);

Nav.propTypes = {
  dark: PropTypes.bool,
  hidden: PropTypes.bool,
  links: PropTypes.array,
};

Nav.defaultProps = {
  dark: false,
  hidden: false,
  links: [
    "Programs & Services",
    "Topics",
    "News",
    "Public Engagements",
    "Jobs & MyHR",
    "Get Help",
  ],
};
