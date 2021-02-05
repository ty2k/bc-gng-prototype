import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  @media (max-width: 575px) {
    margin-left: 10px;
    margin-right: 10px;

    h2.h2--on-this-page {
      margin-left: 0;
      margin-right: 0;
    }

    ol.ol--on-this-page {
      margin-left: 0;
      margin-right: 0;
    }

    li.li--on-this-page {
      margin-left: 0;
      margin-right: 0;
    }
  }

  h2.h2--on-this-page {
    font-size: 20px;
    font-weight: 400;
    margin: 12px 0;
  }

  ol.ol--on-this-page {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li.li--on-this-page {
    margin: 12px 0;
  }
`;

function OnThisPage({ title, children }) {
  return (
    <StyledDiv>
      <h2 className={"h2--on-this-page"}>{title}</h2>
      <ol className={"ol--on-this-page"}>
        {children.map((child, index) => {
          return (
            <li
              key={`on-this-page-list-item-${index}`}
              className={"li--on-this-page"}
            >
              <a href={`#${child.id}`}>{child.label}</a>
            </li>
          );
        })}
      </ol>
    </StyledDiv>
  );
}

export default OnThisPage;
