import React, { useState } from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";
import styled from "styled-components";

import Nav from "./Nav";
import Alert from "./Alert";
import useDocumentScrollThrottled from "../useDocumentScrollThrottled";
import { ReactComponent as HLogo } from "./assets/BCID_H_rgb_pos.svg";
import { ReactComponent as VLogo } from "./assets/BCID_V_rgb_pos.svg";
import { ReactComponent as HamburgerIcon } from "./assets/bars-solid.svg";

const HeaderStyled = styled.header`
  background-color: white;
  position: sticky;
  top: 0;

  /* Header width is full page when not scrolled in desktop */
  &.header--mini {
    max-width: 284px;
    width: min-content;
  }

  div.wrapper {
    align-items: center;
    box-shadow: 0px 3px 6px #d6d6d6;
    display: flex;
    height: 80px;
    justify-content: space-between;
  }
  &.header--mini {
    div.wrapper {
      align-items: stretch;
      height: auto;
    }
  }

  div.wrapper > div.div--title {
    background-color: white;
    display: flex;
    align-items: center;
  }
  &.header--mini {
    div.wrapper > div.div--title {
      flex-direction: column;
      max-width: 240px;
      text-align: center;
    }
  }

  div.wrapper > div.div--title > svg.logo {
    display: inline-block;
    height: 80px;
    vertical-align: top;
  }
  div.wrapper > div.div--title > svg.vlogo {
    width: 84px;
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

  div.wrapper > div.div--menu-icon {
    background-color: #f2f2f2;
    display: flex;
    height: auto;
    /* margin-left: 20px; */
  }
  div.wrapper > div.div--menu-icon > button#menu-icon {
    appearance: none;
    background: none;
    border: 0;
    padding: 0;
    text-decoration: none;
  }
  div.wrapper > div.div--menu-icon > button#menu-icon:focus {
    outline: 4px solid #3b99fc;
    outline-offset: 1px;
  }
  div.wrapper > div.div--menu-icon > button#menu-icon span {
    color: #313132;
    display: block;
    font-size: 15px;
    text-align: center;
  }
  div.wrapper > div.div--menu-icon > button#menu-icon svg {
    box-sizing: border-box;
    color: #888888;
    display: block;
    height: 44px;
    margin: 18px 0;
    padding: 0 10px;
    width: 44px;
  }
`;

function Header({ title, userSession, alertMessages }) {
  const [navHidden, setNavHidden] = useState(false);

  const MINIMUM_SCROLL = window.innerHeight / 2;

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setNavHidden(isScrolledDown && isMinimumScrolled);
  });

  function toggleMenu(event) {
    setNavHidden(() => {
      return false;
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
        <Nav hidden={navHidden} />
        {navHidden ? (
          <div className="div--menu-icon">
            <button
              aria-label="Open the menu"
              id="menu-icon"
              onClick={(e) => {
                toggleMenu(e);
              }}
            >
              <HamburgerIcon />
            </button>
          </div>
        ) : null}
      </div>
      {alertMessages.map((alertMessage) => {
        return <Alert navHidden message={alertMessage.message} />;
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
