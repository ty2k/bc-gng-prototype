import React from "react";
import propTypes from "prop-types";

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

HiringEmployees.propTypes = {};

HiringEmployees.defaultProps = {};

export default HiringEmployees;
