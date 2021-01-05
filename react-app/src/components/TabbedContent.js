import React, { useState } from "react";
import styled from "styled-components";

import { textService } from "../_services/text.service";

const TabGroup = styled.div`
  display: flex;
  flex-flow: row;

  span.span--fill-space {
    border-bottom: 1px solid #707070;
    display: inline-block;
    flex-grow: 1;
  }

  @media (max-width: 575px) {
    border-left: 1px solid #707070;
    border-right: 1px solid #707070;
    border-top: 1px solid #707070;
    display: block;

    span.span--fill-space {
      display: none;
    }
  }
`;

const Tab = styled.div`
  display: inline-block;
  border-left: 1px solid #707070;

  &:nth-last-child(2) {
    border-right: 1px solid #707070;
  }

  &.div--tab-active {
    border-top: 1px solid #707070;
  }

  button {
    background: none;
    border: none;
    font-size: 18px;
    font-weight: 700;
    padding: 10px 20px;
  }

  @media (max-width: 575px) {
    display: block;
    border-left: none;

    &:nth-last-child(2) {
      border-right: none;
    }

    &.div--tab-active {
      border-top: none;

      button {
        color: #1a5a96;
        text-decoration: underline;
      }
    }

    button {
      width: 100%;
    }
  }
`;

const Body = styled.div`
  border-left: 1px solid #707070;
  border-right: 1px solid #707070;
  padding: 20px 18px 6px 18px;

  div.div--tab-body-active {
    display: block;
  }

  div.div--tab-body-inactive {
    display: none;
  }
`;

function TabbedContent({ children }) {
  const [visibleTabIndex, setVisibleTabIndex] = useState(0);

  function handleTabVisibility(tabIndex) {
    if (visibleTabIndex !== tabIndex) {
      setVisibleTabIndex(tabIndex);
    }
  }

  return (
    <>
      <TabGroup>
        {children?.length > 0 &&
          children.map(({ label }, index) => {
            return (
              <Tab
                key={`tab-grop-tab-${index}`}
                className={
                  index === visibleTabIndex
                    ? "div--tab-active"
                    : "div--tab-inactive"
                }
              >
                {label && (
                  <button onClick={() => handleTabVisibility(index)}>
                    {label}
                  </button>
                )}
              </Tab>
            );
          })}
        <span className="span--fill-space"></span>
      </TabGroup>
      <Body>
        {/* Since we want the tab info to be on the DOM and able to be index by
        search engines, render all tab content and hide with CSS as needed. */}

        {children?.length > 0 &&
          children.map(({ body }, index) => {
            return (
              <div
                key={`tab-group-body-${index}`}
                className={
                  index === visibleTabIndex
                    ? "div--tab-body-active"
                    : "div--tab-body-inactive"
                }
              >
                {body?.length > 0 &&
                  body.map((element, index) => {
                    return textService.buildHtmlElement(element, index);
                  })}
              </div>
            );
          })}
      </Body>
    </>
  );
}

export default TabbedContent;
