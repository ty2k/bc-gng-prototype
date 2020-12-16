import React from "react";
import styled from "styled-components";

import { textService } from "../_services/text.service";

const FullPage = styled.div`
  background-color: #f2f2f2;
  left: 0;
  padding: 30px 0 42px 0;
  position: absolute;
  width: 100%;

  div {
    margin: 0 auto;

    @media (min-width: 576px) {
      width: 100%;
    }

    @media (min-width: 768px) {
      width: 728px;
    }

    @media (min-width: 992px) {
      width: 952px;
    }
  }
`;

function FullWidthBlock({ children }) {
  return (
    <FullPage>
      <div>
        {children &&
          children.map((child) => {
            return textService.buildHtmlElement(child);
          })}
      </div>
    </FullPage>
  );
}

export default FullWidthBlock;
