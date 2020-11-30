import React from "react";
import propTypes from "prop-types";

import Navigation from "../../../components/Navigation";
import data from "./data";

function EmploymentBusinessAndEconomicDevelopment() {
  return (
    <main>
      <h1>Employment, Business &amp; Economic Development</h1>
      <Navigation
        searchLabel={"Employment, Business & Economic Development"}
        sections={data}
      />
    </main>
  );
}

EmploymentBusinessAndEconomicDevelopment.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

EmploymentBusinessAndEconomicDevelopment.defaultProps = {};

export default EmploymentBusinessAndEconomicDevelopment;
