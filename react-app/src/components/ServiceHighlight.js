import React from "react";
import PropTypes from "prop-types";
import Highlighter from "react-highlight-words";
import styled from "styled-components";

import Icon from "./Icon";

const ServiceHighlightDiv = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #c9c9c9;
  margin: 0 0 10px 0;
  padding: 20px 15px;

  @media (min-width: 768px) {
    margin: 0;
  }

  svg {
    height: 100%;
    margin: 10px 20px 0 10px;
    max-width: 90px;
  }

  span.span--service-title svg {
    height: 1em;
    padding-left: 5px;
  }
`;

export const ServiceHighlight = ({ name, icon, url, external, searchTerm }) => {
  return (
    <ServiceHighlightDiv>
      <Icon id={icon} />
      <span className="span--service-title">
        <a href={url}>
          <Highlighter
            highlightClassName="text--highlighted"
            searchWords={[searchTerm]}
            autoEscape={true}
            textToHighlight={name}
          />
        </a>
        {external ? <Icon id={"external-link-alt-solid.svg"} /> : null}
      </span>
    </ServiceHighlightDiv>
  );
};

ServiceHighlight.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  url: PropTypes.string,
  external: PropTypes.bool,
  searchTerm: PropTypes.string,
};

ServiceHighlight.defaultProps = {
  name: "ServiceHighlight",
  icon: "example.svg",
  url: "https://gov.bc.ca",
  external: false,
  searchTerm: "",
};
