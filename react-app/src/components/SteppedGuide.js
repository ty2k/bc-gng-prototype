import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { ButtonLink } from "./Button";
import { ReactComponent as LeftArrowIcon } from "../components/assets/ionic-ios-arrow-back.svg";
import { ReactComponent as RightArrowIcon } from "../components/assets/ionic-ios-arrow-forward.svg";

const StyledGuide = styled.div`
  border-bottom: 1px solid #707070;
  padding-bottom: 29px;

  @media (max-width: 575px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const StyledGrid = styled.div`
  margin: 20px 0;

  @media (min-width: 576px) {
    max-width: 576px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 0;
  }
  @media (min-width: 992px) {
    max-width: 970px;
  }
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

    &:hover {
      text-decoration: underline;
    }

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

function SteppedGuide({ children, callToAction }) {
  return (
    <StyledGuide>
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
      {callToAction && (
        <ButtonLink href={callToAction.href} primary>
          {callToAction.label}
        </ButtonLink>
      )}
    </StyledGuide>
  );
}

const StyledLinkButtonPair = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 575px) {
    margin-left: 10px;
    margin-right: 10px;
  }

  a {
    align-items: center;
    display: flex;
    padding: 10px 20px;

    @media (max-width: 575px) {
      margin-left: 10px;
      margin-right: 10px;
    }

    &:last-child {
      margin-left: auto;
      margin-right: 0;

      @media (max-width: 575px) {
        margin-right: 10px;
      }
    }

    svg {
      height: 35px;
    }

    svg + span,
    span + svg {
      margin-left: 5px;
    }
  }
`;

function BackForwardButtonPair({
  backLabel,
  backHref,
  forwardLabel,
  forwardHref,
}) {
  return (
    <StyledLinkButtonPair>
      {backHref && backLabel && (
        <ButtonLink href={backHref} primary={false}>
          <LeftArrowIcon />
          <span>{backLabel}</span>
        </ButtonLink>
      )}
      {forwardHref && forwardLabel && (
        <ButtonLink href={forwardHref} primary={true}>
          <span>{forwardLabel}</span>
          <RightArrowIcon />
        </ButtonLink>
      )}
    </StyledLinkButtonPair>
  );
}

export { SteppedGuide, BackForwardButtonPair };
