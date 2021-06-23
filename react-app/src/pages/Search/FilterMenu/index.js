import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MediaQuery from "react-responsive";

import Icon from "../../../components/Icon";

import tabMap from "../tabMap";
import DateRangePicker from "./DateRangePicker";

const StyledFilterMenu = styled.div`
  position: relative;

  * {
    font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
  }

  button.tab {
    background: none;
    border: none;
    border-bottom: 5px solid transparent;
    font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
    font-size: 18px;
    height: 44px;
    margin: 0 12px;
    padding: 5px;

    &.active {
      border-bottom: 5px solid #fcba19;
    }

    &:focus {
      outline: 4px solid #3b99fc;
      text-decoration: underline;
    }

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }

    &#filter-button-filters {
      display: flex;
      flex-direction: row;
      align-items: center;

      svg {
        color: #313132;
        height: 32px;
        margin: 5px 5px 0 5px;
        width: 32px;
      }

      &.active {
        border-color: transparent;
      }
    }

    @media (max-width: 768px) {
      margin: 0 7px;

      /* On mobile, the Filters button becomes a funnel icon */
      &#filter-button-filters {
        border-bottom: 5px solid transparent;
        height: 44px;
        width: 44px;

        svg {
          color: #313132;
          display: inline;
          height: 24px;
          margin: auto;
        }

        &.active {
          border-bottom: 5px solid #fcba19;
        }

        &:hover {
          background-color: #dedede;
        }
      }
    }

    @media (max-width: 576px) {
      margin: 0 3px;
      padding: 5px 2px;
    }
  }

  div.tabs-menu {
    border-bottom: 1px solid #d6d6d6;
    display: flex;
    flex-direction: row;
    justify-content: left;
    margin: 22px 0 12px 0;

    button.tab {
      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-left: auto;
        margin-right: 0;
      }
    }
  }

  div.filters-menu {
    left: 100%;
    margin-left: 40px;
    max-width: 320px;
    position: absolute;
    top: 0;

    div.filter-top-controls {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      justify-content: space-between;

      p {
        color: #003366;
        font-size: 24px;
        font-weight: 700;
        margin: 0;
      }

      button#filter-button-reset {
        background: none;
        border: none;
        color: #003366;
        cursor: pointer;
        font-size: 18px;
        height: 44px;
        margin: 0;
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
          width: 320px;

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
  }
`;

function FilterMenu({ facets, initialFiltersShown, parentCallback, tab }) {
  const [filtersShown, setFiltersShown] = useState(
    initialFiltersShown || false
  );
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
      <div className="tabs-menu">
        {tabMap.map((tabButton, index) => {
          return (
            <button
              key={`filter-menu-button-${index}`}
              id={`filter-button-${tabButton.id}`}
              className={tab === tabButton.index ? "tab active" : "tab"}
              onClick={(e) => parentCallback(e, tabButton.index)}
            >
              {tabButton.label}
            </button>
          );
        })}
        <button
          id="filter-button-filters"
          aria-label="Filters"
          className={filtersShown ? "tab active" : "tab"}
          onClick={() => setFiltersShown(!filtersShown)}
        >
          <MediaQuery maxWidth={"768px"}>
            <Icon id={"filter-solid.svg"} />
          </MediaQuery>
          <MediaQuery minWidth={"769px"}>
            {filtersShown && <Icon id={"material-close.svg"} />}
            <span>Filters</span>
          </MediaQuery>
        </button>
      </div>

      {filtersShown && (
        <div className="filters-menu">
          {/* Label and reset button */}
          <div className="filter-top-controls">
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
                        initialStartDate={new Date()}
                        initialEndDate={new Date()}
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
      )}
    </StyledFilterMenu>
  );
}

FilterMenu.propTypes = {
  facets: PropTypes.array,
  initialFiltersShown: PropTypes.bool,
  parentCallback: PropTypes.func.isRequired,
  tab: PropTypes.number.isRequired,
};

export default FilterMenu;
