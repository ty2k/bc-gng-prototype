import React from "react";
import propTypes from "prop-types";

import Navigation from "../../../components/Navigation";
import data from "./data";

function HousingAndTenancy() {
  return (
    <Navigation
      search={{ label: "Search Housing & Tenancy" }}
      sections={data}
    />
  );
}

HousingAndTenancy.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

HousingAndTenancy.defaultProps = {};

export default HousingAndTenancy;
