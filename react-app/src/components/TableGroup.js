import React, { useState } from "react";
import styled from "styled-components";

import { textService } from "../_services/text.service";
import { Accordion } from "./Accordion";
import Icon from "./Icon";
import SearchBar from "./SearchBar";

const StyledTable = styled.table`
  border-collapse: collapse;
  table-layout: auto;
  width: 100%;

  tr {
    border-bottom: 1px solid #707070;

    td {
      padding: 0 8px;
      vertical-align: top;
    }

    th {
      padding: 0 8px;

      button {
        background: none;
        border: 0;
        color: #313132;
        cursor: pointer;
        font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
        font-size: 20px;
        font-weight: 700;
        min-height: 44px;
        margin: 0 0 8px 0;
        padding: 0;

        :focus {
          outline: 4px solid #3b99fc;
          text-decoration: underline;
        }

        :hover {
          color: blue;
          text-decoration: underline;
        }

        &.sorted {
          color: #1a5a96;
          text-decoration: underline;
          text-decoration-thickness: 1px;
          text-underline-offset: 2px;

          :focus {
            text-decoration: none;
          }

          :hover {
            color: blue;
            text-decoration: none;
          }
        }

        svg {
          margin-left: 7px;
          width: 14px;
        }
      }
    }
  }
`;

const StyledFilters = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledAccordion = styled(Accordion)`
  div.open {
    margin: 26px 0;
  }
`;

