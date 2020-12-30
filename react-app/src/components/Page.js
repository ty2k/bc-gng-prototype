import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import Breadcrumbs from "./Breadcrumbs";

import { ReactComponent as ArrowLeft } from "./assets/arrow-left-solid.svg";

const StyledSkipLink = styled.a`
  color: white;
  display: hidden;
  font-weight: 700;
  width: 100%;

  div {
    display: none;

    span {
      display: none;
    }
  }

  &:focus {
    border: 3px solid #009dff;
    display: block;

    div {
      align-items: center;
      background-color: #003366;
      display: flex;
      justify-content: center;
      min-height: 44px;

      span {
        display: block;
      }
    }
  }
`;

function SkipToMainContentLink() {
  return (
    <StyledSkipLink href="#main-content-anchor" tabIndex="0">
      <div>
        <span>Skip to Main Content</span>
      </div>
    </StyledSkipLink>
  );
}

const StyledBackArrow = styled(Link)`
  color: #313132;
  text-decoration: none;

  svg {
    display: inline;
    height: 27px;
    position: relative;
    top: 2px;
    z-index: -1;
  }
`;

function BackArrow({ href, ariaLabel }) {
  return (
    <StyledBackArrow to={href} aria-label={`Back to ${ariaLabel}`}>
      <ArrowLeft />
    </StyledBackArrow>
  );
}

const StyledPageTitle = styled.div`
  display: block;
  margin: 20px 0;

  a {
    display: inline;
    margin-right: 5px;
  }

  h1 {
    display: inline;
  }
`;

function PageTitle({ title, parentHref, parentTitle }) {
  return (
    <StyledPageTitle>
      {parentHref && <BackArrow href={parentHref} ariaLabel={parentTitle} />}
      {title && <h1>{title}</h1>}
    </StyledPageTitle>
  );
}

function Page({
  title = "",
  breadcrumbs = [],
  content,
  parentHref = "",
  parentTitle = "",
}) {
  return (
    <>
      <SkipToMainContentLink />
      <span id="main-content-anchor"></span>
      <Header title={title} />
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      )}
      <main>
        <PageTitle
          title={title}
          parentHref={parentHref}
          parentTitle={parentTitle}
        />
        {content}
      </main>
    </>
  );
}

Page.propTypes = {
  title: PropTypes.string,
  breadcrumbs: PropTypes.array,
  content: PropTypes.object,
};

Page.defaultProps = {};

export default Page;
