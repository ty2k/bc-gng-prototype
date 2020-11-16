import React from "react";

import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import Main from "../Main";

function Services(props) {
  return (
    <div className="App">
      <Header title="A Ridiculously Long Title for Edge Cases" />
      <Breadcrumbs />
      <Main title="Programs &amp; Services" />
    </div>
  );
}

export default Services;
