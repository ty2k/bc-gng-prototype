import React, { useState } from "react";
import propTypes from "prop-types";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Highlighter from "react-highlight-words";

import { textService } from "../_services/text.service";
import Icon from "./Icon";
import SearchBar from "./SearchBar";

const Section = styled.div`
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
    column-gap: 30px;
    row-gap: 16px;
  }
  @media (min-width: 992px) {
    max-width: 970px;
    grid-template-columns: repeat(3, 1fr);
  }

  /* Grid fallback for Internet Explorer 10+ - assumes 20 or less children */
  @media (min-width: 768px) and (-ms-high-contrast: none),
    (-ms-high-contrast: active) {
    display: -ms-grid;

    /* With no column- or row-gap support, we must explicitly set the gap value
    when defining columns. */
    -ms-grid-columns: 1fr 30px 1fr; // 2 columns with gap

    /* Add a bottom margin to the Card div as a substitute for row-gap, since we
    don't know how many rows to expect ahead of time. */
    div {
      margin-bottom: 24px;
    }

    /* These divs refer to Card divs. Note that column 2 is avoided because that
    now refers to our gap column. */
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
    -ms-grid-columns: 1fr 30px 1fr 30px 1fr; // 3 columns with gap

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
      -ms-grid-column: 1;
      -ms-grid-row: 2;
    }
    div:nth-child(5) {
      -ms-grid-column: 3;
      -ms-grid-row: 2;
    }
    div:nth-child(6) {
      -ms-grid-column: 5;
      -ms-grid-row: 2;
    }
    div:nth-child(7) {
      -ms-grid-column: 1;
      -ms-grid-row: 3;
    }
    div:nth-child(8) {
      -ms-grid-column: 3;
      -ms-grid-row: 3;
    }
    div:nth-child(9) {
      -ms-grid-column: 5;
      -ms-grid-row: 3;
    }
    div:nth-child(10) {
      -ms-grid-column: 1;
      -ms-grid-row: 4;
    }
    div:nth-child(11) {
      -ms-grid-column: 3;
      -ms-grid-row: 4;
    }
    div:nth-child(12) {
      -ms-grid-column: 5;
      -ms-grid-row: 4;
    }
    div:nth-child(13) {
      -ms-grid-column: 1;
      -ms-grid-row: 5;
    }
    div:nth-child(14) {
      -ms-grid-column: 3;
      -ms-grid-row: 5;
    }
    div:nth-child(15) {
      -ms-grid-column: 5;
      -ms-grid-row: 5;
    }
    div:nth-child(16) {
      -ms-grid-column: 1;
      -ms-grid-row: 6;
    }
    div:nth-child(17) {
      -ms-grid-column: 3;
      -ms-grid-row: 6;
    }
    div:nth-child(18) {
      -ms-grid-column: 5;
      -ms-grid-row: 6;
    }
    div:nth-child(19) {
      -ms-grid-column: 1;
      -ms-grid-row: 7;
    }
    div:nth-child(20) {
      -ms-grid-column: 3;
      -ms-grid-row: 7;
    }
  }
`;

