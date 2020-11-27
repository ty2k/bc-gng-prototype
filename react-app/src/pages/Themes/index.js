import React from "react";
import propTypes from "prop-types";

import Navigation from "../../components/Navigation";
import data from "./data";

function Themes() {
  return (
    <main>
      <h1>Themes</h1>
      <Navigation searchLabel={"Search Themes"} sections={data} />
    </main>
  );
}

Themes.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

Themes.defaultProps = {};

export default Themes;
