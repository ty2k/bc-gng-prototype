import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { imageService } from "../_services/image.service";
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

  div.card--icon-title {
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
`;

const StyledCardAnchorLink = styled.a`
  color: inherit;
  display: flex;
  text-decoration: inherit;
`;

const StyledCardRouterLink = styled(Link)`
  color: inherit;
  display: flex;
  text-decoration: inherit;
`;

function Icon({ id }) {
  const Icon = imageService.getSvg(id);

  if (Icon) {
    return <Icon />;
  } else {
    return null;
  }
}

function CardAnchorLink({ href, children }) {
  return <StyledCardAnchorLink href={href}>{children}</StyledCardAnchorLink>;
}

function CardRouterLink({ href, children }) {
  return <StyledCardRouterLink to={href}>{children}</StyledCardRouterLink>;
}
function Card({ icon, title, description, links, cardLink }) {
  if (cardLink && cardLink.external === true) {
    return (
      <CardAnchorLink href={cardLink.href}>
        <StyledCard>
          <div className="card--icon-title">
            {icon && <Icon id={icon} />}
            {title && <h3>{title}</h3>}
            <Icon id="external-link-alt-solid.svg" />
          </div>
          {description && <p>{description}</p>}
        </StyledCard>
      </CardAnchorLink>
    );
  } else if (cardLink && cardLink.external === false) {
    return (
      <CardRouterLink href={cardLink.href}>
        <StyledCard>
          <div className="card--icon-title">
            {icon && <Icon id={icon} />}
            {title && <h3>{title}</h3>}
          </div>
          {description && <p>{description}</p>}
        </StyledCard>
      </CardRouterLink>
    );
  } else {
    return (
      <StyledCard>
        <div className="card--icon-title">
          {icon && <Icon id={icon} />}
          {title && <h3>{title}</h3>}
        </div>
        {description && <p>{description}</p>}
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

function Navigation({ search, sections }) {
  return (
    <>
      {search && <SearchBar placeHolder={search.label || "Search"} />}
      {sections &&
        sections.length > 0 &&
        sections.map((section, index) => {
          return (
            <div key={`navigation-div-${index}`}>
              {section.title && (
                <h2 key={`section-h1-${index}`}>{section.title}</h2>
              )}
              <Section key={`section-div-${index}`}>
                {section.cards &&
                  section.cards.length > 0 &&
                  section.cards.map((card, cardIndex) => {
                    return (
                      <Card
                        key={`section-${index}-card-${cardIndex}`}
                        {...card}
                      />
                    );
                  })}
              </Section>
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
  description: propTypes.string,
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
};

Card.defaultProps = {};

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
