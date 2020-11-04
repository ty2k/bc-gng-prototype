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

  div.div--language-select {
    align-items: center;
    background-color: #f2f2f2;
    display: flex;
    font-size: 16px;
    min-width: fit-content;
    padding-right: 30px;
  }
  div.div--language-select > a {
    color: #313132;
    text-decoration: none;
  }
  div.div--language-select > a::after {
    content: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgd2lkdGg9IjFlbSIgaGVpZ2h0PSIxZW0iIHN0eWxlPSItbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGQ9Ik0yNTYgMjk0LjFMMzgzIDE2N2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMHM5LjMgMjQuNiAwIDM0TDI3MyAzNDVjLTkuMSA5LjEtMjMuNyA5LjMtMzMuMS43TDk1IDIwMS4xYy00LjctNC43LTctMTAuOS03LTE3czIuMy0xMi4zIDctMTdjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTI3LjEgMTI3eiIgZmlsbD0iY3VycmVudGNvbG9yIi8+PC9zdmc+Cg==");
    padding-left: 5px;
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
        {/* SearchBar with input field hidden initially */}
        <SearchButton onButtonClick={toggleSearch} />
        {/* Login/Register */}
        <UserPanel />
        {/* Language selector */}
        <LanguagePicker />
      </MediaQuery>
      {/* <MediaQuery maxWidth={991}>
        <div className="nav-container--buttons">
          <Button size="medium" label="Login" aria-label="Login" />
          <Button
            primary
            size="medium"
            label="Register"
            aria-label="Register"
          />
        </div>
      </MediaQuery> */}
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
