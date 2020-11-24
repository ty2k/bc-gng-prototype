import React from "react";
import propTypes from "prop-types";

function JobsHR() {
  return (
    <main>
      <h1>Jobs &amp; HR</h1>
    </main>
  );
}

JobsHR.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

JobsHR.defaultProps = {};

export default JobsHR;
