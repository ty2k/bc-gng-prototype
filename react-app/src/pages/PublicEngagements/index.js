import React from "react";
import propTypes from "prop-types";

function PublicEngagements() {
  return <p>Public Engagements page</p>;
}

PublicEngagements.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

PublicEngagements.defaultProps = {};

export default PublicEngagements;
