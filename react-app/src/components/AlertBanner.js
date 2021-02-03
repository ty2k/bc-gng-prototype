import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

import Icon from "./Icon";

const StyledAlertBanner = styled.div`
  align-items: flex-start;
  border: 1px solid transparent;
  border-radius: 4px;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  margin: 20px 0;
  padding: 15px;

  &.div--alert-banner-error {
    background-color: #f2dede;
    border-color: #ebccd1;
    color: #a12622;

    a {
      color: #843534;
    }
  }

  &.div--alert-banner-success {
    background-color: #dff0d8;
    border-color: #d6e9c6;
    color: #2d4821;

    a {
      color: #2b542c;
    }
  }

  svg {
    height: 20px;
    margin-right: 10px;
    min-height: 20px;
    min-width: 20px;
    width: 20px;
  }
`;

export const AlertBanner = ({ bannerType, children }) => {
  let bannerClass = "";
  let iconId = "";

  if (bannerType === "error") {
    bannerClass = "div--alert-banner-error";
    iconId = "info-circle-solid.svg";
  } else if (bannerType === "success") {
    bannerClass = "div--alert-banner-success";
    iconId = "check-circle-solid.svg";
  }

  return (
    <StyledAlertBanner className={bannerClass}>
      <Icon id={iconId} />
      {children}
    </StyledAlertBanner>
  );
};

AlertBanner.propTypes = {
  bannerType: propTypes.string,
};

AlertBanner.defaultProps = {};
