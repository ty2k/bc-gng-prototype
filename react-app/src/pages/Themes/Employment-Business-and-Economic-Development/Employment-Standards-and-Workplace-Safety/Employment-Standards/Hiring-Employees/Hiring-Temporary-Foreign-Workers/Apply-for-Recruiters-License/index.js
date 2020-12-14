import React from "react";
import propTypes from "prop-types";

import Content from "../../../../../../../../components/Content";
import { Wizard } from "../../../../../../../../components/Wizard";
import { content } from "./data";

function ApplyForRecruitersLicense() {
  return (
    <>
      <Content content={content} />
      {/* <Wizard wizard={wizard} /> */}
    </>
  );
}

ApplyForRecruitersLicense.propTypes = {};

ApplyForRecruitersLicense.defaultProps = {};

export default ApplyForRecruitersLicense;
