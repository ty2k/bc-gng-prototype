import React from "react";
import propTypes from "prop-types";

import Navigation from "../../../components/Navigation";
import data from "./data";

function EmploymentBusinessAndEconomicDevelopment() {
  return (
    <Navigation
      search={{ label: "Employment, Business & Economic Development" }}
      sections={data}
    />
  );
}

EmploymentBusinessAndEconomicDevelopment.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

EmploymentBusinessAndEconomicDevelopment.defaultProps = {};

export default EmploymentBusinessAndEconomicDevelopment;
