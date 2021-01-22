import React, { useState } from "react";
import styled from "styled-components";

import { textService } from "../_services/text.service";

const RadioButtonGroup = styled.fieldset`
  border: none;
  display: block;
  margin: 0;
  padding: 0;
`;

const RadioButtonOption = styled.div`
  align-items: center;
  display: flex;
  justify-content: left;
  padding-left: 100px;

  @media (max-width: 575px) {
    display: block;
    padding-left: 10px;
  }

  label {
    display: inline-block;
    line-height: 44px;
    padding-left: 20px;
  }
`;

const Body = styled.div`
  div.div--radio-body-active {
    display: block;
  }

  div.div--radio-body-inactive {
    display: none;
  }
`;

function RadioButtonContent({ children, defaultContent, id: groupId, title }) {
  const [visibleRadioIndex, setVisibleRadioIndex] = useState(-1);

  function handleRadioVisibility(radioIndex) {
    if (visibleRadioIndex !== radioIndex) {
      setVisibleRadioIndex(radioIndex);
    }
  }

  return (
    <>
      {title && <h2>{title}</h2>}
      <RadioButtonGroup id={groupId}>
        {children?.length > 0 &&
          children.map(({ id, label }, index) => {
            return (
              <RadioButtonOption
                key={`radio-button-${index}`}
                className={
                  index === visibleRadioIndex
                    ? "div--radio-active"
                    : "div--radio-inactive"
                }
              >
                <input
                  type="radio"
                  id={id}
                  name={groupId}
                  onChange={() => handleRadioVisibility(index)}
                />
                <label htmlFor={id}>{label}</label>
              </RadioButtonOption>
            );
          })}
      </RadioButtonGroup>
      <Body>
        {/* If there is a default content group, show it when there are no
        radio buttons selected. */}

        {defaultContent && (
          <div
            className={
              visibleRadioIndex === -1
                ? "div--radio-body-active"
                : "div--radio-body-inactive"
            }
          >
            {defaultContent?.length > 0 &&
              defaultContent?.map((element, index) => {
                return textService.buildHtmlElement(element, index);
              })}
          </div>
        )}

        {/* Since we want the radio option's body info to be on the DOM
        for indexing by search engines, render all tab content and hide
        with CSS as needed. */}

        {children?.length > 0 &&
          children.map(({ body }, index) => {
            return (
              <div
                key={`radio-group-body-${index}`}
                className={
                  index === visibleRadioIndex
                    ? "div--radio-body-active"
                    : "div--radio-body-inactive"
                }
              >
                {body?.length > 0 &&
                  body.map((element, index) => {
                    return textService.buildHtmlElement(element, index);
                  })}
              </div>
            );
          })}
      </Body>
    </>
  );
}

export default RadioButtonContent;
