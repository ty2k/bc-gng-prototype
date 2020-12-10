import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import Breadcrumbs from "./Breadcrumbs";

import { ReactComponent as ArrowLeft } from "./assets/arrow-left-solid.svg";

const StyledBackArrow = styled(Link)`
  color: #313132;
  text-decoration: none;

  svg {
    display: inline-block;
    height: 27px;
    position: relative;
    top: 2px;
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

  a {
    display: inline-block;
    margin-right: 5px;
  }

  h1 {
    display: inline-block;
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
