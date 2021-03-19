import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => (props.primary ? "#003366" : "white")};
  border-radius: 4px;
  border: 2px solid;
  border-color: #003366;
  color: ${(props) => (props.primary ? "white" : "#003366")};
  cursor: pointer;
  display: inline-block;
  font-display: swap;
  font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
  font-size: 18px;
  font-weight: 700;
  min-height: 44px;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;

  @media (max-width: 575px) {
    margin-left: 10px;
    margin-right: 10px;
  }

  &:active {
    opacity: 1;
  }

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.3;
  }

  &:focus {
    opacity: 0.8;
    outline: 4px solid #3b99fc;
  }

  &:hover {
    background-color: #003366;
    color: white;
    opacity: 0.8;
    text-decoration: underline;

    &:disabled,
    &[disabled] {
      background-color: ${(props) => (props.primary ? "#003366" : "white")};
      color: ${(props) => (props.primary ? "white" : "#003366")};
      opacity: 0.3;
      text-decoration: none;
    }
  }
`;

/**
 * Primary UI component for user interaction
 */
function Button({ children, className, disabled, ...props }) {
  return (
    <StyledButton
      type="button"
      className={className}
      disabled={disabled}
      {...props}
      // Don't explicitly list `primary` prop here, as styled-components will
      // only read it off of the `props` object.
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  /**
   * The children of the button element
   */
  children: PropTypes.any,
  /**
   * className must be passed explicitly to be able to extend styles.
   */
  className: PropTypes.string,
  /**
   * Is the button disabled?
   */
  disabled: PropTypes.bool,
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
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

const StyledLink = styled.a`
  background-color: ${(props) => (props.$primary ? "#003366" : "white")};
  border-radius: 4px;
  border: 2px solid;
  border-color: #003366;
  color: ${(props) => (props.$primary ? "white" : "#003366")};
  cursor: pointer;
  display: inline-block;
  font-display: swap;
  font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin: 18px 0;
  min-height: 44px;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;

  @media (max-width: 575px) {
    margin-left: 10px;
    margin-right: 10px;
  }

  &:focus {
    opacity: 0.8;
    outline: 4px solid #3b99fc;
  }

  &:hover {
    background-color: #003366;
    color: white;
    opacity: 0.8;
    text-decoration: underline;
  }
`;

const StyledRouterLink = styled(Link)`
  background-color: ${(props) => (props.$primary ? "#003366" : "white")};
  border-radius: 4px;
  border: 2px solid;
  border-color: #003366;
  color: ${(props) => (props.$primary ? "white" : "#003366")};
  cursor: pointer;
  display: inline-block;
  font-display: swap;
  font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin: 18px 0;
  min-height: 44px;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;

  @media (max-width: 575px) {
    margin-left: 10px;
    margin-right: 10px;
  }

  &:focus {
    opacity: 0.8;
    outline: 4px solid #3b99fc;
  }

  &:hover {
    background-color: #003366;
    color: white;
    opacity: 0.8;
    text-decoration: underline;
  }
`;

function ButtonLink({
  children,
  className,
  external,
  href,
  primary = true,
  ...props
}) {
  return (
    <>
      {external ? (
        <StyledLink href={href} $primary={primary} {...props}>
          {children}
        </StyledLink>
      ) : (
        <StyledRouterLink to={href} $primary={primary} {...props}>
          {children}
        </StyledRouterLink>
      )}
    </>
  );
}

ButtonLink.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  external: PropTypes.bool,
  href: PropTypes.string,
  primary: PropTypes.bool,
};

export { Button, ButtonLink };
