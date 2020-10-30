import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";
import styled from "styled-components";

import { Button } from "./Button";
import { SearchBar } from "./SearchBar";

const NavStyled = styled.nav`
  background-color: white;
  display: inline-block;
  font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
  font-size: 18px;

  &.nav--hidden {
    display: none;
  }

  ul {
    display: inline-block;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  ul li {
    display: inline-block;
    color: #313132;
    height: 40x;
    margin: 0 15px;
  }
  ul li:last-child {
    margin: 0 25px 0 15px;
  }
  ul li.nav--current-page {
    border-bottom: 10px solid #ffffff;
    border-top: 10px solid #fcba19;
  }

  ul li a {
    color: #313132;
    height: 60px;
    line-height: 60px;
    text-decoration: none;
  }
  ul li.nav--current-page a {
    font-weight: 700;
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

  form.search {
    display: block;
    margin: 20px;
  }
`;

export const Nav = ({ hidden, links }) => (
  <NavStyled className={hidden ? "nav--hidden" : null}>
    <ul>
      {links.map(({ text, href, current }, index) => (
        <li key={index} className={current ? "nav--current-page" : null}>
          <a href={href}>{text}</a>
        </li>
      ))}
    </ul>
    {/* SearchBar with input field hidden initially */}
    <SearchBar />
    {/* Login/Register */}
    {/* Language selector */}
    <MediaQuery maxWidth={991}>
      <div className="nav-container--buttons">
        <Button size="medium" label="Login" />
        <Button primary size="medium" label="Register" />
      </div>
    </MediaQuery>
  </NavStyled>
);

Nav.propTypes = {
  hidden: PropTypes.bool,
  links: PropTypes.array,
};

Nav.defaultProps = {
  hidden: false,
  links: [
    {
      text: "Services",
      href: "/#",
      current: false,
    },
    {
      text: "Topics",
      href: "/#",
      current: true,
    },
    {
      text: "News",
      href: "/#",
      current: false,
    },
    {
      text: "Public Engagements",
      href: "/#",
      current: false,
    },
    {
      text: "Jobs & HR",
      href: "/#",
      current: false,
    },
    {
      text: "Contact Us",
      href: "/#",
      current: false,
    },
  ],
};
