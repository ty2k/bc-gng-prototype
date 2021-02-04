import React from "react";
import styled from "styled-components";

import { textService } from "../_services/text.service";

const StyledTable = styled.table`
  border-collapse: collapse;
  border-style: hidden;
  font-size: 18px;
  table-layout: auto;
  width: 100%;

  tr {
    td,
    th {
      border: 1px solid #707070;
      padding: 14px 16px;
    }
  }
`;

function TableBasic({ id, data }) {
  return (
    <StyledTable id={id}>
      {/* Table head */}
      {data?.thead && (
        <thead>
          <tr>
            {data?.thead?.length > 0 &&
              data.thead.map((col) => {
                return (
                  <th
                    key={`table-${id}-thead-col-${col.id}`}
                    colSpan={col?.colspan || 1}
                    style={{
                      textAlign: `${col.align}`,
                      width: `${col.width}%`,
                    }}
                  >
                    {col.label}
                  </th>
                );
              })}
          </tr>
        </thead>
      )}

      {/* Table body */}
      {data?.tbody && (
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
                                cellElemIndex
                              );
                            })}
                        </td>
                      );
                    })}
                </tr>
              );
            })}
        </tbody>
      )}
    </StyledTable>
  );
}

export default TableBasic;
