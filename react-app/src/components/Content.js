import React from "react";
import styled from "styled-components";

import { textService } from "../_services/text.service";

const StyledContent = styled.div`
  display: block;

  h1 {
    margin-bottom: 4px;
  }

  hr {
    border-top: 1px solid #707070;
  }

  p.p--last-updated {
    color: #888888;
    font-size: 16px;
    margin: 4px 0 20px 0;

    @media (max-width: 575px) {
      margin-left: 10px;
      margin-right: 10px;
    }
  }

  @media (max-width: 575px) {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    ol {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;

function Content({ content }) {
  return (
    <StyledContent>
      {content.map((object, index) => {
        return textService.buildHtmlElement(object, index);
      })}
    </StyledContent>
  );
}

export default Content;
