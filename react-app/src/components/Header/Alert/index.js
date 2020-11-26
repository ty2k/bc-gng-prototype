import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ReactComponent as InfoIcon } from "../../assets/ionic-ios-information-circle.svg";
import { ReactComponent as CloseIcon } from "../../assets/ionic-md-close.svg";

const StyledAlert = styled.div`
  align-items: stretch;
  background-color: #5f9cd8;
  color: white;
  display: flex;
  font-size: 18px;
  min-height: 44px;
  width: 100%;

  &.nav-and-alert-hidden {
    display: none;
  }

  &.alert-hidden {
    display: block;
    float: right;
    /* height: 69px; */ // If this is taller than the alert, the header collapse-on-scroll feature will break
    height: 43px;
    margin-right: 36px;
    text-align: center;
    /* width: 62px; */
    width: 44px;

    svg.svg--info {
      /* padding: 23px 13px 10px 13px; */
      padding: 0;
    }
    p.p--alert {
      display: none;
    }
    button.button--close-alert {
      display: none;
    }
  }
  @media (max-width: 374px) {
    &.alert-hidden {
      margin-right: 0;
    }
  }

  svg.svg--info {
    min-height: 30px;
    min-width: 30px;
    padding: 7px 20px 7px 14px;
    vertical-align: middle;
  }

  p.p--alert {
    display: inline-block;
    margin: 0;
    padding: 10px 0;
    vertical-align: middle;
    width: 100%;
  }

  button {
    border: none;
    background: none;
    min-height: 44px;
    padding: 0;
    min-width: 44px;

    svg {
      color: white;
    }
  }

  button.button--close-alert {
    margin-left: 10px;

    svg.svg--close {
      height: 40px;
      width: 40px;
    }
  }

  button.button--show-alert {
    height: 100%;
    width: 100%;
  }
`;

function Alert({
  alertHidden,
  index,
  message,
  navHidden,
  onCloseButtonClick,
  onOpenButtonClick,
}) {
  const alertClasses = [];

  if (navHidden) {
    alertClasses.push("nav-and-alert-hidden");
  } else if (!navHidden && alertHidden) {
    alertClasses.push("alert-hidden");
  }

  return (
    <StyledAlert
      role="alert"
      aria-controls={`button-close-alert-${index}`}
      className={alertClasses.join(" ")}
    >
      {!navHidden && alertHidden ? (
        <button
          aria-label="Show alert message"
          className="button--show-alert"
          id={`button-close-alert-${index}`}
          onClick={onOpenButtonClick}
        >
          <InfoIcon className="svg--info" />
        </button>
      ) : (
        <InfoIcon className="svg--info" />
      )}
      <p className="p--alert">{message}</p>
      <button
        aria-label="Close alert message"
        className="button--close-alert"
        id={`button-close-alert-${index}`}
        onClick={onCloseButtonClick}
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
