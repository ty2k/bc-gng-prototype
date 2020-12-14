import React from "react";

import Navigation from "../../../components/Navigation";
import { sections } from "./data";

function EmploymentBusinessAndEconomicDevelopment() {
  return (
    <Navigation
      search={{ label: "Employment, Business & Economic Development" }}
      sections={sections}
    />
  );
}

export default EmploymentBusinessAndEconomicDevelopment;
