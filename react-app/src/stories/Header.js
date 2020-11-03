import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";
import styled from "styled-components";

import Nav from "./Nav";
import { ReactComponent as HLogo } from "./assets/BCID_H_rgb_pos.svg";
import { ReactComponent as VLogo } from "./assets/BCID_V_rgb_pos.svg";
import { ReactComponent as HamburgerIcon } from "./assets/bars-solid.svg";

const HeaderStyled = styled.header`
  background-color: white;
  box-shadow: 0px 3px 6px #d6d6d6;
  position: sticky;
  top: 0;

  /* Header width is full page when not scrolled in desktop */
  &.header--mini {
    max-width: 284px;
    width: min-content;
  }

  div.wrapper {
    align-items: center;
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

function Header({ title, userSession }) {
  const [navHidden, setNavHidden] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > window.innerHeight / 2);
      setNavHidden(window.scrollY > window.innerHeight / 2);
    });
  }, []);

  function toggleMenu(event) {
    console.log(event);
    setNavHidden(!navHidden);
  }

  return (
    <HeaderStyled className={scroll && navHidden ? "header--mini" : null}>
      <div className="wrapper">
        <div className="div--title">
          {/* Satellite sites use vertical logo and decorative pipe with text title in desktop mode */}
          {title ? (
            <>
              <VLogo id="logo" className="logo vlogo" aria-hidden="true" />
              <span className="span--title-pipe"></span>
              <span className="span--title">{title}</span>
            </>
          ) : (
            <HLogo id="logo" className="logo hlogo" />
          )}
        </div>
        <Nav hidden={navHidden} />
        {scroll && navHidden ? (
          <div className="div--menu-icon">
            <button
              aria-label="Open the menu"
              id="menu-icon"
              onClick={(event) => toggleMenu(event)}
            >
              <HamburgerIcon />
            </button>
          </div>
        ) : null}
        {/* <div>
          <MediaQuery minWidth={992}>
            <SearchBar />
            <UserPanel userSession={userSession} />
          </MediaQuery>
          <MediaQuery maxWidth={991}>
            <a href="/#" onClick={(event) => toggleMenu(event)} id="menu-icon">
              <HamburgerIcon />
              <span>Menu</span>
            </a>
          </MediaQuery>
        </div> */}
      </div>
      {/* <MediaQuery maxWidth={991}>
        <Nav hidden={navHidden} />
      </MediaQuery>
      <MediaQuery minWidth={992}>
        <Nav />
      </MediaQuery> */}
    </HeaderStyled>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  navHidden: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  navHidden: false,
};

export default Header;
