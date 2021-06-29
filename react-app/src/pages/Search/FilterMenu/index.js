import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MediaQuery, { useMediaQuery } from "react-responsive";

import Icon from "../../../components/Icon";

import DateRangePicker from "./DateRangePicker";

const Cover = styled.div`
  background: rgba(0, 0, 0, 0.7);
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  z-index: 1; // Cover the Header
`;

const StyledFilterMenu = styled.div`
  position: relative;

  div.filters-menu {
    background-color: white;
    left: 100%;
    margin-left: 24px;
    max-width: 320px;
    position: absolute;
    top: -57px;

    @media (max-width: 1537px) {
      display: block;
      height: 100vh;
      left: auto;
      position: fixed;
      right: 0;
      top: 0;
      width: 320px;
      z-index: 1;

      div.scrollable {
        height: calc(100% - 60px); // 60px is height of "View results" button
        overflow-x: hidden;
        overflow-y: auto;
        padding: 16px;
      }
    }

    div.filter-top-controls {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      justify-content: flex-start;

      p {
        color: #003366;
        font-size: 24px;
        font-weight: 700;
        margin: 0;
      }

      button#filter-button-close-filters {
        background: none;
        border: none;
        cursor: pointer;
        height: 44px;
        margin: 0 16px 0 0;
        padding: 0;
        width: 44px;

        svg {
          color: #313132;
          height: 32px;
          margin: auto;
          width: 32px;
        }

        &:hover {
          background-color: #dedede;
        }

        &:focus {
          background-color: #dedede;
          outline: 4px solid #3b99fc;
        }
      }

      button#filter-button-reset {
        background: none;
        border: none;
        color: #003366;
        cursor: pointer;
        font-size: 18px;
        height: 44px;
        margin: 0 0 0 auto;
        padding: 0;

        :focus {
          outline: 4px solid #3b99fc;
        }

        :hover {
          text-decoration: underline;
        }
      }
    }

    div.controls {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      margin: 0 0 12px 0;

      div.filter-radio-group {
        button.head:hover {
          span.title {
            text-decoration: underline;
          }
        }
      }

      div.filter-selection-group {
        border-bottom: 1px solid #d6d6d6;

        button.head {
          align-items: center;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          flex-direction: row;
          min-height: 44px;
          padding: 0;
          width: 288px;

          :hover {
            span.current-selection {
              text-decoration: underline;
            }
          }

          span.title {
            font-weight: 700;
            margin-right: auto;
          }

          span.selected-indicator {
            background-color: #003366;
            border-radius: 50%;
            content: "";
            height: 10px;
            width: 10px;
          }

          svg {
            margin-left: 8px;
            width: 20px;
          }

          :focus {
            outline: 4px solid #3b99fc;
          }
        }
        div.body {
          fieldset {
            border: none;
            display: flex;
            flex-direction: column;
            margin: 0;
            max-width: 320px;
            padding: 0;

            legend {
              display: none;
            }

            div.input-container {
              align-items: center;
              display: flex;

              input[type="radio"] {
                cursor: pointer;
                height: 1px;
                opacity: 0.01;
                width: 1px;

                &:focus {
                  + label {
                    outline: 4px solid #3b99fc;
                  }
                }
              }

              input[type="radio"] + label {
                align-items: center;
                cursor: pointer;
                display: flex;
                flex-direction: row;
                font-size: 18px;
                line-height: 1;
                min-height: 44px;
                padding: 8px 0;

                &:hover {
                  text-decoration: underline;
                }
              }

              input[type="radio"]:checked + label {
                color: #1a5a96;
                font-weight: 700;
              }

              button.clear-facet-selection {
                background: none;
                border: none;
                cursor: pointer;
                height: 44px;
                margin-left: auto;
                padding: 0;
                width: 44px;

                svg {
                  color: #313132;
                  height: 32px;
                  margin: auto;
                  width: 32px;
                }

                &:hover {
                  background-color: #dedede;
                }

                &:focus {
                  background-color: #dedede;
                  outline: 4px solid #3b99fc;
                }
              }
            }
          }
        }
      }
    }

    button.show-results {
      background-color: #003366;
      border: none;
      bottom: 0;
      color: white;
      cursor: pointer;
      font-size: 18px;
      font-weight: 700;
      height: 60px;
      max-width: 320px;
      padding: 0;
      position: fixed;
      right: 0;
      width: 100%;

      &:focus {
        outline: 4px solid #3b99fc;
      }

      &:hover {
        background-color: #395d85;
      }
    }
  }
`;

