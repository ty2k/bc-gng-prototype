import React from "react";

import Navigation from "../../components/Navigation";
import { sections } from "./data";

function Themes() {
  return <Navigation search={{ label: "Search Themes" }} sections={sections} />;
}

export default Themes;
