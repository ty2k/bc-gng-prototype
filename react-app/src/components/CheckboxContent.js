import React, { useState } from "react";
import styled from "styled-components";

import { textService } from "../_services/text.service";

const CheckboxGroup = styled.fieldset`
  background-color: #f2f2f2;
  border: none;
  color: #313132;
  display: block;
  margin: 0;
  padding: 6px 25px;

  h2 {
    margin-top: 0;
  }

  @media (max-width: 575px) {
    padding: 6px 10px;
  }
`;

const CheckboxOptionsGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px 10px 50px 10px;
`;

const CheckboxOption = styled.div`
  align-items: center;
  background-color: white;
  border: 1px solid #d1d1d1;
  display: inline;
  justify-content: left;

  input[type="checkbox"] {
    display: none;
  }

  label {
    cursor: pointer;
    display: block;
    font-size: 20px;
    font-weight: 700;
    min-width: 350px;
    padding: 20px;
    width: 100%;

    &:hover {
      color: blue;
      text-decoration: underline;
    }

    @media (max-width: 575px) {
      min-width: 0;
    }
  }

  input[type="checkbox"]:checked + label {
    color: #1a5a96;
    text-decoration: underline;
  }
`;

const Body = styled.div`
  div.div--checkbox-body-active {
    display: block;
  }

  div.div--checkbox-body-inactive {
    display: none;
  }
`;

function CheckboxContent({ children, defaultContent, id: groupId, title }) {
  const [checkedBox, setCheckedBox] = useState("");

  function handleCheckbox(id) {
    if (checkedBox === id) {
      // uncheck the box
      setCheckedBox("");
    } else {
      // check the box
      setCheckedBox(id);
    }
  }

  return (
    <>
      <CheckboxGroup>
        {title && <h2 id={groupId}>{title}</h2>}
        <CheckboxOptionsGroup>
          {children?.length > 0 &&
            children.map(({ id, label }, index) => {
              return (
                <CheckboxOption
                  key={`checkbox-group-${groupId}-box-number-${index}`}
                  className={
                    id === checkedBox
                      ? "div--checkbox-checked"
                      : "div--checkbox-unchecked"
                  }
                >
                  <input
                    type="checkbox"
                    checked={id === checkedBox}
                    id={id}
                    name={groupId}
                    onChange={() => handleCheckbox(id)}
                  />
                  <label htmlFor={id}>{label}</label>
                </CheckboxOption>
              );
            })}
        </CheckboxOptionsGroup>
      </CheckboxGroup>
      <Body>
        {/* Display the defaultContent when no checkboxes are selected */}

        {defaultContent && (
          <div
            className={
              !checkedBox
                ? "div--checkbox-body-active"
                : "div--checkbox-body-inactive"
            }
          >
            {defaultContent?.length > 0 &&
              defaultContent?.map((element, index) => {
                return textService.buildHtmlElement(element, index);
              })}
          </div>
        )}

        {/* Since we want the checkbox option's body info to be on the DOM
        for indexing by search engines, render all tab content and hide
        with CSS as needed. */}

        {children?.length > 0 &&
          children.map(({ body, id }, index) => {
            return (
              <div
                key={`checkbox-group-body-${index}`}
                className={
                  id === checkedBox
                    ? "div--checkbox-body-active"
                    : "div--checkbox-body-inactive"
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

export default CheckboxContent;
