import PropTypes from "prop-types";
import MediaQuery from "react-responsive";
import styled from "styled-components";

import getResultFileIcon from "./getResultFileIcon";
import getResultTitle from "./getResultTitle";
import getResultDate from "./getResultDate";
import getResultDescription from "./getResultDescription";

const StyledResult = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  margin: 50px 0;

  div.text {
    display: inline-block;
    overflow-x: hidden;
    padding: 0 32px 0 0;
    width: 80%;

    svg {
      color: #003366;
      display: inline;
      height: 18px;
      margin-right: 8px;
      width: 18px;
    }

    a.title {
      color: #003366;
      cursor: pointer;
      display: inline;
      font-size: 24px;
      font-weight: 700;
      text-decoration: none;

      &:hover {
        color: #1a5a96;
        text-decoration: underline;
      }
    }
  }

  div.thumbnail {
    background-color: #f2f2f2;
    content: "";
    display: inline-block;
    height: 150px;
    width: 20%;
  }

  @media (max-width: 575px) {
    flex-direction: column;

    div.text {
      margin-top: 10px;
      width: 100%;
    }

    div.thumbnail {
      width: 100%;
    }
  }
`;

function Result({ isDateShown, result, tab }) {
  function getResultText() {
    return (
      <div className="text">
        {result?.$?.MIME && getResultFileIcon(result)}
        {getResultTitle(result, tab)}
        {isDateShown && getResultDate(result)}
        {getResultDescription(result, tab)}
      </div>
    );
  }

  return (
    <StyledResult>
      {/*
      On mobile, thumbnails are placed on top of results.
      Use media queries instead of flipping flex-direction for accessibility:
      https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction#accessibility_concerns
      */}

      <MediaQuery maxWidth={"575px"}>
        <div className="thumbnail"></div>
        {getResultText()}
      </MediaQuery>

      <MediaQuery minWidth={"576px"}>
        {getResultText()}
        <div className="thumbnail"></div>
      </MediaQuery>
    </StyledResult>
  );
}

Result.propTypes = {
  isDateShown: PropTypes.bool,
  result: PropTypes.object.isRequired, // GSA XML <R> object: https://www.google.com/support/enterprise/static/gsa/docs/admin/current/gsa_doc_set/xml_reference/results_format.html#1079005
  tab: PropTypes.number,
};

Result.defaultProps = {
  isDateShown: false,
  tab: 1,
}

export default Result;
