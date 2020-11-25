import React from "react";
import propTypes from "prop-types";

function Home() {
  return (
    <main>
      <h1>Homepage</h1>
    </main>
  );
}

Home.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

Home.defaultProps = {};

export default Home;
