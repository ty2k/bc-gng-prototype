import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledBreadcrumbs = styled.ol`
  align-items: stretch;
  display: flex;
  list-style: none;
  margin: 30px auto 0 auto;
  overflow: none;
  padding: 0;

  @media (min-width: 576px) {
    max-width: 576px;
  }
  @media (min-width: 768px) {
    max-width: 728px;
  }
  @media (min-width: 992px) {
    max-width: 952px;
  }
`;

const StyledBreadcrumb = styled.li`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  float: left;
  height: 48px;
  max-width: 320px;
  overflow: hidden;
  /* padding: 0 18px 0 30px; */

  span.span--breadcrumb-tail {
    margin-left: 20px;
  }
  span.span--breadcrumb-body {
    min-width: 200px;
    width: min-content;
  }
  span.span--breadcrumb-separator-tail {
    background-color: transparent;
    border-left: 10px solid transparent;
    border-top: 24px solid #fcba19;
    border-bottom: 24px solid #fcba19;
    margin-left: 5px;
  }
  span.span--breadcrumb-separator-arrow {
    border-left: 10px solid #fcba19;
    border-top: 24px solid transparent;
    border-bottom: 24px solid transparent;
  }

  a,
  span {
    color: #313132;
    text-decoration: none;
  }

  &:first-child {
    padding-left: 0;

    span.span--breadcrumb-body {
      max-width: 194px;
    }
  }

  &:last-child {
    padding-right: 0;

    span.span--breadcrumb-tail {
      background-color: transparent;
      border-left: 10px solid transparent;
      border-top: 24px solid #fcba19;
      border-bottom: 24px solid #fcba19;
    }
    span.span--breadcrumb-body {
      align-items: center;
      background-color: #fcba19;
      display: flex;
      height: 48px;
      padding: 0 20px;
    }
    span.span--breadcrumb-arrow {
      border-left: 10px solid #fcba19;
      border-top: 24px solid transparent;
      border-bottom: 24px solid transparent;
    }
  }
`;

const Breadcrumb = ({ position, href, label, last, needsSeparator }) => {
  return (
    <StyledBreadcrumb key={position}>
      {position !== 0 && <span class="span--breadcrumb-tail"></span>}
      <span className="span--breadcrumb-body">
        {last ? (
          <span className="span--breadcrumb-label">{label}</span>
        ) : (
          <a className="a--breadcrumb-body" href={href}>
            {label}
          </a>
        )}
      </span>
      <span class="span--breadcrumb-arrow" />
      {needsSeparator && (
        <>
          <span class="span--breadcrumb-separator-tail" />
          <span class="span--breadcrumb-separator-arrow" />
        </>
      )}
    </StyledBreadcrumb>
  );
};

function Breadcrumbs({ breadcrumbs }) {
  const last = breadcrumbs.length - 1;
  const needsSeparator = [];

  if (breadcrumbs.length > 2) {
    needsSeparator.push(0);
  }

  return (
    <StyledBreadcrumbs>
      {breadcrumbs.map(({ href, label }, index) => (
        <Breadcrumb
          position={index}
          href={href}
          label={label}
          last={index === last}
          needsSeparator={needsSeparator.indexOf(index) !== -1}
        />
      ))}
    </StyledBreadcrumbs>
  );
}

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
};

Breadcrumbs.defaultProps = {
  breadcrumbs: [
    {
      href: "/",
      label: "Employment, Business & Economic Development",
    },
    {
      href: "/",
      label: "Employment Standards & Workplace Safety",
    },
    {
      href: "/",
      label: "Employment Standards",
    },
  ],
};

export default Breadcrumbs;
