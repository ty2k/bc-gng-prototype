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
  letter-spacing: 1px;
  text-align: center;
  text-decoration: none;

  &:active {
    opacity: 1;
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

    &:hover {
      opacity: 0.8;
      text-decoration: underline;
    }
  }

  &.button--secondary {
    background-color: white;
    border: 2px solid #003366;
    padding: 10px 30px;
    color: #003366;

    &:hover {
      opacity: 0.8;
      text-decoration: underline;
      background-color: #003366;
      color: #ffffff;
    }
  }
`;

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, children, ...props }) => {
  return (
    <StyledButton
      type="button"
      className={primary ? "button--primary" : "button--secondary"}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
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
  primary: false,
  onClick: undefined,
};
