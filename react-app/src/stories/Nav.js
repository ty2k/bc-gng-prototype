import React from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";
import styled from "styled-components";

import SearchButton from "./SearchButton";
import UserPanel from "./UserPanel";
import LanguagePicker from "./LanguagePicker";

const NavStyled = styled.nav`
  background-color: white;
  display: flex;
  font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
  font-size: 18px;
  height: 80px;
  min-width: fit-content;

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
    border-bottom: 10px solid transparent;
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
  }
`;

function Nav({ hidden, links, toggleSearch }) {
  return (
    <NavStyled className={hidden ? "nav--hidden" : null}>
      <MediaQuery minWidth={715}>
        <ul>
          {links.map(({ text, href, current }, index) => (
            <li key={index} className={current ? "nav--current-page" : null}>
              <a href={href}>{text}</a>
            </li>
          ))}
        </ul>
      </MediaQuery>
      <MediaQuery minWidth={980}>
        <SearchButton navButton={true} onButtonClick={toggleSearch} />
        <UserPanel />
        <LanguagePicker />
      </MediaQuery>
    </NavStyled>
  );
}

Nav.propTypes = {
  hidden: PropTypes.bool,
  links: PropTypes.array,
  toggleSearch: PropTypes.func,
};

Nav.defaultProps = {
  hidden: false,
  links: [
    {
      text: "Services",
      href: "/#",
      current: true,
    },
    {
      text: "Topics",
      href: "/#",
      current: false,
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

export default Nav;