function TableGroup({ context = {}, data, id }) {
  const [searchTerms, setSearchTerms] = useState([]);
  const [sortConfig, setSortConfig] = useState(data?.sortConfig || {});
  const [filterConfig, setFilterConfig] = useState(
    data?.filter?.initial || context?.filterConfig || {}
  );
  const [viewConfig, setViewConfig] = useState(
    data?.view?.initial || context?.viewConfig || {}
  );

  // Set the searchTerm array state
  function handleSearchInput(input) {
    // Match whitespace or commas
    const regExp = /[\s,]+/;

    setSearchTerms(input.split(regExp));
  }

  // Set the filterConfig state
  function handleFilter(id, value) {
    setFilterConfig({ ...filterConfig, [id]: value });
  }

  // Set the viewConfig state
  function handleView(id, value) {
    setViewConfig({ ...viewConfig, [id]: value });
  }

  // Sort ascending to start, switch to descending, and so on
  function handleSortButton(id) {
    let direction = "ascending";

    if (sortConfig.id === id && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    setSortConfig({ id: id, direction: direction });
  }

  // Table heading button displays an up or down arrow when sorted
  function getSortIcon() {
    switch (sortConfig.direction) {
      case "ascending":
        return <Icon id={"sort-down-solid.svg"} />;
      case "descending":
        return <Icon id={"sort-up-solid.svg"} />;
      default:
        return null;
    }
  }

  // Check if table row should be shown based on filterConfig and searchTerms
  function checkFilter(row) {
    const keys = Object.keys(filterConfig);
    let pass = [];

    // Check row's filter data against filterConfig state
    for (const key in keys) {
      if (row.filter && keys[key] in row.filter) {
        if (row.filter[keys[key]].indexOf(filterConfig[keys[key]]) !== -1) {
          pass.push(true);
        } else {
          pass.push(false);
        }
      } else {
        pass.push(false);
      }
    }

    // Check row's plaintext data against searchTerms state (if applicable)
    searchTerms?.length > 0 &&
      searchTerms.forEach((searchTerm) => {
        if (data?.search && searchTerm) {
          if (
            row?.plaintext?.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            pass.push(true);
          } else {
            pass.push(false);
          }
        }
      });

    return pass.indexOf(false) === -1;
  }

  // Check if the given table row should be displayed based on viewConfig
  function checkView(table) {
    const keys = Object.keys(viewConfig);
    let pass = [];

    for (const key in keys) {
      if (table.view && keys[key] in table.view) {
        if (table.view[keys[key]].indexOf(viewConfig[keys[key]]) !== -1) {
          pass.push(true);
        } else {
          pass.push(false);
        }
      } else {
        pass.push(false);
      }
    }

    return pass.indexOf(false) === -1;
  }

  // Check sortConfig and compare to rows, return rows for display
  function sortRows(inputRows) {
    const rows = [...inputRows];

    return rows.sort(function (a, b) {
      for (let x = 0; x < a.cols.length; x++) {
        if (a.cols[x].colId === sortConfig.id) {
          for (let y = 0; y < b.cols.length; y++) {
            if (b.cols[y].colId === sortConfig.id) {
              if (a.cols[x].sort > b.cols[y].sort) {
                if (sortConfig.direction === "ascending") {
                  return 1;
                } else if (sortConfig.direction === "descending") {
                  return -1;
                }
              } else if (a.cols[x].sort < b.cols[y].sort) {
                if (sortConfig.direction === "ascending") {
                  return -1;
                } else if (sortConfig.direction === "descending") {
                  return 1;
                }
              }
              return 0;
            }
          }
        }
      }
      // .sort() expects a return value and will cause a React warning if
      // this isn't explicitly set here
      return 0;
    });
  }

  function getTable(id, data) {
    return (
      <StyledTable key={`table-{id}`} id={id}>
        {/* Column headings are buttons that can be used to sort the table */}
        <thead>
          <tr>
            {data?.thead?.cols?.length > 0 &&
              data.thead.cols.map((col, index) => {
                return (
                  <th
                    key={`table-${id}-thead-col-${col.id}`}
                    style={{
                      textAlign: `${col.align}`,
                      width: `${col.width}%`,
                    }}
                  >
                    <button
                      className={sortConfig.id === col.id ? "sorted" : null}
                      type="button"
                      onClick={() => handleSortButton(col.id)}
                    >
                      {col.label}
                      {sortConfig.id === col.id && getSortIcon()}
                    </button>
                  </th>
                );
              })}
          </tr>
        </thead>

        {/* Table body is an array of rows that can be sorted by heading */}
        <tbody>
          {data?.tbody?.length > 0 &&
            sortRows(data.tbody).map((row, rowIndex) => {
              if (checkFilter(row)) {
                return (
                  <tr key={`table-${id}-tbody-row-${rowIndex}`}>
                    {row?.cols?.length > 0 &&
                      row.cols.map((col, colIndex) => {
                        return (
                          <td
                            key={`table-${id}-tbody-row-${rowIndex}-col-${colIndex}`}
                            colSpan={col?.colspan || 1}
                            style={{
                              textAlign: `${col.align}`,
                            }}
                          >
                            {col?.children?.length > 0 &&
                              col.children.map((cellElem, cellElemIndex) => {
                                return textService.buildHtmlElement(
                                  cellElem,
                                  rowIndex,
                                  cellElemIndex,
                                  searchTerms
                                );
                              })}
                          </td>
                        );
                      })}
                  </tr>
                );
              }
              return null;
            })}
        </tbody>
      </StyledTable>
    );
  }

  return (
    <>
      {data?.search && (
        <SearchBar
          parentCallback={handleSearchInput}
          placeHolder={data?.search?.placeHolder || "Search"}
        />
      )}

      <StyledFilters>
        {data?.filter?.children?.length > 0 &&
          data.filter.children.map((child, index) => {
            return (
              <RadioFilterGroup
                key={`table-filter-group-${id}-${index}`}
                parentCallback={handleFilter}
                data={child.data}
                id={child.id}
                initial={data.filter.initial[child.id]}
              />
            );
          })}
        {data?.view?.children?.length > 0 &&
          data.view.children.map((child, index) => {
            return (
              <RadioFilterGroup
                key={`table-view-group-${id}-${index}`}
                parentCallback={handleView}
                data={child.data}
                id={child.id}
                initial={data.view.initial[child.id]}
              />
            );
          })}
      </StyledFilters>

      {data?.children?.length > 0 &&
        data.children.map((childTable, tableIndex) => {
          return (
            <div key={`table-${id}-child-${tableIndex}`}>
              {checkView(childTable) &&
                childTable?.body?.length > 0 &&
                childTable.body.map((elem) => {
                  // Tables can be nested inside of Accordions
                  if (elem?.type !== "table") {
                    return (
                      <StyledAccordion
                        key={`accordion-table-${elem.id}`}
                        id={elem.id}
                        title={elem.title}
                      >
                        {getTable(elem.id, elem?.childTable?.data)}
                      </StyledAccordion>
                    );
                  } else {
                    return getTable(elem.id, elem.data);
                  }
                })}
            </div>
          );
        })}
    </>
  );
}

const StyledRadioFilterGroup = styled.form`
  display: inline-block;
  margin: 40px 0;

  @media (max-width: 575px) {
    width: 100%;
  }

  fieldset {
    border: none;
    margin: 0;
    padding: 0 8px;

    legend {
      display: block;
      font-size: 18px;
      font-weight: 700;
      margin: 0 0 14px 0;
    }

    div.radio-group {
      border: 1px solid #d0d0d0;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 44px;

      div.radio-option {
        border-radius: 10px;
        display: inline-block;
        text-align: center;

        @media (min-width: 576px) {
          min-width: 130px;
        }

        @media (max-width: 575px) {
          width: 100%;
        }

        input[type="radio"] {
          cursor: pointer;
          height: 0px;
          opacity: 0;
          position: absolute;
          width: 0px;

          :focus {
            + label {
              outline: 4px solid #3b99fc;
            }
            :checked + label {
              outline: 4px solid #3b99fc;
            }
          }
        }

        input[type="radio"] ~ label {
          align-items: center;
          border-radius: 9px;
          cursor: pointer;
          display: flex;
          font-size: 18px;
          justify-content: space-around;
          min-height: 44px;
          text-align: center;

          :hover {
            background-color: #f2f2f2;
            text-decoration: underline;
          }
        }

        input[type="radio"]:checked ~ label {
          background-color: #313132;
          color: white;
          font-weight: 700;

          :hover {
            background-color: black;
          }
        }
      }
    }
  }
`;

function RadioFilterGroup({ id, data, initial, parentCallback }) {
  const [filter, setFilter] = useState(initial || "");

  function handleFilter(selectionId) {
    setFilter(selectionId);
    parentCallback(id, selectionId);
  }

  return (
    <StyledRadioFilterGroup id={id}>
      <fieldset>
        {data?.legend && <legend>{data.legend}</legend>}
        <div className={"radio-group"}>
          {data?.children?.length > 0 &&
            data.children.map((child, index) => {
              return (
                <div
                  key={`table-${data.parentId}-radio-${data.id}-filter-${index}`}
                  className={"radio-option"}
                >
                  <input
                    type="radio"
                    name={data.name}
                    id={child.id}
                    onChange={() => {
                      handleFilter(child.id);
                    }}
                    checked={child.id === filter}
                  />
                  <label htmlFor={child.id}>{child.label}</label>
                </div>
              );
            })}
        </div>
      </fieldset>
    </StyledRadioFilterGroup>
  );
}

export default TableGroup;
