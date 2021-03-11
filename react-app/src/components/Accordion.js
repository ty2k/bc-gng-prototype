import React, { useState } from "react";
import styled from "styled-components";

import { textService } from "../_services/text.service";
import Icon from "./Icon";

const StyledAccordion = styled.div`
  display: block;
  margin-bottom: 12px;
`;

const AccordionHeader = styled.div`
  background-color: #d1d1d1;
  display: block;

  button {
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    min-height: 44px;
    padding: 0;
    width: 100%;

    :focus {
      background-color: #ededed;
      outline: 4px solid #3b99fc;

      :hover {
        background-color: #d1d1d1;
      }
    }

    :hover {
      background-color: #ededed;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: #313132;
      display: inline-block;
      font-size: 20px;
      font-weight: 700;
      margin: 12px;
      text-align: left;
    }

    svg {
      display: inline-block;
      margin: 4px 18px;
      min-width: 36px;
      width: 36px;
    }
  }
`;

const AccordionBody = styled.div`
  background-color: white;
  font-size: 18px;

  &.closed {
    display: none;
  }

  &.open {
    display: block;
    margin: 26px 52px;

    @media (max-width: 575px) {
      margin: 10px;
    }
  }
`;

// Full page-width accordion component which can be linked to on-page
function Accordion({ expanded = false, id, headingLevel, title, children }) {
  const hashFragment = window.location.href.split("#")[1];
  const directlyLinked = Boolean(hashFragment && id && hashFragment === id);

  // The accordion should initially render as opened if explicitly set with
  // `expanded`, or if it has been directly linked to with a hash parameter.
  const [open, setOpen] = useState(expanded || directlyLinked);

  function toggleOpen() {
    setOpen(!open);
  }

  // Set section heading semantic level dynamically with headingLevel prop,
  // default to <h3> if not specified.
  const Heading = `h${headingLevel || 3}`;

  return (
    <StyledAccordion id={id}>
      <AccordionHeader>
        <button
          onClick={toggleOpen}
          aria-controls={`accordion-body-${id}`}
          aria-expanded={open ? true : false}
        >
          <Heading id={`accordion-label-${id}`}>{title}</Heading>
          {open ? (
            <Icon id={"ionic-ios-arrow-up.svg"} />
          ) : (
            <Icon id={"ionic-ios-arrow-down.svg"} />
          )}
        </button>
      </AccordionHeader>
      <AccordionBody
        className={open ? "open" : "closed"}
        id={`accordion-body-${id}`}
        aria-labelledby={`accordion-label-${id}`}
        role="region"
      >
        {children &&
          children.map((element, index) => {
            return textService.buildHtmlElement(element, index);
          })}
      </AccordionBody>
    </StyledAccordion>
  );
}

const StyledMoreInfo = styled.div`
  display: block;
  margin: 0 0 13px 0;

  @media (max-width: 575px) {
    margin-left: 10px;
  }
`;

const MoreInfoHeader = styled.div`
  display: block;
  margin: 10px 0;

  button.button--more-info {
    background: none;
    border: 0;
    color: #1a5a96;
    cursor: pointer;
    display: block;
    font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
    font-size: 18px;
    font-weight: 400;
    min-height: 44px;
    margin: 0 0 8px 0;
    padding: 0;

    span {
      text-decoration: underline;
    }

    svg {
      margin-left: 7px;
      width: 14px;
    }

    &:focus {
      color: blue;
      outline: 4px solid #3b99fc;

      span {
        text-decoration: none;
      }
    }

    &:hover {
      color: blue;

      span {
        text-decoration: none;
      }
    }
  }
`;

const MoreInfoBody = styled.div`
  p {
    margin: 0 0;
  }

  &.closed {
    display: none;
  }

  &.open {
    display: block;
    margin: 0 0 23px 0;
  }
`;

// Minimal accordion-style component for use within Table cells
function MoreInfo({ id, children, title = "More info" }) {
  const [open, setOpen] = useState(false);

  return (
    <StyledMoreInfo id={id}>
      <MoreInfoHeader>
        <button
          className={"button--more-info"}
          onClick={() => {
            setOpen(!open);
          }}
          aria-controls={`more-info-body-${id}`}
          aria-expanded={open ? true : false}
        >
          <span id={`more-info-label-${id}`}>{title}</span>
          {open ? (
            <Icon id={"sort-up-solid.svg"} />
          ) : (
            <Icon id={"sort-down-solid.svg"} />
          )}
        </button>
      </MoreInfoHeader>
      <MoreInfoBody
        className={open ? "open" : "closed"}
        id={`more-info-body-${id}`}
        aria-labelledby={`more-info-label-${id}`}
        role="region"
      >
        {children &&
          children.map((element, index) => {
            return textService.buildHtmlElement(element, index);
          })}
      </MoreInfoBody>
    </StyledMoreInfo>
  );
}

export { Accordion, MoreInfo };
