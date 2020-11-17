import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Breadcrumbs from "./Breadcrumbs";

function Page({ title = "", breadcrumbs = [], content }) {
  return (
    <>
      <Header title={title} />
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      )}
      {content}
    </>
  );
}

Page.propTypes = {
  title: PropTypes.string,
  breadcrumbs: PropTypes.array,
  content: PropTypes.func,
};

Page.defaultProps = {};

export default Page;
