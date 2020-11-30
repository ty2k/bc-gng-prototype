import React from "react";
import propTypes from "prop-types";

import Navigation from "../../../../components/Navigation";
import data from "./data";

function EmploymentStandardsAndWorkplaceSafety() {
  return (
    <main>
      <h1>Employment Standards &amp; Workplace Safety</h1>
      <Navigation sections={data} />
    </main>
  );
}

EmploymentStandardsAndWorkplaceSafety.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

EmploymentStandardsAndWorkplaceSafety.defaultProps = {};

export default EmploymentStandardsAndWorkplaceSafety;