const StyledCard = styled.div`
  border: 1px solid #d1d1d1;
  padding: 16px;

  &.card--hidden {
    display: none;
  }

  div.card--icon-title {
    align-items: center;
    display: flex;
    margin-bottom: 20px;

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
    padding: 0;

    li {
      margin: 10px 0;
    }
  }

  svg {
    height: 1em;
    padding-left: 5px;
  }

  .text--highlighted {
    background-color: #fcba19;
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

function Card({
  icon,
  title,
  description,
  links,
  cardLink,
  hidden,
  highlightText,
}) {
  // TODO: Standardize data so only arrays are used
  function getDescMarkup(description) {
    switch (typeof description) {
      case "object":
        if (Array.isArray(description)) {
          return description.map((element, index) => {
            return textService.buildHtmlElement(element, index);
          });
        } else {
          return null;
        }
      case "string":
        return <p>{description}</p>;
      default:
        return null;
    }
  }

  function getTitle(title) {
    return (
      <h3>
        <Highlighter
          highlightClassName="text--highlighted"
          searchWords={[highlightText]}
          autoEscape={true}
          textToHighlight={title}
        />
      </h3>
    );
  }

  return (
    <StyledCard className={hidden && "card--hidden"}>
      <div className="card--icon-title">
        {icon && <Icon id={icon} />}
        {title &&
          (cardLink ? (
            cardLink.external ? (
              <a href={cardLink.href}>
                {title && getTitle(title)}
                <Icon id="external-link-alt-solid.svg" />
              </a>
            ) : (
              <Link to={cardLink.href}>{title && getTitle(title)}</Link>
            )
          ) : (
            getTitle(title)
          ))}
      </div>
      {description && getDescMarkup(description)}
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
    </StyledCard>
  );
}

function SeeMoreButton({ children, onClick }) {
  return (
    <StyledSeeMoreButton onClick={onClick} type="button">
      <p>{children}</p>
      <Icon id={"chevron-down-gold.svg"} />
    </StyledSeeMoreButton>
  );
}

function Navigation({ search, sections }) {
  const [mobileAllShown, setMobileAllShown] = useState({});
  const [filterValue, setFilterValue] = useState("");

  function handleSeeMore(sectionId) {
    setMobileAllShown((mobileAllShown) => ({
      ...mobileAllShown,
      [sectionId]: true,
    }));
  }

  function handleSearchInput(input) {
    setFilterValue(input);
  }

  return (
    <>
      {search && (
        <SearchBar
          parentCallback={handleSearchInput}
          placeHolder={search.label || "Search"}
        />
      )}
      {sections &&
        sections.length > 0 &&
        sections.map((section, index) => {
          return (
            <div key={`navigation-div-${index}`}>
              {section.title && (
                <h2 key={`section-h1-${index}`}>{section.title}</h2>
              )}

              {/* Non-mobile, show all cards */}
              <MediaQuery minWidth={576}>
                <Section key={`section-div-${index}`}>
                  {section?.cards?.length > 0 &&
                    section.cards
                      .filter((card) =>
                        card.title
                          ?.toLowerCase()
                          .includes(filterValue.toLowerCase())
                      )
                      .map((card, cardIndex) => {
                        return (
                          <Card
                            key={`section-${index}-card-${cardIndex}`}
                            highlightText={filterValue.toLowerCase()}
                            {...card}
                          />
                        );
                      })}
                </Section>
              </MediaQuery>

              {/* Mobile, show max of three cards and a see more button initially */}
              <MediaQuery maxWidth={575}>
                <Section key={`section-div-${index}`}>
                  {section?.cards?.length > 0 &&
                    section.cards.map((card, cardIndex) => {
                      return (
                        <Card
                          key={`section-${index}-card-${cardIndex}`}
                          hidden={!mobileAllShown[section.id] && cardIndex >= 3}
                          highlightText={filterValue.toLowerCase()}
                          {...card}
                        />
                      );
                    })}
                  {!mobileAllShown[section.id] && section?.cards?.length > 3 && (
                    <SeeMoreButton
                      onClick={() => {
                        handleSeeMore(section.id);
                      }}
                    >
                      {section?.seeMoreLabel || "See More"}
                    </SeeMoreButton>
                  )}
                </Section>
              </MediaQuery>
            </div>
          );
        })}
    </>
  );
}

Icon.propTypes = {
  id: propTypes.string,
};
Card.propTypes = {
  title: propTypes.string,
  description: propTypes.any,
  links: propTypes.arrayOf(
    propTypes.shape({
      href: propTypes.string,
      label: propTypes.string,
    })
  ),
  cardLink: propTypes.shape({
    href: propTypes.string,
    external: propTypes.bool,
  }),
  hidden: propTypes.bool,
};

Card.defaultProps = {
  hidden: false,
};

Navigation.propTypes = {
  search: propTypes.shape({
    label: propTypes.string,
  }),
  sections: propTypes.arrayOf(
    propTypes.shape({
      icon: propTypes.string,
      title: propTypes.string,
      cards: propTypes.arrayOf(
        propTypes.shape({
          title: propTypes.string,
          description: propTypes.any,
          links: propTypes.arrayOf(
            propTypes.shape({
              href: propTypes.string,
              label: propTypes.string,
            })
          ),
        })
      ),
    })
  ),
};

Navigation.defaultProps = {};

export default Navigation;
