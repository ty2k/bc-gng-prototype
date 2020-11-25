import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Topics() {
  return (
    <main>
      <h1>Topics</h1>
      <Link to="/topics/housing-and-tenancy">Housing and Tenancy</Link>
    </main>
  );
}

Topics.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

Topics.defaultProps = {};

export default Topics;
