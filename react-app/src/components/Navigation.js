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

const StyledCardAnchorLink = styled.a`
  color: inherit;
  display: inherit;
  text-decoration: inherit;
`;

const StyledCardRouterLink = styled(Link)`
  color: inherit;
  display: inherit;
  text-decoration: inherit;
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

function CardAnchorLink({ href, children }) {
  return <StyledCardAnchorLink href={href}>{children}</StyledCardAnchorLink>;
}

function CardRouterLink({ href, children }) {
  return <StyledCardRouterLink to={href}>{children}</StyledCardRouterLink>;
}
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

  if (cardLink && cardLink.external === true) {
    return (
      <CardAnchorLink href={cardLink.href}>
        <StyledCard className={hidden && "card--hidden"}>
          <div className="card--icon-title">
            {icon && <Icon id={icon} />}
            {title && (
              <h3>
                <Highlighter
                  highlightClassName="text--highlighted"
                  searchWords={[highlightText]}
                  autoEscape={true}
                  textToHighlight={title}
                />
              </h3>
            )}
            <Icon id="external-link-alt-solid.svg" />
          </div>
          {description && getDescMarkup(description)}
        </StyledCard>
      </CardAnchorLink>
    );
  } else if (cardLink && cardLink.external === false) {
    return (
      <CardRouterLink href={cardLink.href}>
        <StyledCard className={hidden && "card--hidden"}>
          <div className="card--icon-title">
            {icon && <Icon id={icon} />}
            {title && (
              <h3>
                <Highlighter
                  highlightClassName="text--highlighted"
                  searchWords={[highlightText]}
                  autoEscape={true}
                  textToHighlight={title}
                />
              </h3>
            )}
          </div>
          {description && getDescMarkup(description)}
        </StyledCard>
      </CardRouterLink>
    );
  } else {
    return (
      <StyledCard className={hidden && "card--hidden"}>
        <div className="card--icon-title">
          {icon && <Icon id={icon} />}
          {title && (
            <h3>
              <Highlighter
                highlightClassName="text--highlighted"
                searchWords={[highlightText]}
                autoEscape={true}
                textToHighlight={title}
              />
            </h3>
          )}
        </div>
        {description && getDescMarkup(description)}
        {links && links.length > 0 && (
          <ul>
            {links.map((link, index) => {
              return (
                <li key={`li-${index}`}>
                  {link.external ? (
                    <>
                      <a href={link}>{link.label}</a>
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
