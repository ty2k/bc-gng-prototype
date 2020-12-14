import React from "react";
import propTypes from "prop-types";

function JobsHR() {
  return <p>Jobs &amp; HR page</p>;
}

JobsHR.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

JobsHR.defaultProps = {};

export default JobsHR;
