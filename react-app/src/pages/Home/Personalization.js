import React from "react";
import Highlighter from "react-highlight-words";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PersonalizationBlock = styled.div`
  background-color: #f2f2f2;
  min-height: 272px;
  width: 100%;

  div.div--interior {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
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

  div.div--interior-mobile {
    justify-content: flex-start;
    overflow-x: auto;
    width: 100%;

    /* Hide scrollbar */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari */
    }

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

  div.personalization-search-horizontal {
    text-align: center;

    label {
      display: none;
    }

    input[type="text"] {
      background: none;
      border: none;
      border-bottom: 1px solid #313132;
      font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
      font-size: 18px;
      padding: 0;
      width: 200px;
    }
  }

  .text--highlighted {
    background-color: #fcba19;
  }
`;

const Column = styled.div`
  display: block;
  text-align: left;
  max-width: 200px;
  min-width: 180px;

  &.personalization-search-column {
    text-align: center;
  }

  h2.h2--intro-text {
    display: block;
  }

  label {
    display: none;
  }

  input[type="text"].input--personalization {
    background: none;
    border: none;
    border-bottom: 1px solid #313132;
    font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
    font-size: 18px;
    padding: 0;
    width: 150px;
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

  svg {
    height: 100px;
    margin-top: 16px;
  }
`;

const Spacer = styled.div`
  height: 420px;
`;

function Personalization({ personalization, parentCallback, searchTerm }) {
  const { id, intro, verticals } = personalization;

  // If there are matches in a vertical's children for a given search term,
  // include that vertical in filteredVerticals
  const filteredVerticals = verticals.filter((vertical) => {
    const filteredChildren = vertical?.children?.filter((child) => {
      return child?.label?.toLowerCase().includes(searchTerm.toLowerCase())
        ? true
        : false;
    });

    return filteredChildren.length > 0 ? true : false;
  });

  return (
    <>
      <PersonalizationBlock id={id}>
        {/* Desktop, show all columns with search column on left */}
        <MediaQuery minWidth={576}>
          <div className={"div--interior"}>
            <Column className={"personalization-search-column"}>
              {intro && <h2 className={"h2--intro-text"}>{intro}</h2>}
              <label for="personalization-input">looking for</label>
              <input
                type="text"
                autoComplete="off"
                className="input--personalization"
                id="personalization-input"
                name="personalization-input"
                onChange={(e) => {
                  parentCallback(e.target.value);
                }}
              />
            </Column>

            {/* Show only the verticals that have been filtered */}
            {filteredVerticals?.length > 0 &&
              filteredVerticals.map(({ id, href, title, children }, index) => {
                return (
                  <Column key={`personalization-column-${id ? id : index}`}>
                    {title && href && (
                      <Link to={href}>
                        <h3>{title}</h3>
                      </Link>
                    )}

                    {/* Display all child links for a vertical and
                    highlight those that match searchTerm */}
                    {children?.length > 0 && (
                      <ul>
                        {children.map(
                          ({ href: childHref, label }, childIndex) => {
                            return (
                              <li key={`column-${id}-li-${childIndex}`}>
                                <Link to={childHref}>
                                  <Highlighter
                                    highlightClassName="text--highlighted"
                                    searchWords={[searchTerm]}
                                    autoEscape={true}
                                    textToHighlight={label}
                                  />
                                </Link>
                              </li>
                            );
                          }
                        )}
                      </ul>
                    )}
                  </Column>
                );
              })}
            {/* <Column>
              <Icon id={"homepage-right-arrow.svg"} />
            </Column> */}
          </div>
        </MediaQuery>

        {/* Mobile, show search bar on top and columns with horizontal scroll below */}
        <MediaQuery maxWidth={575}>
          <div className={"personalization-search-horizontal"}>
            {intro && <h2 className={"h2--intro-text"}>{intro}</h2>}
            <label for="personalization-input">looking for</label>
            <input
              type="text"
              autoComplete="off"
              className="input--personalization"
              id="personalization-input"
              name="personalization-input"
              onChange={(e) => {
                parentCallback(e.target.value);
              }}
            />
          </div>
          <div className={"div--interior div--interior-mobile"}>
            {filteredVerticals?.length > 0 &&
              filteredVerticals.map(({ id, href, title, children }, index) => {
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
                                <Link to={childHref}>
                                  <Highlighter
                                    highlightClassName="text--highlighted"
                                    searchWords={[searchTerm]}
                                    autoEscape={true}
                                    textToHighlight={label}
                                  />
                                </Link>
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
        </MediaQuery>
      </PersonalizationBlock>
      {/* <Spacer /> */}
    </>
  );
}

export default Personalization;
