import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MediaQuery, { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import Nav from "./Nav";
import Alert from "./Alert";
import SearchBar from "./Nav/SearchBar";
import SlideOutMenu from "./Nav/SlideOutMenu";
import useDocumentScrollThrottled from "../../useDocumentScrollThrottled";
import { ReactComponent as HLogo } from "../assets/BCID_H_rgb_pos.svg";
import { ReactComponent as VLogo } from "../assets/BCID_V_rgb_pos.svg";
import { ReactComponent as HamburgerIcon } from "../assets/bars-solid.svg";
import { ReactComponent as InfoIcon } from "../assets/ionic-ios-information-circle.svg";
import { ReactComponent as BackToTopIcon } from "../assets/back-to-top.svg";

const HeaderStyled = styled.header`
  background: none;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 100vw;
  z-index: 1;

  /* The left-collapsed header on desktop sizes at least 1271px wide */
  &.header--mini {
    min-height: 125px; // Must be larger than Header + Alert for collapse
    max-width: min-content;
  }

  div.wrapper {
    align-items: center;
    background-color: white;
    box-shadow: 0px 3px 6px #d6d6d6;
    display: flex;
    height: 80px;
    justify-content: space-between;
    overflow: hidden;
  }
  &.header--mini {
    div.wrapper {
      align-items: stretch;
      height: auto;
    }
  }

  div.wrapper > div.div--title {
    align-items: center;
    background-color: white;
    display: flex;
  }
  &.header--mini {
    div.wrapper > div.div--title {
      flex-direction: column;
      max-width: 250px;
      text-align: center;
    }
  }

  div.wrapper > div.div--title > a:focus {
    outline: 4px solid #3b99fc;
  }

  div.wrapper > div.div--title > a > svg.logo {
    display: inline-block;
    height: 80px;
    vertical-align: top;
  }
  div.wrapper > div.div--title > a > svg.vlogo {
    min-width: 85px;
  }
  &.header--mini {
    div.wrapper > div.div--title > a > svg.logo {
      padding: 0 20px;
    }
  }

  div.wrapper > div.div--title > span.span--title {
    font-weight: 900;
    font-size: 21px;
    line-height: 1;
    margin: 6px 20px;
    min-width: 205px;
    display: inline-block;
  }
  @media (max-width: 575px) {
    div.wrapper > div.div--title > span.span--title {
      margin: 6px;
      min-width: unset;
    }
  }
  &.header--mini {
    div.wrapper > div.div--title > span.span--title {
      margin: 6px 20px 12px 20px;
      max-width: 228px;
      width: 228px;
    }
  }
  div.wrapper > div.div--title > span.span--title-pipe {
    content: "";
    height: 41px;
    width: 0px;
    border-left: 1px solid #707070;
  }
  &.header--mini {
    div.wrapper > div.div--title > span.span--title-pipe {
      display: none;
    }
  }

  div.wrapper > div.div--header-mini-icons {
    display: flex;
    flex-direction: column;
    height: auto;
  }
  div.wrapper > div.div--header-mini-icons > button {
    appearance: none;
    background: none;
    border: 0;
    cursor: pointer;
    padding: 0;
    text-decoration: none;
    width: 44px;
  }
  div.wrapper > div.div--header-mini-icons > button:focus {
    outline: 4px solid #3b99fc;
    outline-offset: 1px;
  }
  div.wrapper > div.div--header-mini-icons > button svg {
    box-sizing: border-box;
    height: 44px;
    padding: 7px;
    width: 44px;
  }
  div.wrapper > div.div--header-mini-icons > button#menu-icon {
    background-color: #f2f2f2;
    color: #888888;
    cursor: pointer;
    height: 100%;
    min-height: 44px;
  }
  div.wrapper > div.div--header-mini-icons > button#menu-icon svg {
    padding: 9px;
  }
  div.wrapper > div.div--header-mini-icons > button#info-icon {
    background-color: #2d73b9; // #5f9cd8 does not pass WCAG
    color: white;
    max-height: 44px;
  }
  div.wrapper > div.div--header-mini-icons > button#info-icon svg {
    padding: 7px;
  }

  button#button--back-to-top {
    background: none;
    border: none;
    cursor: pointer;
    height: 44px;
    padding: 0;
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 44px;

    svg {
      height: 44px;
      opacity: 0.5;
      width: 44px;
    }
  }
`;

function Header({ alertMessages, navLinks, satellite, title }) {
  const [navHidden, setNavHidden] = useState(false);
  const [alertHidden, setAlertHidden] = useState(false);
  const [searchHidden, setSearchHidden] = useState(true);
  const [slideOutMenuHidden, setSlideOutMenuHidden] = useState(true);
  const [backToTopShown, setBackToTopShown] = useState(false);

  // Window sizes less than this breakpoint get a full-width Header at all times
  const isCollapsible = useMediaQuery({ query: `(min-width: 1271px)` });

  // Round window.innerHeight to prevent a sub-pixel value being returned.
  // Sub-pixel values (ex: 820.5) will cause flashing between collapsed and
  // full-width states.
  const MINIMUM_SCROLL = Math.round(window.innerHeight / 2);

  useDocumentScrollThrottled((callbackData) => {
    let { previousScrollTop, currentScrollTop } = callbackData;
    previousScrollTop = Math.round(previousScrollTop);
    currentScrollTop = Math.round(currentScrollTop);
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setNavHidden(() => {
      return isScrolledDown && isMinimumScrolled;
    });

    setBackToTopShown(() => {
      return isMinimumScrolled;
    });
  });

  function toggleNav() {
    setNavHidden(() => {
      return false;
    });
  }

  function showAlertAndNav() {
    setNavHidden(() => {
      return false;
    });
    setAlertHidden(() => {
      return false;
    });
  }

  function hideAlert() {
    setAlertHidden(() => {
      return true;
    });
  }

  function toggleSearch() {
    setSearchHidden(() => {
      return !searchHidden;
    });
  }

  function toggleSlideOutMenu() {
    setSlideOutMenuHidden(() => {
      return !slideOutMenuHidden;
    });
  }

  return (
    <HeaderStyled
      className={
        navHidden && slideOutMenuHidden && isCollapsible && "header--mini"
      }
    >
      <div className="wrapper">
        <div className="div--title">
          {/* Satellite sites use vertical logo and decorative pipe with text title in desktop mode */}
          {satellite ? (
            <>
              {navHidden ? (
                <>
                  <Link to="/" title="Home">
                    <HLogo id="logo" className="logo hlogo" />
                  </Link>
                  <span className="span--title-pipe"></span>
                  <span className="span--title">{title}</span>
                </>
              ) : (
                <>
                  <Link to="/" title="Home">
                    <VLogo
                      id="logo"
                      className="logo vlogo"
                      aria-hidden="true"
                    />
                  </Link>
                  <MediaQuery minWidth={575}>
                    <span className="span--title-pipe"></span>
                  </MediaQuery>
                  <span className="span--title">{title}</span>
                </>
              )}
            </>
          ) : (
            <Link to="/" title="Home">
              <HLogo id="logo" className="logo hlogo" />
            </Link>
          )}
        </div>
        <Nav
          hidden={navHidden && slideOutMenuHidden && isCollapsible}
          navLinks={navLinks}
          toggleSearch={toggleSearch}
          toggleSlideOutMenu={toggleSlideOutMenu}
        />
        {navHidden && slideOutMenuHidden && isCollapsible && (
          <div className="div--header-mini-icons">
            <button
              aria-label="Open the navigation menu"
              id="menu-icon"
              onClick={toggleNav}
            >
              <HamburgerIcon />
            </button>
            {alertMessages?.length > 0 && (
              <button
                aria-label="Open the navigation menu and show alert"
                id="info-icon"
                onClick={showAlertAndNav}
              >
                <InfoIcon />
              </button>
            )}
          </div>
        )}
      </div>
      {!navHidden && !searchHidden && (
        <SearchBar
          toggleSearchBar={toggleSearch}
          placeholder={"Search gov.bc.ca"}
        />
      )}
      {slideOutMenuHidden &&
        alertMessages?.length > 0 &&
        alertMessages.map((alertMessage, index) => {
          return (
            <Alert
              alertHidden={alertHidden}
              key={`alert-${index}`}
              index={index}
              messageArr={alertMessage.message}
              navHidden={navHidden}
              onCloseButtonClick={hideAlert}
              onOpenButtonClick={showAlertAndNav}
            />
          );
        })}
      {!slideOutMenuHidden && (
        <SlideOutMenu
          alertMessages={alertMessages}
          navLinks={navLinks}
          toggleSlideOutMenu={toggleSlideOutMenu}
        />
      )}
      {backToTopShown && slideOutMenuHidden && (
        <MediaQuery maxWidth={1271}>
          <button
            id="button--back-to-top"
            aria-label="Back to top"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <BackToTopIcon />
          </button>
        </MediaQuery>
      )}
    </HeaderStyled>
  );
}

Header.propTypes = {
  alertMessages: PropTypes.arrayOf(PropTypes.object),
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      href: PropTypes.string,
      exteral: PropTypes.bool,
    })
  ),
  satellite: PropTypes.bool,
  title: PropTypes.string,
};

