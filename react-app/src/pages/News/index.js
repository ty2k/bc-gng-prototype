import React from "react";
import propTypes from "prop-types";

function News() {
  return <p>News page</p>;
}

News.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

News.defaultProps = {};

export default News;
