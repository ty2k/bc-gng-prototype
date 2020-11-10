import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledBreadcrumbs = styled.ol`
  display: block;
  margin: 0 auto;
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
  display: inline-block;
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
