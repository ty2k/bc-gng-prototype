import React from "react";

import Navigation from "../../../components/Navigation";
import { sections } from "./data";

function HousingAndTenancy() {
  return (
    <Navigation
      search={{ label: "Search Housing & Tenancy" }}
      sections={sections}
    />
  );
}

export default HousingAndTenancy;
