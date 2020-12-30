import React from "react";
import styled from "styled-components";

import { textService } from "../_services/text.service";

const StyledDiv = styled.div`
  border-left: 6px solid #fcba19;
  margin: 20px 0;
  padding: 0 0 0 16px;
`;

function Callout({ children }) {
  return (
    <StyledDiv>
      {children.map((child, index) => {
        return textService.buildHtmlElement(child, index);
      })}
    </StyledDiv>
  );
}

export default Callout;
