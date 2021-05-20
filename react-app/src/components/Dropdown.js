import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ArrowDown from "../components/assets/ionic-ios-arrow-down.svg";

const StyledDropdown = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; /* Remove default arrow */
  background-image: url(${ArrowDown}); /* Add custom arrow */
  background-position: right 0px top 50%;
  background-repeat: no-repeat;
  background-size: 20px auto;
  border: none;
  font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
  font-size: 18px;
  height: 44px;
  padding-right: 30px;

  /* Hide the default arrow in IE 10-11 */
  &::-ms-expand {
    display: none;
  }

  &:focus {
    outline: 4px solid #3b99fc;
    text-decoration: underline;
  }

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

function Dropdown({ id, label, name, parentCallback, options }) {
  return (
    <StyledDropdown name={name} id={id} label={label} onChange={parentCallback}>
      {options?.length > 0 &&
        options.map((option, index) => {
          return (
            <option
              key={`dropdown-${id}-option-${index}`}
              value={option?.value}
            >
              {option?.label}
            </option>
          );
        })}
    </StyledDropdown>
  );
}

Dropdown.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  parentCallback: PropTypes.func,
  options: PropTypes.array,
};

export default Dropdown;
