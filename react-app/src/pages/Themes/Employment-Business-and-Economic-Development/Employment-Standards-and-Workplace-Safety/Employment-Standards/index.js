import React from "react";

import Content from "../../../../../components/Content";
import Navigation from "../../../../../components/Navigation";
import { sections, content } from "./data";

function EmploymentStandards() {
  return (
    <>
      <Content content={content} />
      <Navigation sections={sections} />
    </>
  );
}

export default EmploymentStandards;
