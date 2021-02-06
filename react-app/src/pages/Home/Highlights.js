import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Icon from "../../components/Icon";

const HighlightsGrid = styled.div`
  column-gap: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 30px 0 50px 0;
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
      max-height: 125px;
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
            <Link to={href}>
              {icon && <Icon id={icon} />}
              {title && <h3>{title}</h3>}
            </Link>
          </HighlightCard>
        );
      })}
    </HighlightsGrid>
  );
}

export default Highlights;
