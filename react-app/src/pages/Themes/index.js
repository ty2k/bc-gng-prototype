import React from "react";
import propTypes from "prop-types";

import Navigation from "../../components/Navigation";
import data from "./data";

function Themes() {
  return <Navigation search={{ label: "Search Themes" }} sections={data} />;
}

Themes.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

Themes.defaultProps = {};

export default Themes;
