import React from "react";
import propTypes from "prop-types";

import Navigation from "../../../../components/Navigation";
import data from "./data";

function EmploymentStandardsAndWorkplaceSafety() {
  return <Navigation sections={data} />;
}

EmploymentStandardsAndWorkplaceSafety.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

EmploymentStandardsAndWorkplaceSafety.defaultProps = {};

export default EmploymentStandardsAndWorkplaceSafety;
