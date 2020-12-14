import React from "react";

import Content from "../../../../../../../components/Content";
import TabbedPageNav from "../../../../../../../components/TabbedPageNav";
import { navigation } from "./data";
import { content } from "./data";

function HiringTemporaryForeignWorkers() {
  return (
    <>
      <TabbedPageNav navArray={navigation} />
      <Content content={content} />
    </>
  );
}

export default HiringTemporaryForeignWorkers;
