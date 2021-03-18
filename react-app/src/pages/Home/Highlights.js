import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Icon from "../../components/Icon";

const HighlightsGrid = styled.div`
  column-gap: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 50px 0;
  row-gap: 24px;

  @media (min-width: 576px) {
    max-width: 576px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 992px) {
    max-width: 1168px;
    grid-template-columns: repeat(4, 1fr);
  }

  /* Grid fallback for Internet Explorer 10+ - assumes 4 children */
  @media (-ms-high-contrast: none), (-ms-high-contrast: active) {
    display: -ms-grid;

    /* With no column- or row-gap support, we must explicitly set the gap value
    when defining rows and columns. */
    -ms-grid-columns: 1fr 24px 1fr; // 2 columns with gap
    -ms-grid-rows: 1fr 24px 1fr; // 2 rows with gap

    /* These divs refer to HighlightCard divs. Note that even column and
      row values are avoided because those now refer to our gap. */
    div:nth-child(1) {
      -ms-grid-column: 1;
      -ms-grid-row: 1;
    }
    div:nth-child(2) {
      -ms-grid-column: 3;
      -ms-grid-row: 1;
    }
    div:nth-child(3) {
      -ms-grid-column: 1;
      -ms-grid-row: 3;
    }
    div:nth-child(4) {
      -ms-grid-column: 3;
      -ms-grid-row: 3;
    }
  }
  @media (min-width: 992px) and (-ms-high-contrast: none),
    (-ms-high-contrast: active) {
    -ms-grid-columns: 1fr 24px 1fr 24px 1fr 24px 1fr; // 4 columns with gap
    -ms-grid-rows: auto; // 1 row

    div:nth-child(1) {
      -ms-grid-column: 1;
      -ms-grid-row: 1;
    }
    div:nth-child(2) {
      -ms-grid-column: 3;
      -ms-grid-row: 1;
    }
    div:nth-child(3) {
      -ms-grid-column: 5;
      -ms-grid-row: 1;
    }
    div:nth-child(4) {
      -ms-grid-column: 7;
      -ms-grid-row: 1;
    }
  }
`;

const HighlightCard = styled.div`
  a {
    align-items: center;
    color: #313132;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    text-decoration: none;

    h3 {
      font-size: 18px;
      text-align: center;
    }

    &:hover {
      color: blue;
      text-decoration: underline;

      svg {
        color: blue;
      }
    }

    svg {
      color: #313132;
      height: 125px;
      max-width: 125px;
    }
  }
`;

function Highlights({ highlights }) {
  return (
    <HighlightsGrid>
      {highlights?.map(({ icon, title, href }, index) => {
        return (
          <HighlightCard key={`highlight-${index}`}>
            <a href={href}>
              {icon && <Icon id={icon} />}
              {title && <h3>{title}</h3>}
            </a>
          </HighlightCard>
        );
      })}
    </HighlightsGrid>
  );
}

export default Highlights;
