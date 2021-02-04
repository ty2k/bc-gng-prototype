import React from "react";
import styled from "styled-components";

import { textService } from "../_services/text.service";

const StyledDiv = styled.div`
  border-left: 6px solid;
  margin: 20px 0;
  padding: 0 0 0 18px;

  &.error {
    border-color: #fc1919;
  }
  &.info {
    border-color: #003366;
  }
  &.success {
    border-color: #2d4821;
  }
  &.warning {
    border-color: #fcba19;
  }

  @media (max-width: 575px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

function Callout({ children, className }) {
  let style = "";

  switch (className) {
    case "error":
      style = "error";
      break;
    case "info":
      style = "info";
      break;
    case "success":
      style = "success";
      break;
    case "warning":
    default:
      style = "warning";
      break;
  }

  return (
    <StyledDiv className={style}>
      {children.map((child, index) => {
        return textService.buildHtmlElement(child, index);
      })}
    </StyledDiv>
  );
}

export default Callout;
