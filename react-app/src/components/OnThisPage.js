import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  h2 {
    font-size: 20px;
    font-weight: 400;
    margin: 12px 0;
  }

  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 12px 0;
  }
`;

function OnThisPage({ title, children }) {
  return (
    <StyledDiv>
      <h2>{title}</h2>
      <ol>
        {children.map((child, index) => {
          return (
            <li key={`on-this-page-list-item-${index}`}>
              <a href={`#${child.id}`}>{child.label}</a>
            </li>
          );
        })}
      </ol>
    </StyledDiv>
  );
}

export default OnThisPage;
