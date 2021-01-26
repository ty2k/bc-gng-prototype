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

function Table({ data, id }) {
  const [sortConfig, setSortConfig] = useState(data.sortConfig || {});

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
    <StyledTable id={id}>
      {/* Column headings are buttons that can be used to sort the table */}
      <thead>
        <tr>
          {data?.thead?.cols?.length > 0 &&
            data.thead.cols.map((col, index) => {
              return (
                <th
                  key={`table-${data.id}-thead-col-${col.id}`}
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
              <tr key={`table-${data.id}-tbody-row-${rowIndex}`}>
                {row?.cols?.length > 0 &&
                  row.cols.map((col, colIndex) => {
                    return (
                      <td
                        key={`table-${data.id}-tbody-row-${rowIndex}-col-${colIndex}`}
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
  );
}

export default Table;
