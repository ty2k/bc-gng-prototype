import React from "react";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PersonalizationBlock = styled.div`
  background-color: #f2f2f2;
  height: 351px;
  left: 0;
  position: absolute;
  top: 80px;
  width: 100%;

  div.div--interior {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0 auto;
    padding: 20px 0;

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
  display: block;
  text-align: left;
  min-width: 200px;
  max-width: 230px;

  h2.h2--intro-text {
    display: block;
    text-align: center;
  }

  input[type="text"].input--personalization {
    background: none;
    border: none;
    border-bottom: 1px solid #313132;
    font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
    font-size: 18px;
  }

  a {
    color: #313132;
    text-decoration: none;

    &:hover {
      color: blue;
      text-decoration: underline;
    }

    h3 {
      font-size: 18px;
      margin: 16px;
    }
  }

  ul {
    margin: 6px;
    padding: 0;

    li {
      font-size: 18px;
      list-style: none;
      margin: 10px;

      a {
        color: #313132;
        text-decoration: none;

        &:hover {
          color: blue;
          text-decoration: underline;
        }
      }
    }
  }
`;

const Spacer = styled.div`
  height: 351px;
`;

function Personalization({ personalization }) {
  const { id, intro, verticals } = personalization;

  return (
    <>
      <PersonalizationBlock id={id}>
        <div className={"div--interior"}>
          <Column>
            {intro && <h2 className={"h2--intro-text"}>{intro}</h2>}
            <input type="text" className={"input--personalization"} />
          </Column>
          {verticals?.length > 0 &&
            verticals.map(({ id, href, title, children }, index) => {
              return (
                <Column key={`personalization-column-${id ? id : index}`}>
                  {title && href && (
                    <Link to={href}>
                      <h3>{title}</h3>
                    </Link>
                  )}
                  {children?.length > 0 && (
                    <ul>
                      {children.map(
                        ({ href: childHref, label }, childIndex) => {
                          return (
                            <li key={`column-${id}-li-${childIndex}`}>
                              <Link to={childHref}>{label}</Link>
                            </li>
                          );
                        }
                      )}
                    </ul>
                  )}
                </Column>
              );
            })}
        </div>
      </PersonalizationBlock>
      <Spacer />
    </>
  );
}

export default Personalization;
