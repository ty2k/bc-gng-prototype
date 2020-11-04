import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ReactComponent as ArrowDownIcon } from "./assets/ios-arrow-down.svg";

const LanguagePickerStyled = styled.div`
  align-items: center;
  background-color: #f2f2f2;
  display: flex;
  height: 80px;
  padding-right: 30px;
  min-width: fit-content;

  button.button--select-lang {
    align-items: center;
    background: none;
    border: 0;
    color: #313132;
    display: flex;
    font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
    height: 44px;
  }
  button.button--select-lang span {
    display: inline-block;
    font-size: 16px;
    text-decoration: none;
  }
  button.button--select-lang svg {
    padding-left: 5px;
    height: 25px;
    width: 25px;
  }
`;

function LanguagePicker({ langIdSelected }) {
  const langs = {
    "en-CA": "English",
    "fr-CA": "Français",
  };

  return (
    <LanguagePickerStyled>
      <button aria-label="Select language" className="button--select-lang">
        <span>{langs[langIdSelected]}</span>
        <ArrowDownIcon />
      </button>
    </LanguagePickerStyled>
  );
}

LanguagePicker.propTypes = {
  langIdSelected: PropTypes.string.isRequired,
};

LanguagePicker.defaultProps = {
  langIdSelected: "en-CA",
};

export default LanguagePicker;
