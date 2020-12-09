import React from "react";
import propTypes from "prop-types";

import Navigation from "../../../../components/Navigation";
import data from "./data";

function ResidentialTenancies() {
  return (
    <Navigation
      search={{ label: "Search Residential Tenancies" }}
      sections={data}
    />
  );
}

ResidentialTenancies.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

ResidentialTenancies.defaultProps = {};

export default ResidentialTenancies;
