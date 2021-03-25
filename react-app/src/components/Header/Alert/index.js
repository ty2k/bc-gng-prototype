import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { textService } from "../../../_services/text.service";

import { ReactComponent as InfoIcon } from "../../assets/ionic-ios-information-circle.svg";
import { ReactComponent as CloseIcon } from "../../assets/ionic-md-close.svg";

const StyledAlert = styled.div`
  align-items: stretch;
  background-color: #2d73b9; // #5f9cd8 does not pass WCAG
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
    height: 43px;
    margin-right: 36px;
    text-align: center;
    width: 44px;

    svg.svg--info {
      padding: 0;
    }
    div.div--alert {
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
    height: 30px;
    margin: 7px;
    width: 30px;
    vertical-align: middle;
  }

  div.div--alert {
    display: inline-block;
    margin: 0;
    padding: 10px 16px 10px 0;
    vertical-align: middle;
    width: 100%;

    p {
      margin: 0;

      a {
        color: white;

        :focus {
          outline: 4px solid #3b99fc;
          text-decoration: none;
        }

        :hover {
          text-decoration: none;
        }
      }
    }
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    min-height: 44px;
    padding: 0;
    min-width: 44px;

    svg {
      color: white;
    }

    :focus {
      background-color: #5f9cd8;
      outline: 4px solid #3b99fc;
    }

    :hover {
      background-color: #5f9cd8;
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
  closeable,
  index,
  messageArr,
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
      {navHidden || (!navHidden && alertHidden) ? (
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
      <div className="div--alert">
        {messageArr?.length > 0 &&
          messageArr.map((message) => {
            return textService.buildHtmlElement(message);
          })}
      </div>
      {closeable && (
        <button
          aria-label="Close alert message"
          className="button--close-alert"
          id={`button-close-alert-${index}`}
          onClick={onCloseButtonClick}
        >
          <CloseIcon className="svg--close" />
        </button>
      )}
    </StyledAlert>
  );
}

Alert.propTypes = {
  alertHidden: PropTypes.bool.isRequired,
  closeable: PropTypes.bool.isRequired,
  messageArr: PropTypes.array.isRequired,
  navHidden: PropTypes.bool.isRequired,
};

Alert.defaultProps = {
  alertHidden: false,
  closeable: true,
  navHidden: false,
};

export default Alert;
