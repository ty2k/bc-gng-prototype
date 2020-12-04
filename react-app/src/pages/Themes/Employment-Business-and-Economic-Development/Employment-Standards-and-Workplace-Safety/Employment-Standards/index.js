import React from "react";
import propTypes from "prop-types";

import Navigation from "../../../../../components/Navigation";
import { sections, wizard } from "./data";

function EmploymentStandards() {
  return (
    <main>
      <h1>Employment Standards</h1>
      <Navigation sections={sections} wizard={wizard} />
    </main>
  );
}

EmploymentStandards.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

EmploymentStandards.defaultProps = {};

export default EmploymentStandards;
