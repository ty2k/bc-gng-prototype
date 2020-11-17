import React from "react";
import propTypes from "prop-types";

function PublicEngagements() {
  return (
    <main>
      <h1>Public Engagements</h1>
    </main>
  );
}

PublicEngagements.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

PublicEngagements.defaultProps = {};

export default PublicEngagements;
