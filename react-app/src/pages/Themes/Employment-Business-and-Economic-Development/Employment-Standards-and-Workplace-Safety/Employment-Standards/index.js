import React from "react";

import Content from "../../../../../components/Content";
import Navigation from "../../../../../components/Navigation";
import { content, search, sections } from "./data";

function EmploymentStandards() {
  return (
    <>
      <Content content={content} />
      <Navigation sections={sections} search={search} />
    </>
  );
}

export default EmploymentStandards;
