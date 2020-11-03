import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ReactComponent as InfoIcon } from "./assets/ionic-ios-information-circle.svg";
import { ReactComponent as CloseIcon } from "./assets/ionic-md-close.svg";

const StyledAlert = styled.div`
  background-color: #5f9cd8; // light blue
  color: white;
  display: block;
  font-size: 18px;
  height: 44px;
  width: 100%;

  &.hidden {
    display: none;
  }

  svg.svg--info {
    height: 30px;
    padding: 7px 20px 7px 14px;
    vertical-align: middle;
    width: 30px;
  }

  p.p--alert {
    display: inline-block;
    margin: 0;
    vertical-align: middle;
  }

  button.button--close-alert {
    border: none;
    background: none;
    height: 44px;
    margin-left: 10px;
    padding: 0;
    width: 44px;

    svg.svg--close {
      color: white;
      height: 40px;
      vertical-align: middle;
      width: 40px;
    }
  }
`;

function Alert({ alertListIndex, alertHidden, navHidden, message }) {
  const [shouldHideAlert, setShouldHideAlert] = useState(false);

  function toggleAlert(event) {
    setShouldHideAlert(() => {
      return true;
    });
  }

  return (
    <StyledAlert
      role="alert"
      aria-controls={`button-close-alert-${alertListIndex}`}
      className={navHidden || alertHidden || shouldHideAlert ? "hidden" : null}
    >
      <InfoIcon className="svg--info" />
      <p className="p--alert">{message}</p>
      <button
        aria-label="Close alert message"
        className="button--close-alert"
        id={`button-close-alert-${alertListIndex}`}
        onClick={(e) => {
          toggleAlert(e);
        }}
      >
        <CloseIcon className="svg--close" />
      </button>
    </StyledAlert>
  );
}

Alert.propTypes = {
  alertHidden: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  navHidden: PropTypes.bool.isRequired,
};

Alert.defaultProps = {
  alertHidden: false,
  navHidden: false,
};

export default Alert;
