import React from "react";
import propTypes from "prop-types";

import Navigation from "../../../../components/Navigation";
import data from "./data";

function ResidentialTenancies() {
  return (
    <main>
      <h1>Residential Tenancies</h1>
      <Navigation
        search={{ label: "Search Residential Tenancies" }}
        sections={data}
      />
    </main>
  );
}

ResidentialTenancies.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

ResidentialTenancies.defaultProps = {};

export default ResidentialTenancies;
