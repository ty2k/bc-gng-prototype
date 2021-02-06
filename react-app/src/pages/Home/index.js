import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Icon from "../../components/Icon";
import Topics from "./Topics";
import { topics, highlightTopics } from "./data.js";

const Personalization = styled.div`
  background-color: #f2f2f2;
  height: 351px;
  left: 0;
  position: absolute;
  width: 100%;

  div.div--interior {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
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

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2.h2--intro-text {
    display: block;
  }
  input[type="text"].input--personalization {
    background: none;
    border: none;
    border-bottom: 1px solid #313132;
    font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
    font-size: 18px;
  }
`;

const Spacer = styled.div`
  height: 351px;
`;

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

function Home() {
  return (
    <>
      {/* Full width block personalization block */}
      <Personalization>
        <div className={"div--interior"}>
          <Column>
            <h2 className={"h2--intro-text"}>I'm...</h2>
            <input type="text" className={"input--personalization"} />
          </Column>
          <Column>
            <p>Employment</p>
          </Column>
          <Column>
            <p>Education</p>
          </Column>
          <Column>
            <p>Home</p>
          </Column>
          <Column>
            <p>Family</p>
          </Column>
          <Column>
            <p>Right Arrow</p>
          </Column>
        </div>
      </Personalization>
      <Spacer />

      {/* 4 highlight tiles with larger icons */}
      <HighlightsGrid>
        {highlightTopics?.map(({ icon, title, href }, index) => {
          return (
            <HighlightCard>
              <Link to={href}>
                {icon && <Icon id={icon} />}
                {title && <h3>{title}</h3>}
              </Link>
            </HighlightCard>
          );
        })}
      </HighlightsGrid>

      {/* 16 Topic tiles */}
      <Topics topics={topics} />

      {/* Work in BC full width block */}

      {/* What's Happening */}

      {/* In the News */}

      {/* Get Involved */}

      {/* Footer */}
    </>
  );
}

export default Home;
