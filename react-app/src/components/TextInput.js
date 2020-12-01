import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLabel = styled.label`
  display: block;
  font-size: 18px;
`;

const StyledTextInput = styled.input`
  border: 2px solid #606060;
  border-radius: 4px;
  display: block;
  font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
  font-size: 18px;
  height: 34px;
  margin-bottom: 15px;
  margin-top: 5px;
  padding: 5px 5px 5px 7px;
`;

export const TextInput = ({ label, name, primary, children, ...props }) => {
  return (
    <>
      <StyledLabel for={name}>{label}</StyledLabel>
      <StyledTextInput
        className={primary ? "button--primary" : "button--secondary"}
        name={name}
        {...props}
      >
        {children}
      </StyledTextInput>
    </>
  );
};

TextInput.propTypes = {
  primary: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  primary: false,
};
