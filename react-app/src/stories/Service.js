import React from "react";
import PropTypes from "prop-types";
import Highlighter from "react-highlight-words";
import styled from "styled-components";

import { ReactComponent as IconExt } from "./assets/external-link-alt-solid.svg";

const ServiceDiv = styled.div`
  border: 1px solid #c9c9c9;
  display: block;
  margin: 0 0 10px 0;
  min-height: 150px;
  padding: 20px 15px;

  span.span--service-title {
    font-size: 20px;
    font-weight: 700;
  }

  span.span--service-title svg {
    height: 1em;
    padding-left: 5px;
  }
`;

export const Service = ({ name, description, url, external, searchTerm }) => (
  <ServiceDiv>
    <span className="span--service-title">
      <a href={url}>
        <Highlighter
          highlightClassName="text--highlighted"
          searchWords={[searchTerm]}
          autoEscape={true}
          textToHighlight={name}
        />
      </a>
      {external ? <IconExt /> : null}
    </span>
    <p>
      <Highlighter
        highlightClassName="text--highlighted"
        searchWords={[searchTerm]}
        autoEscape={true}
        textToHighlight={description}
      />
    </p>
  </ServiceDiv>
);

Service.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  external: PropTypes.bool,
  searchTerm: PropTypes.string,
};

Service.defaultProps = {
  name: "Service",
  description: "A description of a service",
  url: "https://gov.bc.ca",
  external: true,
  searchTerm: "",
};
