import React from "react";
import propTypes from "prop-types";

import Content from "../../../../../../components/Content";
import { content } from "./data";

function HiringEmployees() {
  return <Content content={content} />;
}

HiringEmployees.propTypes = {};

HiringEmployees.defaultProps = {};

export default HiringEmployees;
