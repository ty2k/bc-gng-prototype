import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
  font-size: 18px;
  font-weight: 700;
  /* letter-spacing: 1px; */
  text-align: center;
  text-decoration: none;

  &:active {
    opacity: 1;
  }

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
  }

  &:focus {
    outline: 4px solid #3b99fc;
    outline-offset: 1px;
  }

  &.button--primary {
    background-color: #003366;
    border: none;
    color: white;
    padding: 12px 32px;

    &:disabled,
    &[disabled] {
      opacity: 0.3;
    }

    &:hover {
      opacity: 0.8;
      text-decoration: underline;

      &:disabled,
      &[disabled] {
        opacity: 0.3;
        text-decoration: none;
      }
    }
  }

  &.button--secondary {
    background-color: white;
    border: 2px solid #003366;
    color: #003366;
    padding: 10px 30px;

    &:disabled,
    &[disabled] {
      opacity: 0.3;
    }

    &:hover {
      background-color: #003366;
      color: #ffffff;
      opacity: 0.8;
      text-decoration: underline;

      &:disabled,
      &[disabled] {
        background-color: white;
        color: #003366;
        opacity: 0.3;
        text-decoration: none;
      }
    }
  }
`;

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, disabled, children, ...props }) => {
  return (
    <StyledButton
      type="button"
      className={primary ? "button--primary" : "button--secondary"}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  /**
   * Is the button disabled?
   */
  disabled: PropTypes.bool,
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
  primary: false,
  onClick: undefined,
};
