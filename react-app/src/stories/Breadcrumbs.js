import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledBreadcrumbs = styled.ol`
  align-items: stretch;
  display: flex;
  margin: 30px auto 0 auto;
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
  box-sizing: border-box;
  display: inline-block;
  max-width: 224px;

  &:last-child {
    background-color: #fcba19;
  }

  a {
    color: #313132;
    text-decoration: none;
  }
`;

const Breadcrumb = ({ position, href, label }) => {
  return (
    <StyledBreadcrumb key={position}>
      <a href={href}>{label}</a>
    </StyledBreadcrumb>
  );
};

function Breadcrumbs({ breadcrumbs }) {
  return (
    <StyledBreadcrumbs>
      {breadcrumbs.map(({ href, label }, index) => (
        <Breadcrumb position={index} href={href} label={label} />
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
