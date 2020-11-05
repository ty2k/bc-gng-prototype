import React, { useState } from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";
import styled from "styled-components";

import Nav from "./Nav";
import Alert from "./Alert";
import SearchBar from "./SearchBar";
import useDocumentScrollThrottled from "../useDocumentScrollThrottled";
import { ReactComponent as HLogo } from "./assets/BCID_H_rgb_pos.svg";
import { ReactComponent as VLogo } from "./assets/BCID_V_rgb_pos.svg";
import { ReactComponent as HamburgerIcon } from "./assets/bars-solid.svg";
import { ReactComponent as InfoIcon } from "./assets/ionic-ios-information-circle.svg";

const HeaderStyled = styled.header`
  background-color: white;
  position: sticky;
  top: 0;

  /* Header width is full page when not scrolled in desktop */
  &.header--mini {
    min-height: 125px; // Must be larger than Header + Alert for collapse
    max-width: min-content;
  }

  div.wrapper {
    align-items: center;
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

  div.wrapper > div.div--title > svg.logo {
    display: inline-block;
    height: 80px;
    vertical-align: top;
  }
  div.wrapper > div.div--title > svg.vlogo {
    min-width: 85px;
  }
  &.header--mini {
    div.wrapper > div.div--title > svg.logo {
      padding: 0 20px;
    }
  }

  div.wrapper > div.div--title > span.span--title {
    font-weight: 900;
    font-size: 21px;
    line-height: 1;
    margin: 6px 20px;
    display: inline-block;
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
    height: 100%;
  }
  div.wrapper > div.div--header-mini-icons > button#menu-icon svg {
    padding: 9px;
  }
  div.wrapper > div.div--header-mini-icons > button#info-icon {
    background-color: #5f9cd8;
    color: white;
    max-height: 44px;
  }
  div.wrapper > div.div--header-mini-icons > button#info-icon svg {
    padding: 7px;
  }
`;

function Header({ title, userSession, alertMessages }) {
  const [navHidden, setNavHidden] = useState(false);
  const [alertHidden, setAlertHidden] = useState(false);
  const [searchHidden, setSearchHidden] = useState(true);

  const MINIMUM_SCROLL = window.innerHeight / 2;

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setNavHidden(isScrolledDown && isMinimumScrolled);
  });

  function toggleNav(event) {
    setNavHidden(() => {
      return false;
    });
  }

  function showAlert(event) {
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

  return (
    <HeaderStyled className={navHidden ? "header--mini" : null}>
      <div className="wrapper">
        <div className="div--title">
          {/* Satellite sites use vertical logo and decorative pipe with text title in desktop mode */}
          {title ? (
            <>
              {navHidden ? (
                <>
                  <HLogo id="logo" className="logo hlogo" />
                  <span className="span--title-pipe"></span>
                  <span className="span--title">{title}</span>
                </>
              ) : (
                <>
                  <VLogo id="logo" className="logo vlogo" aria-hidden="true" />
                  <span className="span--title-pipe"></span>
                  <span className="span--title">{title}</span>
                </>
              )}
            </>
          ) : (
            <HLogo id="logo" className="logo hlogo" />
          )}
        </div>
        <Nav hidden={navHidden} toggleSearch={toggleSearch} />
        {navHidden ? (
          <div className="div--header-mini-icons">
            <button
              aria-label="Open the navigation menu"
              id="menu-icon"
              onClick={(e) => {
                toggleNav(e);
              }}
            >
              <HamburgerIcon />
            </button>
            {alertMessages && alertMessages.length > 0 ? (
              <button
                aria-label="Open the navigation menu and show alert"
                id="info-icon"
                onClick={(e) => {
                  showAlert(e);
                }}
              >
                <InfoIcon />
              </button>
            ) : null}
          </div>
        ) : null}
      </div>
      {searchHidden ? null : <SearchBar />}
      {alertMessages &&
        alertMessages.length > 0 &&
        alertMessages.map((alertMessage, index) => {
          return (
            <Alert
              alertHidden={alertHidden}
              key={`alert-${index}`}
              message={alertMessage.message}
              navHidden={navHidden}
              onButtonClick={hideAlert}
            />
          );
        })}
    </HeaderStyled>
  );
}

Header.propTypes = {
  alertMessages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string,
};

Header.defaultProps = {
  alertMessages: [
    {
      message:
        "B.C. has declared a state of emergency. Learn about COVID-19 health issues. | B.C.’s response to COVID-19.",
    },
  ],
};

export default Header;
