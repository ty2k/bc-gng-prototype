import React from "react";
import propTypes from "prop-types";

function Home() {
  return <p>Province of British Columbia</p>;
}

Home.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

Home.defaultProps = {};

export default Home;
