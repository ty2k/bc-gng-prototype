import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ReactComponent as BreadcrumbTail } from "./assets/breadcrumb-tail.svg";
import { ReactComponent as BreadcrumbHead } from "./assets/breadcrumb-head.svg";
import { ReactComponent as BreadcrumbDivider } from "./assets/breadcrumb-divider.svg";

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
  margin-left: 20px;
  max-width: 317px;
  overflow: hidden;

  svg.svg--breadcrumb-divider {
    overflow: visible;
    padding-left: 10px;
  }

  span.span--breadcrumb-body {
    min-width: 220px;
    width: min-content;
  }

  a,
  span {
    color: #313132;
    text-decoration: none;
  }

  &:first-child {
    margin-left: 0;

    span.span--breadcrumb-body {
      max-width: 280px;
    }
  }

  &:last-child {
    padding-right: 0;

    span.span--breadcrumb-tail {
      background-color: transparent;
      color: #fcba19;
      height: 48px;

      svg {
        height: 48px;
      }
    }

    span.span--breadcrumb-body {
      align-items: center;
      background-color: #fcba19;
      display: flex;
      height: 48px;
      padding: 0 20px;
    }

    span.span--breadcrumb-head {
      background-color: transparent;
      color: #fcba19;
      height: 48px;

      svg {
        height: 48px;
      }
    }
  }
`;

const Breadcrumb = ({ position, href, label, last, needsDivider }) => {
  return (
    <StyledBreadcrumb key={position}>
      {last && (
        <span className="span--breadcrumb-tail">
          <BreadcrumbTail />
        </span>
      )}
      <span className="span--breadcrumb-body">
        {last ? (
          <span className="span--breadcrumb-label">{label}</span>
        ) : (
          <a className="a--breadcrumb-body" href={href}>
            {label}
          </a>
        )}
      </span>
      {last && (
        <span className="span--breadcrumb-head">
          <BreadcrumbHead />
        </span>
      )}
      {needsDivider && (
        <BreadcrumbDivider className="svg--breadcrumb-divider" />
      )}
    </StyledBreadcrumb>
  );
};

function Breadcrumbs({ breadcrumbs }) {
  const last = breadcrumbs.length - 1;
  const needsDivider = [];

  if (breadcrumbs.length > 2) {
    needsDivider.push(0);
  }

  return (
    <StyledBreadcrumbs>
      {breadcrumbs.map(({ href, label }, index) => (
        <Breadcrumb
          key={`breadcrumb-${index}`}
          position={index}
          href={href}
          label={label}
          last={index === last}
          needsDivider={needsDivider.indexOf(index) !== -1}
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
