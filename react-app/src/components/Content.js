import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { textService } from "../_services/text.service";

const StyledContent = styled.div`
  display: block;

  h1 {
    margin-bottom: 4px;
  }

  p.p--last-updated {
    color: #888888;
    font-size: 16px;
    margin: 4px 0 20px 0;
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
