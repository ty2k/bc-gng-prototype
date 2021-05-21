import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MediaQuery from "react-responsive";

import tabMap from "../tabMap";
import Dropdown from "../../../components/Dropdown";
import Icon from "../../../components/Icon";

const StyledFilterMenu = styled.div`
  button {
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

    @media (max-width: 768px) {
      margin: 0 7px;

      /* On mobile, the More Filters button becomes a funnel icon */
      &#more-filters {
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

    button {
      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-left: auto;
        margin-right: 0;
      }
    }
  }

  div.more-filters-menu {
    border-bottom: 1px solid #d6d6d6;

    div.controls {
      align-items: flex-start;
      display: flex;
      flex-direction: row;
      margin: 0 0 12px 0;

      button,
      select {
        margin: 0 12px;

        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }

    div.facets-container {
      fieldset {
        border: none;
        margin: 0 0 12px 0;
        padding: 12px 0;
        width: 100%;

        legend {
          font-size: 18px;
          font-weight: 700;
        }

        div.facet {
          align-items: top;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;

          div.facet-category {
            align-items: top;
            display: flex;
            flex-direction: row;
            vertical-align: top;
            width: calc(100% / 3);

            @media (max-width: 768px) {
              width: 50%;
            }
            @media (max-width: 576px) {
              width: 100%;
            }

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
              padding: 8px 30px 8px 0;

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
`;

function FilterMenu({ facets, parentCallback, tab }) {
  const [moreFiltersShown, setMoreFiltersShown] = useState(false);

  return (
    <StyledFilterMenu>
      <div className="tabs-menu">
        {tabMap.map((tabButton, index) => {
          return (
            <button
              key={`filter-menu-button-${index}`}
              id={`filter-button-${tabButton.id}`}
              className={tab === tabButton.index ? "active" : null}
              onClick={(e) => parentCallback(e, tabButton.index)}
            >
              {tabButton.label}
            </button>
          );
        })}
        <button
          id="more-filters"
          aria-label="More Filters"
          className={moreFiltersShown ? "active" : null}
          onClick={() => setMoreFiltersShown(!moreFiltersShown)}
        >
          <MediaQuery maxWidth={"768px"}>
            <Icon id={"filter-solid.svg"} />
          </MediaQuery>
          <MediaQuery minWidth={"769px"}>More Filters</MediaQuery>
        </button>
      </div>

      {moreFiltersShown && (
        <div className="more-filters-menu">
          {/* Control buttons/dropdowns */}
          <div className="controls">
            <Dropdown
              id={"search-time-range"}
              label={"Time range"}
              options={[
                {
                  label: "Anytime",
                },
                {
                  label: "Today",
                },
                {
                  label: "Past 7 days",
                },
                {
                  label: "Past 30 days",
                },
                {
                  label: "Past 90 days",
                },
                {
                  label: "Custom range",
                },
              ]}
            />
            <Dropdown
              id={"search-sort"}
              label={"Sort by"}
              options={[
                {
                  label: "Sort by best match",
                },
                {
                  label: "Sort by most recent",
                },
              ]}
            />
            <button id="reset-filters">Reset filters</button>
          </div>

          {/* Facets checkboxes */}
          {facets?.length > 0 && (
            <div className="facets-container">
              {facets.map((facet, index) => {
                return (
                  <fieldset key={`facet-${index}`}>
                    {facet?.facet && <legend>{facet.facet}</legend>}
                    {facet?.categories?.length > 0 && (
                      <div className="facet">
                        {facet.categories.map((category, cIndex) => {
                          return (
                            <div
                              key={`facet-${index}-category-${cIndex}`}
                              className="facet-category"
                            >
                              <label htmlFor={`facet-checkbox-${cIndex}`}>
                                <input
                                  type="checkbox"
                                  id={`facet-checkbox-${cIndex}`}
                                  name={`facet-checkbox-${cIndex}`}
                                  value={`${index}-${cIndex}`}
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
                );
              })}
            </div>
          )}
        </div>
      )}
    </StyledFilterMenu>
  );
}

FilterMenu.propTypes = {
  facets: PropTypes.array,
  parentCallback: PropTypes.func.isRequired,
  tab: PropTypes.number.isRequired,
};

export default FilterMenu;
