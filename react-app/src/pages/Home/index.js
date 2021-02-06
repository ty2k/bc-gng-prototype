import React, { useState } from "react";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Icon from "../../components/Icon";
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

const TopicsGrid = styled.div`
  margin: 30px 0 50px 0;

  h3 {
    font-size: 18px;
  }

  @media (min-width: 576px) {
    max-width: 576px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 24px;
    row-gap: 16px;
  }
  @media (min-width: 992px) {
    max-width: 1168px;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const TopicsCard = styled.div`
  border: 1px solid #d1d1d1;
  color: #313132;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.hidden {
    display: none;
  }

  div.card--icon-title {
    align-items: center;
    display: flex;
    margin: 0 0 16px 0;

    h3 {
      display: inline-block;
      margin: 0;
    }

    a {
      h3 {
        color: #313132;

        &:hover {
          color: blue;
          text-decoration: underline;
        }
      }
    }

    svg {
      color: #313132;
      display: inline-block;
      margin-right: 7px;
      max-height: 25px;
      max-width: 25px;
      min-height: 20px;
      min-width: 20px;
      vertical-align: top;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin: 10px 0;
    }
  }

  svg {
    height: 1em;
    padding-left: 5px;
  }
`;

function Home() {
  const [mobileAllShown, setMobileAllShown] = useState(false);

  function handleSeeMore() {
    setMobileAllShown(true);
  }

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

      {/* Non-mobile, show all cards */}
      <MediaQuery minWidth={576}>
        <TopicsGrid>
          {topics?.map(({ icon, title, cardLink, links }, index) => {
            return (
              <TopicsCard key={`homepage-topic-${index}`}>
                <div className="card--icon-title">
                  {icon && <Icon id={icon} />}
                  {title &&
                    (cardLink ? (
                      <Link to={cardLink.href}>
                        {title && <h3>{title}</h3>}
                      </Link>
                    ) : (
                      <h3>{title}</h3>
                    ))}
                </div>
                {links?.length > 0 && (
                  <ul>
                    {links.map((link, index) => {
                      return (
                        <li key={`li-${index}`}>
                          {link.external ? (
                            <>
                              <a href={link.href}>{link.label}</a>
                              <Icon id={"external-link-alt-solid.svg"} />
                            </>
                          ) : (
                            <Link to={link.href}>{link.label}</Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </TopicsCard>
            );
          })}
        </TopicsGrid>
      </MediaQuery>

      {/* Mobile, show max of six cards and a see more button initially */}
      <MediaQuery maxWidth={575}>
        <TopicsGrid>
          {topics?.map(({ icon, title, cardLink, links }, index) => {
            return (
              <TopicsCard
                key={`homepage-topic-${index}`}
                className={!mobileAllShown && index >= 6 && "hidden"}
              >
                <div className="card--icon-title">
                  {icon && <Icon id={icon} />}
                  {title &&
                    (cardLink ? (
                      <Link to={cardLink.href}>
                        {title && <h3>{title}</h3>}
                      </Link>
                    ) : (
                      <h3>{title}</h3>
                    ))}
                </div>
                {links?.length > 0 && (
                  <ul>
                    {links.map((link, index) => {
                      return (
                        <li key={`li-${index}`}>
                          {link.external ? (
                            <>
                              <a href={link.href}>{link.label}</a>
                              <Icon id={"external-link-alt-solid.svg"} />
                            </>
                          ) : (
                            <Link to={link.href}>{link.label}</Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </TopicsCard>
            );
          })}
          {!mobileAllShown && topics?.length > 6 && (
            <SeeMoreButton
              onClick={() => {
                handleSeeMore();
              }}
            >
              View More Topics
            </SeeMoreButton>
          )}
        </TopicsGrid>
      </MediaQuery>

      {/* Work in BC full width block */}

      {/* What's Happening */}

      {/* In the News */}

      {/* Get Involved */}

      {/* Footer */}
    </>
  );
}

const StyledSeeMoreButton = styled.button`
  background: none;
  border: 0;
  display: block;
  margin: 0;
  min-height: 44px;
  padding: 0;
  width: 100%;

  p {
    font-size: 18px;
    font-weight: 700;
    margin: 18px 0 8px 0;
  }

  svg {
    max-height: 20px;
    max-width: 50px;
  }
`;

function SeeMoreButton({ children, onClick }) {
  return (
    <StyledSeeMoreButton onClick={onClick} type="button">
      <p>{children}</p>
      <Icon id={"chevron-down-gold.svg"} />
    </StyledSeeMoreButton>
  );
}

export default Home;
