import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MediaQuery from "react-responsive";

import Icon from "../../../components/Icon";

import DateRangePicker from "./DateRangePicker";

const StyledFilterMenu = styled.div`
  div.filters-menu {
    background-color: white;
    left: 100%;
    margin-left: 24px;
    max-width: 320px;
    position: absolute;
    top: 0;

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

            &.fieldset--facet {
              &:focus-within {
                outline: none;
              }
            }

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
              }

              input[type="radio"] + label {
                cursor: pointer;
                font-size: 18px;
                line-height: 44px;
                min-height: 44px;

                &:hover {
                  text-decoration: underline;
                }
              }

              input[type="radio"]:checked + label {
                color: #1a5a96;
                font-weight: 700;
              }

              &:focus-within {
                outline: 4px solid #3b99fc;
              }
            }

            div.facet-category {
              align-items: top;
              display: flex;
              flex-direction: row;
              vertical-align: top;

              /* Checkbox box aspect */
              input[type="checkbox"]:not(:checked):before,
              input[type="checkbox"]:checked:before {
                background: white;
                border: 1px solid #606060;
                content: "";
                display: inline-block;
                height: 20px;
                width: 20px;
              }

              /* Checkbox checkmark aspect */
              input[type="checkbox"]:checked:before {
                color: #313132;
                content: "";
                background-color: #606060;
                background-image: url("data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23FFFFFF' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E%0A"); // FontAwesome check-solid in white
                background-position-x: 1px;
                background-position-y: 1px;
                background-repeat: no-repeat;
                background-size: 16px 16px;
              }

              label {
                color: #313132;
                cursor: pointer;
                display: flex;
                font-size: 18px;
                padding: 8px 8px 8px 0;

                span {
                  margin-left: 30px;
                }

                &:focus-within {
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

function FilterMenu({ facets, resultsCount, setFiltersShown }) {
  const [timeSelectOpen, setTimeSelectOpen] = useState(false);
  const [timeSelectValue, setTimeSelectValue] = useState("anytime");
  const [customDateRange, setCustomDateRange] = useState([
    new Date(),
    new Date(),
  ]);
  const [sortSelectOpen, setSortSelectOpen] = useState(false);
  const [sortSelectValue, setSortSelectValue] = useState("best-match");
  const [facetsOpen, setFacetsOpen] = useState([]);
  const [facetCategoriesSelected, setFacetCategoriesSelected] = useState([]);

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

  function getSortSelectLabel(key) {
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

  function handleFacetCategorySelection(index, cIndex, event) {
    const currentFacetCategoriesSelected = [...facetCategoriesSelected]

    if (event.target.checked) {
      setFacetCategoriesSelected([`${index}-${cIndex}`, ...currentFacetCategoriesSelected]);
    } else {
      setFacetCategoriesSelected(
        currentFacetCategoriesSelected.filter(fc => fc !== `${index}-${cIndex}`)
      );
    }
  }

  function resetFilters() {
    setTimeSelectValue("anytime");
    setTimeSelectOpen(false);
    setSortSelectValue("best-match");
    setSortSelectOpen(false);
    setFacetCategoriesSelected([]);
    setFacetsOpen([]);
  }

  return (
    <StyledFilterMenu>
      <div className="filters-menu">
          <div className="scrollable">
            {/* Label and reset button */}
            <div className="filter-top-controls">
              <MediaQuery maxWidth={1537}>
                <button
                  aria-label="Close filter menu"
                  id="filter-button-close-filters"
                  onClick={() => { setFiltersShown(false) }}
                >
                  <Icon id={"material-close.svg"} />
                </button>
              </MediaQuery>
              <p>Refine by</p>

              {/* TODO: Hide reset button if no filters are selected */}
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
                  aria-label={`Sort by: ${getSortSelectLabel(sortSelectValue)}`}
                  onClick={() => setSortSelectOpen(!sortSelectOpen)}
                >
                  <span className="title">Sort by:</span>
                  <span className="current-selection">
                    {getSortSelectLabel(sortSelectValue)}
                  </span>
                  {sortSelectOpen ? (
                    <Icon id={"ionic-ios-arrow-up.svg"} />
                  ) : (
                    <Icon id={"ionic-ios-arrow-down.svg"} />
                  )}
                </button>
                {sortSelectOpen && (
                  <div className="body">
                    <fieldset aria-labelledby="legend-sort-select">
                      <legend id="legend-sort-select">
                        Select how to search results
                      </legend>

                      {/* Best match */}
                      <div className="input-container">
                        <input
                          type="radio"
                          id="sort-select-best-match"
                          name="sort-select"
                          value="best-match"
                          checked={sortSelectValue === "best-match"}
                          onChange={() => setSortSelectValue("best-match")}
                        />
                        <label htmlFor="sort-select-best-match">
                          {getSortSelectLabel("best-match")}
                        </label>
                      </div>

                      {/* Most recent */}
                      <div className="input-container">
                        <input
                          type="radio"
                          id="sort-select-most-recent"
                          name="sort-select"
                          value="most-recent"
                          checked={sortSelectValue === "most-recent"}
                          onChange={() => setSortSelectValue("most-recent")}
                        />
                        <label htmlFor="sort-select-most-recent">
                          {getSortSelectLabel("most-recent")}
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
                      className="filter-selection-group filter-radio-group"
                    >
                      <button
                        className="head"
                        aria-label={facet.facet}
                        onClick={() => handleFacetButtonToggle(index)}
                      >
                        <span className="title">{facet.facet}</span>
                        {facetsOpen.includes(index) ? (
                          <Icon id={"ionic-ios-arrow-up.svg"} />
                        ) : (
                          <Icon id={"ionic-ios-arrow-down.svg"} />
                        )}
                      </button>
                      {facetsOpen.includes(index) && (
                        <div className="body">
                          <fieldset className="fieldset--facet">
                            {facet?.facet && <legend>{facet.facet}</legend>}
                            {facet?.categories?.length > 0 && (
                              <div className="facet">
                                {facet.categories.map((category, cIndex) => {
                                  return (
                                    <div
                                      key={`facet-${index}-category-${cIndex}`}
                                      className="facet-category"
                                    >
                                      <label
                                        htmlFor={`facet-checkbox-${index}-${cIndex}`}
                                      >
                                        <input
                                          type="checkbox"
                                          id={`facet-checkbox-${index}-${cIndex}`}
                                          name={`facet-checkbox-${index}-${cIndex}`}
                                          value={`${index}-${cIndex}`}
                                          checked={facetCategoriesSelected.includes(
                                            `${index}-${cIndex}`
                                          )}
                                          onChange={(e) => {
                                            handleFacetCategorySelection(
                                              index,
                                              cIndex,
                                              e
                                            );
                                          }}
                                        />
                                        <span>
                                          {category?.name} ({category?.count})
                                        </span>
                                      </label>
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
            <MediaQuery maxWidth={1537}>
              <button
                className="show-results"
                onClick={() => {setFiltersShown(false)}}
              >
                View {resultsCount} results
              </button>
            </MediaQuery>
        </div>
    </StyledFilterMenu>
  );
}

FilterMenu.propTypes = {
  facets: PropTypes.array,
  resultsCount: PropTypes.number.isRequired,
  setFiltersShown: PropTypes.func.isRequired,
}

FilterMenu.defaultProps = {
  facets: [],
}

export default FilterMenu;
