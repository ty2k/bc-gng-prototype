import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

import SearchBar from "../../components/SearchBar";

const Section = styled.div`
  border: 1px solid #d1d1d1;
  display: flex;
`;

function Navigation({ sections }) {
  return (
    <>
      <SearchBar />
      {sections.map((section, index) => {
        return (
          <Section key={`section-div-${index}`}>
            <h2>{section.title}</h2>
            {section.cards.map((card, cardIndex) => {
              return (
                <div key={`section-${index}-card-${cardIndex}`}>
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
                </div>
              );
            })}
          </Section>
        );
      })}
    </>
  );
}

Navigation.propTypes = {
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

Navigation.defaultProps = {};

export default Navigation;
