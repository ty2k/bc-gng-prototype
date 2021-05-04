import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";

import constructionMessage from "../../../pages/Under-Construction/message";
import Alert from "../Alert";

// import { ReactComponent as PersonIcon } from "../../assets/ionic-md-person.svg";
import { ReactComponent as SearchIcon } from "../../assets/search-solid.svg";
// import { ReactComponent as LanguageIcon } from "../../assets/language-solid.svg";

const Cover = styled.div`
  background: rgba(0, 0, 0, 0.7);
  height: 100vh;
  position: fixed;
  top: 80px;
  width: 100%;
`;

const ClickHole = styled.div`
  float: left;
  height: 100vh;
  width: calc(100% - 320px);
`;

const Menu = styled.div`
  background-color: white;
  height: calc(100vh - 80px);
  float: right;
  overflow-y: auto;
  width: 320px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      align-items: center;
      border-bottom: 1px solid #f2f2f2;
      border-top: 1px solid #f2f2f2;
      display: flex;
      font-size: 18px;

      &:first-child {
        border-top: none;
      }
      &:last-child {
        border-bottom: none;
      }

      a {
        align-items: center;
        color: #313132;
        display: flex;
        height: 44px;
        text-decoration: none;
        padding: 10px 16px;
        width: 320px;

        :focus {
          outline: 4px solid #3b99fc;
        }

        &.slide-out-menu-li-navlink {
          font-weight: 700;
          padding: 0;

          div.slide-out-menu-li-navlink-arrow-head {
            background-color: #fcba16;
            background-size: cover;
            clip-path: polygon(0% 0%, 0% 100%, 50% 100%, 100% 50%, 50% 0%);
            display: inline-block;
            height: 44px;
            width: 10px;
          }

          div.slide-out-menu-li-navlink-text {
            display: inline-block;
            padding-left: 6px;
          }
        }
      }
    }

    li.li--slide-out-menu-user-action {
      color: #003366;
      font-size: 16px;
      padding: 10px 16px;

      svg {
        height: 24px;
        margin-right: 4px;
        width: 24px;
      }

      &.li--slide-out-menu-language {
        font-size: 18px;
        padding: 23px 16px;

        svg {
          height: 24px;
          margin-left: 70px;
          width: 45px;
        }
      }
    }
  }
`;

const SearchBar = styled.div`
  align-items: center;
  background-color: #f2f2f2;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;

  form {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  input[type="search"] {
    background: none;
    border: 0;
    display: inline-block;
    font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
    font-size: 20px;
    padding: 10px 16px;
    vertical-align: middle;
    width: 276px;

    :focus {
      outline: 4px solid #3b99fc;
    }
  }
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  height: 44px;
  overflow: hidden;
  padding: 10px;
  width: 44px;

  svg {
    color: #888888;
  }

  :focus {
    background-color: #dedede;
    outline: 4px solid #3b99fc;
  }

  :hover {
    background-color: #dedede;
  }
`;

function SlideOutMenu({ alertMessages, navLinks, toggleSlideOutMenu }) {
  const inputRef = useRef(null);

  // When SlideOutMenu opens, transfer focus to the SearchBar input
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Cover>
      <ClickHole onClick={toggleSlideOutMenu} />
      <Menu tabIndex="0">
        <SearchBar>
          <form>
            <ReactTooltip />
            <input
              type="search"
              placeholder={"Search gov.bc.ca"}
              ref={inputRef}
              data-tip={constructionMessage}
            />
            <SearchButton
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <SearchIcon />
            </SearchButton>
          </form>
        </SearchBar>
        <ul>
          {navLinks.map(({ external, href, text }, index) => {
            return (
              <li key={`slide-out-menu-li-${index}`}>
                {external ? (
                  <a href={href} onClick={toggleSlideOutMenu}>
                    {text}
                  </a>
                ) : (
                  <NavLink
                    to={href}
                    activeClassName="slide-out-menu-li-navlink"
                    onClick={toggleSlideOutMenu}
                  >
                    <div className="slide-out-menu-li-navlink-arrow-head"></div>
                    <div className="slide-out-menu-li-navlink-text">{text}</div>
                  </NavLink>
                )}
              </li>
            );
          })}
          {/* <li className="li--slide-out-menu-user-action">
            <PersonIcon />
            Login
          </li>
          <li className="li--slide-out-menu-user-action">Register</li>
          <li className="li--slide-out-menu-user-action li--slide-out-menu-language">
            <LanguageIcon />
            English
          </li> */}
        </ul>
        {alertMessages?.length > 0 &&
          alertMessages.map((alertMessage, index) => {
            return (
              <Alert
                key={`alert-${index}`}
                alertHidden={false}
                closeable={false}
                index={index}
                messageArr={alertMessage.message}
                navHidden={false}
                onCloseButtonClick={null}
                onOpenButtonClick={null}
              />
            );
          })}
      </Menu>
    </Cover>
  );
}

export default SlideOutMenu;