Header.defaultProps = {
  alertMessages: [
    {
      message: [
        {
          type: "p",
          children: [
            {
              type: "text",
              children: "B.C. has declared a state of emergency. ",
            },
            {
              type: "a-internal",
              href: "/under-construction",
              children: "Our response to COVID-19",
            },
            {
              type: "text",
              children: " | ",
            },
            {
              type: "a-internal",
              href: "/logout",
              children: "Logout",
            },
          ],
        },
      ],
    },
  ],
  navLinks: [
    {
      text: "Services",
      href: "/services",
    },
    {
      text: "Topics",
      href: "/themes",
    },
    {
      text: "News",
      href: "/under-construction",
      // href: "https://news.gov.bc.ca/",
      // href: "/news",
      external: true,
    },
    {
      text: "Public Engagements",
      href: "/under-construction",
      // href: "https://engage.gov.bc.ca/govtogetherbc/",
      // href: "/public-engagements",
      external: true,
    },
    {
      text: "Jobs & HR",
      href: "/under-construction",
      // href: "https://www2.gov.bc.ca/gov/content/careers-myhr",
      // href: "/jobs-hr",
      external: true,
    },
    {
      text: "Contact Us",
      href: "/under-construction",
      // href:
      //   "https://www2.gov.bc.ca/gov/content/home/get-help-with-government-services",
      // href: "/contact",
      external: true,
    },
  ],
  satellite: false,
};

export default Header;
