import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

function HousingAndTenancy() {
  return (
    <main>
      <h1>Housing &amp; Tenancy</h1>
    </main>
  );
}

HousingAndTenancy.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

HousingAndTenancy.defaultProps = {};

export default HousingAndTenancy;
