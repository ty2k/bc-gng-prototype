import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const Card = styled.div`
  border: 1px solid #d1d1d1;
  padding: 10px;

  h3 {
    margin-top: 0px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 10px 0;
    }
  }
`;

function Navigation({ searchLabel, sections }) {
  return (
    <>
      <SearchBar placeHolder={searchLabel} />
      {sections.map((section, index) => {
        return (
          <>
            {section.title && <h2>{section.title}</h2>}
            <Section key={`section-div-${index}`}>
              {section.cards.map((card, cardIndex) => {
                return (
                  <Card key={`section-${index}-card-${cardIndex}`}>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    {card.links && card.links.length > 0 && (
                      <ul>
                        {card.links.map((link, linkIndex) => {
                          return (
                            <li
                              key={`section-${index}-card-${cardIndex}-li-${linkIndex}`}
                            >
                              <Link to={link.href}>{link.label}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </Card>
                );
              })}
            </Section>
          </>
        );
      })}
    </>
  );
}

Navigation.propTypes = {
  searchLabel: propTypes.string,
  sections: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string,
      cards: propTypes.arrayOf(
        propTypes.shape({
          title: propTypes.string,
          description: propTypes.string,
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

Navigation.defaultProps = {
  searchLabel: "Search",
};

export default Navigation;
