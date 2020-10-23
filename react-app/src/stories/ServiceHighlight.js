import React from "react";
import PropTypes from "prop-types";
import Highlighter from "react-highlight-words";
import styled from "styled-components";

import { ReactComponent as IconExt } from "./assets/external-link-alt-solid.svg";

import icon41 from "./assets/u41.png"; // B.C. Emergency Workers Benefit
import icon37 from "./assets/u37.png"; // Medical Services Plan
import icon38 from "./assets/u38.png"; // Freshwater Fishing License
import icon39 from "./assets/u39.png"; // Limited Entry Hunting Permit
import icon36 from "./assets/u36.png"; // Speculation and Vacancy Tax
import icon40 from "./assets/u40.png"; // High School Transcripts & Certificates

const icons = {
  icon41,
  icon37,
  icon38,
  icon39,
  icon36,
  icon40,
};

const ServiceHighlightDiv = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #c9c9c9;
  margin: 0 0 10px 0;
  padding: 20px 15px;

  @media (min-width: 768px) {
    margin: 0;
  }

  img {
    height: 90px;
    padding: 0 20px 0 0;
  }

  span.span--service-title svg {
    height: 1em;
    padding-left: 5px;
  }
`;

export const ServiceHighlight = ({ name, icon, url, external, searchTerm }) => (
  <ServiceHighlightDiv>
    <img src={icons[icon]} alt="" />
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
  </ServiceHighlightDiv>
);

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
