import React from "react";
import propTypes from "prop-types";

function News() {
  return (
    <main>
      <h1>News</h1>
    </main>
  );
}

News.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

News.defaultProps = {};

export default News;
