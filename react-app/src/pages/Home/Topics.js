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

  /* Grid fallback for Internet Explorer 10+ - assumes 20 or less children */
  @media (min-width: 768px) and (-ms-high-contrast: none),
    (-ms-high-contrast: active) {
    display: -ms-grid;

    /* With no column- or row-gap support, we must explicitly set the gap value
    when defining columns. */
    -ms-grid-columns: 1fr 24px 1fr; // 2 columns with gap

    /* Add a bottom margin to the Card div as a substitute for row-gap, since we
    don't know how many rows to expect ahead of time. */
    div {
      margin-bottom: 16px;
    }

    /* These divs refer to Card divs. Note that even numbered columns are
    avoided because those now refer to our gap. */
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
      -ms-grid-row: 2;
    }
    div:nth-child(4) {
      -ms-grid-column: 3;
      -ms-grid-row: 2;
    }
    div:nth-child(5) {
      -ms-grid-column: 1;
      -ms-grid-row: 3;
    }
    div:nth-child(6) {
      -ms-grid-column: 3;
      -ms-grid-row: 3;
    }
    div:nth-child(7) {
      -ms-grid-column: 1;
      -ms-grid-row: 4;
    }
    div:nth-child(8) {
      -ms-grid-column: 3;
      -ms-grid-row: 4;
    }
    div:nth-child(9) {
      -ms-grid-column: 1;
      -ms-grid-row: 5;
    }
    div:nth-child(10) {
      -ms-grid-column: 3;
      -ms-grid-row: 5;
    }
    div:nth-child(11) {
      -ms-grid-column: 1;
      -ms-grid-row: 6;
    }
    div:nth-child(12) {
      -ms-grid-column: 3;
      -ms-grid-row: 6;
    }
    div:nth-child(13) {
      -ms-grid-column: 1;
      -ms-grid-row: 7;
    }
    div:nth-child(14) {
      -ms-grid-column: 3;
      -ms-grid-row: 7;
    }
    div:nth-child(15) {
      -ms-grid-column: 1;
      -ms-grid-row: 8;
    }
    div:nth-child(16) {
      -ms-grid-column: 3;
      -ms-grid-row: 8;
    }
    div:nth-child(17) {
      -ms-grid-column: 1;
      -ms-grid-row: 9;
    }
    div:nth-child(18) {
      -ms-grid-column: 3;
      -ms-grid-row: 9;
    }
    div:nth-child(19) {
      -ms-grid-column: 1;
      -ms-grid-row: 10;
    }
    div:nth-child(20) {
      -ms-grid-column: 3;
      -ms-grid-row: 10;
    }
  }
  @media (min-width: 992px) and (-ms-high-contrast: none),
    (-ms-high-contrast: active) {
    display: -ms-grid;
    -ms-grid-columns: 1fr 24px 1fr 24px 1fr 24px 1fr; // 4 columns with gap

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
    div:nth-child(5) {
      -ms-grid-column: 1;
      -ms-grid-row: 2;
    }
    div:nth-child(6) {
      -ms-grid-column: 3;
      -ms-grid-row: 2;
    }
    div:nth-child(7) {
      -ms-grid-column: 5;
      -ms-grid-row: 2;
    }
    div:nth-child(8) {
      -ms-grid-column: 7;
      -ms-grid-row: 2;
    }
    div:nth-child(9) {
      -ms-grid-column: 1;
      -ms-grid-row: 3;
    }
    div:nth-child(10) {
      -ms-grid-column: 3;
      -ms-grid-row: 3;
    }
    div:nth-child(11) {
      -ms-grid-column: 5;
      -ms-grid-row: 3;
    }
    div:nth-child(12) {
      -ms-grid-column: 7;
      -ms-grid-row: 3;
    }
    div:nth-child(13) {
      -ms-grid-column: 1;
      -ms-grid-row: 4;
    }
    div:nth-child(14) {
      -ms-grid-column: 3;
      -ms-grid-row: 4;
    }
    div:nth-child(15) {
      -ms-grid-column: 5;
      -ms-grid-row: 4;
    }
    div:nth-child(16) {
      -ms-grid-column: 7;
      -ms-grid-row: 4;
    }
    div:nth-child(17) {
      -ms-grid-column: 1;
      -ms-grid-row: 5;
    }
    div:nth-child(18) {
      -ms-grid-column: 3;
      -ms-grid-row: 5;
    }
    div:nth-child(19) {
      -ms-grid-column: 5;
      -ms-grid-row: 5;
    }
    div:nth-child(20) {
      -ms-grid-column: 7;
      -ms-grid-row: 5;
    }
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
