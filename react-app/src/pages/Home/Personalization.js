import React from "react";
import Highlighter from "react-highlight-words";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PersonalizationBlock = styled.div`
  background-color: #f2f2f2;
  min-height: 272px;
  width: 100%;

  div.div--container {
    display: inline-block;
    vertical-align: top;

    @media (max-width: 575px) {
      width: 100%;
    }
    @media (min-width: 576px) {
      width: 100%;
    }
    @media (min-width: 768px) {
      width: 728px;
    }
    @media (min-width: 992px) {
      width: 752px;
    }

    div.div--flex {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      margin: 0 auto;
      padding: 20px 0;

      @media (max-width: 767px) {
        overflow-x: auto;
        width: 100%;

        /* Hide scrollbar */
        -ms-overflow-style: none; /* Internet Explorer 10+ */
        scrollbar-width: none; /* Firefox */
        &::-webkit-scrollbar {
          display: none; /* Chrome, Safari */
        }
      }
    }
  }
`;

const SearchBlock = styled.div`
  display: inline-block;
  text-align: center;
  vertical-align: center;
  width: 200px;

  @media (max-width: 991px) {
    display: block;
    width: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      display: block;

      @media (min-width: 992px) {
        margin-top: 40px;
      }
    }

    label {
      display: none;
    }

    input[type="text"] {
      background: none;
      border: none;
      border-bottom: 1px solid #313132;
      border-radius: 0;
      font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
      font-size: 18px;
      padding: 0;
      width: 150px;

      @media (max-width: 991px) {
        width: 200px;
      }
    }
  }
`;

const Column = styled.div`
  display: block;
  text-align: left;
  max-width: 190px;
  min-width: 180px;

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

  .text--highlighted {
    background-color: #fcba19;
  }
`;

// If a full width block with position: absolute is used for full screen
// width, a Spacer div should be used to push the rest of the content down
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
    <PersonalizationBlock id={id}>
      {/* Desktop: SearchBlock appears as a left column
      Mobile: SearchBlock appears as a full width row above the columns */}
      <SearchBlock>
        <div>
          {intro && <h2>{intro}</h2>}
          <label for="personalization-input">looking for</label>
          <input
            type="text"
            autoComplete="off"
            id="personalization-input"
            name="personalization-input"
            onChange={(e) => {
              parentCallback(e.target.value);
            }}
          />
        </div>
      </SearchBlock>

      <div className={"div--container"}>
        <div className={"div--flex"}>
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

          {/* Right arrow to display more columns */}
          {/* <Column>
            <Icon id={"homepage-right-arrow.svg"} />
          </Column> */}
        </div>
      </div>
    </PersonalizationBlock>
  );
}

export default Personalization;
