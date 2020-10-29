import React, { useState } from "react";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";
import styled from "styled-components";

import { SearchBar } from "./SearchBar";
import { Nav } from "./Nav";
import UserPanel from "./UserPanel";
import { ReactComponent as HLogo } from "./assets/BCID_H_rgb_pos.svg";
import { ReactComponent as VLogo } from "./assets/BCID_V_rgb_pos.svg";
import { ReactComponent as HamburgerIcon } from "./assets/bars-solid.svg";

const HeaderStyled = styled.header`
  div.wrapper {
    align-items: center;
    border-bottom: 2px solid #d1d1d1;
    display: flex;
    font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
    height: 80px;
    justify-content: space-between;
  }

  div.wrapper > div {
    display: flex;
    align-items: center;
  }

  div.wrapper > div > svg {
    display: inline-block;
    vertical-align: top;
  }
  div.wrapper > div > svg.hlogo {
    display: inline-block;
    height: 80px;
    vertical-align: top;
  }
  div.wrapper > div > svg.vlogo {
    display: inline-block;
    height: 80px;
    width: 84px;
    vertical-align: top;
  }

  div.wrapper > div > span.span--title {
    font-weight: 900;
    font-size: 21px;
    line-height: 1;
    margin: 6px 0 6px 20px;
    display: inline-block;
  }
  div.wrapper > div > span.span--title-pipe {
    content: "";
    height: 41px;
    width: 0px;
    border-left: 1px solid #707070;
  }

  div.wrapper > div > button {
    margin-left: 11px;
  }
  div.wrapper > div > button:first-of-type {
    margin-left: 32px;
  }
  div.wrapper > div > button:last-of-type {
    margin-right: 11px;
  }

  div.wrapper > div > a#menu-icon {
    text-decoration: none;
  }
  div.wrapper > div > a#menu-icon span {
    color: #313132;
    display: block;
    font-size: 15px;
    text-align: center;
  }
  div.wrapper > div > a#menu-icon svg {
    box-sizing: border-box;
    color: #313132;
    display: block;
    height: 44px;
    margin: 0 10px;
    padding: 0 10px;
    width: 44px;
  }
`;

function Header({ title, govSite, userSession }) {
  const [navHidden, setNavHidden] = useState(true);

  function toggleMenu(event) {
    setNavHidden(!navHidden);
  }

  return (
    <HeaderStyled>
      <div className="wrapper">
        <div>
          {/* Satellite sites use vertical logo to allow for text titles */}
          {govSite ? (
            <HLogo id="logo" className="hlogo" />
          ) : (
            <VLogo id="logo" className="vlogo" />
          )}
          {/* Satellite sites have a vertical pipe before text title */}
          {title ? (
            <>
              <span className="span--title-pipe"></span>
              <span className="span--title">{title}</span>
            </>
          ) : null}
        </div>
        <div>
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
        </div>
      </div>
      <MediaQuery maxWidth={991}>
        <Nav hidden={navHidden} />
      </MediaQuery>
      <MediaQuery minWidth={992}>
        <Nav />
      </MediaQuery>
    </HeaderStyled>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  govSite: PropTypes.bool.isRequired,
  navHidden: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  govSite: true,
  navHidden: true,
};

export default Header;
