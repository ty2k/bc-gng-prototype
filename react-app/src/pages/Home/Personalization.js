import React, { useState } from "react";
import Highlighter from "react-highlight-words";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Icon from "../../components/Icon";

const FullWidth = styled.div`
  min-height: 300px;
  left: 50%;
  margin-left: -50vw;
  position: relative;
  text-align: center;
  width: 100vw;
`;

const PersonalizationBlock = styled.div`
  background-color: #f2f2f2;
  min-height: 300px;
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

  &.vertical-center {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 270px;
    justify-content: center;
  }

  &.right-arrow {
    min-width: 100px;
    width: 100px;
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

  button#button--right-arrow {
    background: none;
    border: 0;
    padding: 0;

    svg {
      height: 100px;
      margin-top: 16px;
    }
  }

  .text--highlighted {
    background-color: #fcba19;
  }
`;

function Personalization({ personalization, parentCallback, searchTerm }) {
  const { id, intro, verticals } = personalization;

  // On full width displays, up to 4 columns are visible at a time
  const [visibleVerticals, setVisibleVerticals] = useState([0, 1, 2, 3]);

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

  const filteredIds = [];
  filteredVerticals.forEach((vertical) => {
    filteredIds.push(vertical?.id);
  });

  // Right arrow button scrolls through verticals
  function handleRightButton() {
    const max = verticals.length - 1;
    let newlyVisible;

    if (visibleVerticals[3] < max) {
      newlyVisible = visibleVerticals[3] + 1;
    } else {
      newlyVisible = 0;
    }

    const currentlyVisible = [...visibleVerticals];
    currentlyVisible.shift(); // Remove leftmost vertical

    setVisibleVerticals([...currentlyVisible, newlyVisible]);
  }

  return (
    <FullWidth id={"full-width"}>
      <PersonalizationBlock id={id}>
        {/* Desktop: SearchBlock appears as a left column
        Mobile: SearchBlock appears as a full width row above the columns */}
        <SearchBlock>
          <div>
            {intro && <h2>{intro}</h2>}
            <label htmlFor="personalization-input">looking for</label>
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
            {/* Show verticals that are in the visibleVerticals array */}
            {verticals?.length > 0 &&
              visibleVerticals.map((index) => {
                const { id, href, title, children } = verticals[index];

                // Only include verticals that are in the filteredIds array
                if (
                  filteredIds.indexOf(id) !== -1 &&
                  visibleVerticals.indexOf(index) !== -1
                ) {
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
                }

                // return null;
              })}

            {/* Right arrow to display more columns when there are 5 or more */}
            {filteredVerticals.length > 4 && (
              <Column className={"vertical-center right-arrow"}>
                <button id="button--right-arrow" onClick={handleRightButton}>
                  <Icon id={"homepage-right-arrow.svg"} />
                </button>
              </Column>
            )}
          </div>
        </div>
      </PersonalizationBlock>
    </FullWidth>
  );
}

export default Personalization;
