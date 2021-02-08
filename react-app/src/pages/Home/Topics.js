import React, { useState } from "react";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Icon from "../../components/Icon";

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

function Topics({ topics }) {
  const [mobileAllShown, setMobileAllShown] = useState(false);

  function handleSeeMore() {
    setMobileAllShown(true);
  }

  return (
    <>
      {/* Non-mobile, show all cards */}
      <MediaQuery minWidth={576}>
        <TopicsGrid>
          {topics?.map(({ icon, title, cardLink, links }, index) => {
            return (
              <TopicsCard key={`topic-${index}`}>
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
                    {links.map((link, linkIndex) => {
                      return (
                        <li key={`topic-${index}li-${linkIndex}`}>
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
                key={`topic-${index}`}
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
                    {links.map((link, linkIndex) => {
                      return (
                        <li key={`topic-${index}li-${linkIndex}`}>
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
    </>
  );
}

export default Topics;