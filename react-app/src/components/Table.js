import React, { useState } from "react";
import styled from "styled-components";

import { textService } from "../_services/text.service";
import Icon from "./Icon";

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
        font-family: "BCSans", "Noto Sans", Verdana, Arial, sans-serif;
        font-size: 20px;
        font-weight: 700;
        min-height: 44px;
        margin: 0 0 8px 0;
        padding: 0;

        &.sorted {
          color: #1a5a96;
          text-decoration: underline;
          text-decoration-thickness: 1px;
          text-underline-offset: 2px;
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
  justify-content: space-between;
`;

function Table({ data, id }) {
  const [sortConfig, setSortConfig] = useState(data?.sortConfig || {});
  const [filterConfig, setFilterConfig] = useState(data?.filter?.initial || {});

  // Callback to provide to RadioFilterGroup components to set state in Table
  function handleFilter(id, value) {
    setFilterConfig({ ...filterConfig, [id]: value });
  }

  // Sort ascending to start, switch to descending, and so on
  function handleSort(id) {
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

  return (
    <>
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
      </StyledFilters>

      <StyledTable id={id}>
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
                      onClick={() => handleSort(col.id)}
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
            data.tbody.map((row, rowIndex) => {
              return (
                <tr key={`table-${id}-tbody-row-${rowIndex}`}>
                  {row?.cols?.length > 0 &&
                    row.cols.map((col, colIndex) => {
                      return (
                        <td
                          key={`table-${id}-tbody-row-${rowIndex}-col-${colIndex}`}
                          style={{
                            textAlign: `${col.align}`,
                          }}
                        >
                          {col?.children?.length > 0 &&
                            col.children.map((elem, elemIndex) => {
                              return textService.buildHtmlElement(
                                elem,
                                rowIndex,
                                elemIndex
                              );
                            })}
                        </td>
                      );
                    })}
                </tr>
              );
            })}
        </tbody>
      </StyledTable>
    </>
  );
}

const StyledRadioFilterGroup = styled.form`
  display: inline-block;
  margin: 0 0 40px 0;

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
        min-width: 130px;

        input[type="radio"] {
          display: none;
        }

        input[type="radio"] ~ label {
          align-items: center;
          border: 1px solid transparent;
          border-radius: 10px;
          display: flex;
          font-size: 18px;
          justify-content: space-around;
          min-height: 44px;
          text-align: center;
        }

        input[type="radio"]:checked ~ label {
          border-color: #313132;
          background-color: #313132;
          color: white;
          font-weight: 700;
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

export default Table;
