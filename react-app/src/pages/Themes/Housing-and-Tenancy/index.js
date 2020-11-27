import React from "react";
import propTypes from "prop-types";

import Navigation from "../../../components/Navigation";
import data from "./data";

function HousingAndTenancy() {
  return (
    <main>
      <h1>Housing &amp; Tenancy</h1>
      <Navigation searchLabel={"Search Housing & Tenancy"} sections={data} />
    </main>
  );
}

HousingAndTenancy.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

HousingAndTenancy.defaultProps = {};

export default HousingAndTenancy;
