import React from "react";
import propTypes from "prop-types";

function Topics() {
  return (
    <main>
      <h1>Topics</h1>
    </main>
  );
}

Topics.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

Topics.defaultProps = {};

export default Topics;
