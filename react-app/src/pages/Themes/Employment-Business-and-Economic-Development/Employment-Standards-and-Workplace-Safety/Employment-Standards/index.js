import React from "react";
import propTypes from "prop-types";

import Content from "../../../../../components/Content";
import Navigation from "../../../../../components/Navigation";
import { sections, content } from "./data";

function EmploymentStandards() {
  return (
    <>
      <Content content={content} />
      <Navigation sections={sections} />
    </>
  );
}

EmploymentStandards.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

EmploymentStandards.defaultProps = {};

export default EmploymentStandards;
