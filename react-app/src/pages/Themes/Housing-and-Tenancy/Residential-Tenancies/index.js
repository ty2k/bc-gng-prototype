import React from "react";

import Navigation from "../../../../components/Navigation";
import { sections } from "./data";

function ResidentialTenancies() {
  return (
    <Navigation
      search={{ label: "Search Residential Tenancies" }}
      sections={sections}
    />
  );
}

export default ResidentialTenancies;
