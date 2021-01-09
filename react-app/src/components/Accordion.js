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
    display: flex;
    justify-content: space-between;
    min-height: 44px;
    padding: 0;
    width: 100%;

    h3 {
      color: #313132;
      display: inline-block;
      font-size: 20px;
      font-weight: 700;
      margin: 0 12px;
    }

    svg {
      display: inline-block;
      margin: 0 18px;
      width: 36px;
    }
  }
`;

const AccordionBody = styled.div`
  background-color: white;

  &.closed {
    display: none;
  }

  &.open {
    display: block;
  }
`;

function Accordion({ expanded = false, id, title, body }) {
  const hashLocation = window.location.href.split("#")[1];
  const directlyLinked = hashLocation === id;

  // The accordion should initially render as opened if explicitly set with
  // `expanded`, or if it has been directly linked to with a hash parameter.
  const [open, setOpen] = useState(expanded || directlyLinked);

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <StyledAccordion id={id}>
      <AccordionHeader>
        <button onClick={toggleOpen}>
          <h3>{title}</h3>
          {open ? (
            <Icon id={"ionic-ios-arrow-up.svg"} />
          ) : (
            <Icon id={"ionic-ios-arrow-down.svg"} />
          )}
        </button>
      </AccordionHeader>
      <AccordionBody className={open ? "open" : "closed"}>
        {body &&
          body.map((element) => {
            return textService.buildHtmlElement(element);
          })}
      </AccordionBody>
    </StyledAccordion>
  );
}

export default Accordion;