function FilterMenu({
  facets,
  resultsCount,
  setIsFilterMenuShown,
  timeSelectOpen,
  setTimeSelectOpen,
  timeSelectValue,
  setTimeSelectValue,
  customDateRange,
  setCustomDateRange,
  sortedBySelectOpen,
  setSortedBySelectOpen,
  sortedBySelectValue,
  setSortedBySelectValue,
  facetsOpen,
  setFacetsOpen,
  facetSelectValue,
  setFacetSelectValue,
}) {
  // On small screens, the FilterMenu is a slide out modal that takes up the
  // entire vertical height of the screen over top a dark background (Cover).
  // On large screens, it sits to the right of the central content column.
  const isSmallScreen = useMediaQuery({ query: `(max-width: 1537px)` });

  // With the FilterMenu visible on small screens, the document body should not
  // be able to scroll until the FilterMenu is closed.
  useEffect(() => {
    if (isSmallScreen) {
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = "unset";
      }
    }
  })

  function getTimeSelectLabel(key) {
    const map = {
      "anytime": "Anytime",
      "today": "Today",
      "past-7-days": "Past 7 days",
      "past-30-days": "Past 30 days",
      "past-90-days": "Past 90 days",
      "custom-range": "Custom Range",
    }

    return map[key];
  }

  function getSortedBySelectLabel(key) {
    const map = {
      "best-match": "Best Match",
      "most-recent": "Most Recent",
    }

    return map[key];
  }

  function handleFacetButtonToggle(index) {
    const currentFacetsOpen = [...facetsOpen];

    // If the index is in the open facets array, remove it. Otherwise, add it.
    if (currentFacetsOpen.includes(index)) {
      setFacetsOpen(currentFacetsOpen.filter(f => f !== index));
    } else {
      setFacetsOpen([index, ...currentFacetsOpen]);
    }
  }

  function resetFilters() {
    setTimeSelectValue("anytime");
    setTimeSelectOpen(false);
    setSortedBySelectValue("best-match");
    setSortedBySelectOpen(false);
    setFacetSelectValue({});
    setFacetsOpen([]);
  }

  return (
    <StyledFilterMenu>

      {isSmallScreen && <Cover onClick={() => setIsFilterMenuShown(false)} /> }

      <div className="filters-menu">
        <div className="scrollable">
          {/* Label and reset button */}
          <div className="filter-top-controls">
            <MediaQuery maxWidth={1537}>
              <button
                aria-label="Close filter menu"
                id="filter-button-close-filters"
                onClick={() => { setIsFilterMenuShown(false) }}
              >
                <Icon id={"material-close.svg"} />
              </button>
            </MediaQuery>
            <p>Refine by</p>
            <button id="filter-button-reset" onClick={resetFilters}>
              Reset
            </button>
          </div>

          {/* Control buttons/dropdowns */}
          <div className="controls">
            {/* Time period filter */}
            <div className="filter-selection-group">
              <button
                className="head"
                aria-label={`Date: ${getTimeSelectLabel(timeSelectValue)}`}
                onClick={() => setTimeSelectOpen(!timeSelectOpen)}
              >
                <span className="title">Date:</span>
                <span className="current-selection">
                  {getTimeSelectLabel(timeSelectValue)}
                </span>
                {timeSelectOpen ? (
                  <Icon id={"ionic-ios-arrow-up.svg"} />
                ) : (
                  <Icon id={"ionic-ios-arrow-down.svg"} />
                )}
              </button>
              {timeSelectOpen && (
                <div className="body">
                  <fieldset aria-labelledby="legend-time-select">
                    <legend id="legend-time-select">Select a time range</legend>

                    {/* Anytime */}
                    <div className="input-container">
                      <input
                        type="radio"
                        id="time-select-anytime"
                        name="time-select"
                        value="anytime"
                        checked={timeSelectValue === "anytime"}
                        onChange={() => setTimeSelectValue("anytime")}
                      />
                      <label htmlFor="time-select-anytime">
                        {getTimeSelectLabel("anytime")}
                      </label>
                    </div>

                    {/* Today */}
                    <div className="input-container">
                      <input
                        type="radio"
                        id="time-select-today"
                        name="time-select"
                        value="today"
                        checked={timeSelectValue === "today"}
                        onChange={() => setTimeSelectValue("today")}
                      />
                      <label htmlFor="time-select-today">
                        {getTimeSelectLabel("today")}
                      </label>
                    </div>

                    {/* Past 7 Days */}
                    <div className="input-container">
                      <input
                        type="radio"
                        id="time-select-past-7-days"
                        name="time-select"
                        value="past-7-days"
                        checked={timeSelectValue === "past-7-days"}
                        onChange={() => setTimeSelectValue("past-7-days")}
                      />
                      <label htmlFor="time-select-past-7-days">
                        {getTimeSelectLabel("past-7-days")}
                      </label>
                    </div>

                    {/* Past 30 Days */}
                    <div className="input-container">
                      <input
                        type="radio"
                        id="time-select-past-30-days"
                        name="time-select"
                        value="past-30-days"
                        checked={timeSelectValue === "past-30-days"}
                        onChange={() => setTimeSelectValue("past-30-days")}
                      />
                      <label htmlFor="time-select-past-30-days">
                        {getTimeSelectLabel("past-30-days")}
                      </label>
                    </div>

                    {/* Past 90 Days */}
                    <div className="input-container">
                      <input
                        type="radio"
                        id="time-select-past-90-days"
                        name="time-select"
                        value="past-90-days"
                        checked={timeSelectValue === "past-90-days"}
                        onChange={() => setTimeSelectValue("past-90-days")}
                      />
                      <label htmlFor="time-select-past-90-days">
                        {getTimeSelectLabel("past-90-days")}
                      </label>
                    </div>

                    {/* Custom Range */}
                    <div className="input-container">
                      <input
                        type="radio"
                        id="time-select-custom-range"
                        name="time-select"
                        value="custom-range"
                        checked={timeSelectValue === "custom-range"}
                        onChange={() => setTimeSelectValue("custom-range")}
                      />
                      <label htmlFor="time-select-custom-range">
                        {getTimeSelectLabel("custom-range")}
                      </label>
                    </div>
                    {timeSelectOpen && timeSelectValue === "custom-range" && (
                      <DateRangePicker
                        id={"time-select"}
                        initialStartDate={customDateRange[0]}
                        initialEndDate={customDateRange[1]}
                        label={"Filter by date range"}
                        reportDates={setCustomDateRange}
                      />
                    )}
                  </fieldset>
                </div>
              )}
            </div>

            {/* Sort by filter */}
            <div className="filter-selection-group">
              <button
                className="head"
                aria-label={`Sort by: ${getSortedBySelectLabel(sortedBySelectValue)}`}
                onClick={() => setSortedBySelectOpen(!sortedBySelectOpen)}
              >
                <span className="title">Sort by:</span>
                <span className="current-selection">
                  {getSortedBySelectLabel(sortedBySelectValue)}
                </span>
                {sortedBySelectOpen ? (
                  <Icon id={"ionic-ios-arrow-up.svg"} />
                ) : (
                  <Icon id={"ionic-ios-arrow-down.svg"} />
                )}
              </button>
              {sortedBySelectOpen && (
                <div className="body">
                  <fieldset aria-labelledby="legend-sort-select">
                    <legend id="legend-sort-select">
                      Select how to sort results
                    </legend>

                    {/* Best match */}
                    <div className="input-container">
                      <input
                        type="radio"
                        id="sort-select-best-match"
                        name="sort-select"
                        value="best-match"
                        checked={sortedBySelectValue === "best-match"}
                        onChange={() => setSortedBySelectValue("best-match")}
                      />
                      <label htmlFor="sort-select-best-match">
                        {getSortedBySelectLabel("best-match")}
                      </label>
                    </div>

                    {/* Most recent */}
                    <div className="input-container">
                      <input
                        type="radio"
                        id="sort-select-most-recent"
                        name="sort-select"
                        value="most-recent"
                        checked={sortedBySelectValue === "most-recent"}
                        onChange={() => setSortedBySelectValue("most-recent")}
                      />
                      <label htmlFor="sort-select-most-recent">
                        {getSortedBySelectLabel("most-recent")}
                      </label>
                    </div>
                  </fieldset>
                </div>
              )}
            </div>

            {/* Facet group filters */}
            {facets?.length > 0 &&
              facets.map((facet, index) => {
                return (
                  <div
                    key={`filter-selection-group-facet-${index}`}
                    className="filter-selection-group"
                  >
                    <button
                      className="head"
                      onClick={() => handleFacetButtonToggle(index)}
                    >
                      <span className="title">{facet.name}</span>

                      {/* If a given body contains the selected item, show
                      a visual indicator dot with spoken label so users know
                      an item has been selected even if the body is hidden */}
                      {facetSelectValue.facet === facet.name && (
                        <span
                          className="selected-indicator"
                          title="Contains selected filter item"
                        />
                      )}
                      {facetsOpen.includes(index) ? (
                        <Icon id={"ionic-ios-arrow-up.svg"} />
                      ) : (
                        <Icon id={"ionic-ios-arrow-down.svg"} />
                      )}
                    </button>
                    {facetsOpen.includes(index) && (
                      <div className="body">
                        <fieldset className="fieldset--facet">
                          {facet?.name && <legend>{facet.name}</legend>}
                          {facet?.categories?.length > 0 && (
                            <div className="facet">
                              {facet.categories.map((category, cIndex) => {
                                return (
                                  <div
                                    key={`facet-${index}-category-${cIndex}`}
                                    className="input-container"
                                  >
                                    <input
                                      type="radio"
                                      id={`facet-${index}-${cIndex}`}
                                      name={`facet-${index}`}
                                      value={`${index}-${cIndex}`}
                                      checked={
                                        facetSelectValue?.facet === facet.name &&
                                        facetSelectValue?.category === category.name
                                      }
                                      onChange={() => {
                                        setFacetSelectValue({
                                          facet: facet?.name,
                                          category: category?.name,
                                        });
                                      }}
                                    />
                                    <label
                                      htmlFor={`facet-${index}-${cIndex}`}
                                    >
                                      {category?.name} ({category?.count})
                                    </label>

                                    {/* If a radio facet option is selected,
                                    show an "X" button that clears selection */}
                                    {facetSelectValue?.facet === facet.name &&
                                      facetSelectValue?.category === category.name && (
                                        <button
                                          className="clear-facet-selection"
                                          onClick={() => setFacetSelectValue({})}
                                        >
                                          <Icon id={"material-close.svg"} />
                                        </button>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </fieldset>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>

        {/* When menu is in "slide out" mode, show the results count button
          which hides the filters when pressed */}
        {isSmallScreen && (
          <button
            className="show-results"
            onClick={() => {setIsFilterMenuShown(false)}}
          >
            View {resultsCount} results
          </button>
        )}
      </div>
    </StyledFilterMenu>
  );
}

FilterMenu.propTypes = {
  facets: PropTypes.array,
  resultsCount: PropTypes.number.isRequired,
  setIsFilterMenuShown: PropTypes.func.isRequired,
}

FilterMenu.defaultProps = {
  facets: [],
}

export default FilterMenu;
