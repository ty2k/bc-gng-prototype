import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import MediaQuery from "react-responsive";
import styled from "styled-components";

import SearchButton from "./SearchButton";
import UserPanel from "./UserPanel";
import LanguagePicker from "./LanguagePicker";
import { ReactComponent as HamburgerIcon } from "../../assets/bars-solid.svg";

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
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  ul li {
    color: #313132;
    display: flex;
    flex-direction: column;
    height: 80px;
    margin: 0 15px;
  }
  ul li:last-child {
    margin: 0 25px 0 15px;
  }

  ul li a {
    color: #313132;
    display: inline-block;
    height: 80px;
    line-height: 80px;
    text-decoration: none;
  }
  ul li a.a--current-page {
    border-bottom: 10px solid transparent;
    border-top: 10px solid #fcba19;
    height: 60px;
    line-height: 60px;
    font-weight: 700;
  }

  button.button--menu-button {
    align-items: center;
    background-color: #f2f2f2;
    border: 0;
    box-sizing: border-box;
    color: #888888;
    display: flex;
    flex-direction: column;
    height: 80px;
    padding: 20px 14px 8px 14px;
    text-align: center;
    width: 80px;
  }
  button.button--menu-button > svg {
    height: 24px;
  }
  button.button--menu-button > span {
    font-size: 16px;
    padding-top: 8px;
  }
  @media (max-width: 374px) {
    button.button--menu-button {
      justify-content: center;
      padding: 0;
      width: 44px;
    }
    button.button--menu-button > span {
      display: none;
    }
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
      <MediaQuery minWidth={1272}>
        <ul>
          {links.map(({ text, href, external }, index) => (
            <li key={index}>
              {external ? (
                <a href={href}>{text}</a>
              ) : (
                <NavLink to={href} activeClassName="a--current-page">
                  {text}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </MediaQuery>
      <MediaQuery minWidth={1538}>
        <SearchButton navButton={true} onButtonClick={toggleSearch} />
        <UserPanel />
        <LanguagePicker />
      </MediaQuery>
      <MediaQuery maxWidth={1537}>
        <button
          className="button--menu-button"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <HamburgerIcon />
          <span>Menu</span>
        </button>
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
      href: "/services",
    },
    {
      text: "Themes",
      href: "/themes",
    },
    {
      text: "News",
      href: "https://news.gov.bc.ca/", // Use production pages until we have content on prototype pages
      // href: "/news",
      external: true,
    },
    {
      text: "Public Engagements",
      href: "https://engage.gov.bc.ca/govtogetherbc/", // Use production pages until we have content on prototype pages
      // href: "/public-engagements",
      external: true,
    },
    {
      text: "Jobs & HR",
      href: "https://www2.gov.bc.ca/gov/content/careers-myhr", // Use production pages until we have content on prototype pages
      // href: "/jobs-hr",
      external: true,
    },
    {
      text: "Contact Us",
      href:
        "https://www2.gov.bc.ca/gov/content/home/get-help-with-government-services", // Use production pages until we have content on prototype pages
      // href: "/contact",
      external: true,
    },
  ],
};

export default Nav;
