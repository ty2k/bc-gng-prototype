import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledGrid = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 20px 0;
  max-height: 210px;
`;

const StyledNavTab = styled.div`
  align-items: center;
  display: flex;
  margin: 5px 0;

  a {
    align-items: center;
    color: #313132;
    display: flex;
    font-weight: 700;
    min-height: 44px;
    text-decoration: none;

    // FontAwesome chevron-right-solid to indicate a page that can be opened
    span.span--navtab-chevron {
      content: "";
      background-image: url(data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJjaGV2cm9uLXJpZ2h0IiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtY2hldnJvbi1yaWdodCBmYS13LTEwIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyMCA1MTIiPjxwYXRoIGZpbGw9IiMzMTMxMzIiIGQ9Ik0yODUuNDc2IDI3Mi45NzFMOTEuMTMyIDQ2Ny4zMTRjLTkuMzczIDkuMzczLTI0LjU2OSA5LjM3My0zMy45NDEgMGwtMjIuNjY3LTIyLjY2N2MtOS4zNTctOS4zNTctOS4zNzUtMjQuNTIyLS4wNC0zMy45MDFMMTg4LjUwNSAyNTYgMzQuNDg0IDEwMS4yNTVjLTkuMzM1LTkuMzc5LTkuMzE3LTI0LjU0NC4wNC0zMy45MDFsMjIuNjY3LTIyLjY2N2M5LjM3My05LjM3MyAyNC41NjktOS4zNzMgMzMuOTQxIDBMMjg1LjQ3NSAyMzkuMDNjOS4zNzMgOS4zNzIgOS4zNzMgMjQuNTY4LjAwMSAzMy45NDF6Ij48L3BhdGg+PC9zdmc+Cg==);
      background-repeat: no-repeat;
      background-size: 30px 30px;
      display: inline-block;
      height: 30px;
      min-width: 30px;
    }

    &.a--navtab-current-page {
      // FontAwesome chevron-down-solid to indicate an open page
      span.span--navtab-chevron {
        content: "";
        background-image: url(data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJjaGV2cm9uLWRvd24iIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1jaGV2cm9uLWRvd24gZmEtdy0xNCIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBmaWxsPSIjMzEzMTMyIiBkPSJNMjA3LjAyOSAzODEuNDc2TDEyLjY4NiAxODcuMTMyYy05LjM3My05LjM3My05LjM3My0yNC41NjkgMC0zMy45NDFsMjIuNjY3LTIyLjY2N2M5LjM1Ny05LjM1NyAyNC41MjItOS4zNzUgMzMuOTAxLS4wNEwyMjQgMjg0LjUwNWwxNTQuNzQ1LTE1NC4wMjFjOS4zNzktOS4zMzUgMjQuNTQ0LTkuMzE3IDMzLjkwMS4wNGwyMi42NjcgMjIuNjY3YzkuMzczIDkuMzczIDkuMzczIDI0LjU2OSAwIDMzLjk0MUwyNDAuOTcxIDM4MS40NzZjLTkuMzczIDkuMzcyLTI0LjU2OSA5LjM3Mi0zMy45NDIgMHoiPjwvcGF0aD48L3N2Zz4K);
      }
    }

    span.span--navtab-label {
      display: inline-block;
      padding-left: 16px;
    }
  }
`;

function NavTab({ label, href, number }) {
  return (
    <StyledNavTab>
      <NavLink exact to={href} activeClassName="a--navtab-current-page">
        <span className="span--navtab-chevron" />
        <span className="span--navtab-label">{`${number}. ${label}`}</span>
      </NavLink>
    </StyledNavTab>
  );
}

function NumberedPageNav({ children }) {
  return (
    <StyledGrid>
      {children.map(({ label, href }, index) => {
        return (
          <NavTab
            key={`tabbed-page-nav-${index}`}
            label={label}
            href={href}
            number={index + 1}
          />
        );
      })}
    </StyledGrid>
  );
}

export default NumberedPageNav;
