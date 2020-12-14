import React from "react";

import Content from "../../../../../../components/Content";
import TabbedPageNav from "../../../../../../components/TabbedPageNav";
import { content, navigation } from "./data";

function HiringEmployees() {
  return (
    <>
      <TabbedPageNav navArray={navigation} />
      <Content content={content} />
    </>
  );
}

export default HiringEmployees;
