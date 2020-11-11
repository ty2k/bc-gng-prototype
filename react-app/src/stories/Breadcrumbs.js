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
  max-width: 224px;
  padding: 0 18px 0 30px;

  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    background-color: #fcba19;
    position: relative;
  }
  &:last-child::after {
    content: "";
    position: absolute;
    right: -10px;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 10px solid #fcba19;
    border-top: 24px solid transparent;
    border-bottom: 24px solid transparent;
  }
  &:last-child::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 10px solid white;
    border-top: 24px solid transparent;
    border-bottom: 24px solid transparent;
  }

  a,
  span {
    color: #313132;
    text-decoration: none;
  }
`;

const Breadcrumb = ({ position, href, label, last }) => {
  return (
    <StyledBreadcrumb key={position}>
      {last ? <span>{label}</span> : <a href={href}>{label}</a>}
    </StyledBreadcrumb>
  );
};

function Breadcrumbs({ breadcrumbs }) {
  const last = breadcrumbs.length - 1;

  return (
    <StyledBreadcrumbs>
      {breadcrumbs.map(({ href, label }, index) => (
        <Breadcrumb
          position={index}
          href={href}
          label={label}
          last={index === last}
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
