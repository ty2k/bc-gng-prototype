import styled from "styled-components";

import Icon from "../../../components/Icon";

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

  div.image {
    background-color: #f2f2f2;
    content: "";
    display: inline-block;
    height: 150px;
    width: 20%;
  }
`;

function Result({ result, tab }) {
  function getResultFileIcon(mimeType) {
    if (mimeType === "application/pdf") {
      return <Icon id={"file-pdf-solid.svg"} />;
    } else if (
      mimeType ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      return <Icon id={"file-word-solid.svg"} />;
    }
    return null;
  }

  function getResultTitle(result) {
    // All (1) or Services (4) tabs
    if (tab === 1 || tab === 4) {
      return (
        <a className="title" href={result?.UE}>
          {result?.T?.toString().split(" - Province of British Columbia", 1)[0]}
        </a>
      );
      // News (2) tab
    } else if (tab === 2) {
      return (
        <a className="title" href={result?.UE}>
          {result?.T?.toString().split(" | BC Gov News", 1)[0]}
        </a>
      );
      // Documents (3) tab and default
    } else {
      return (
        <a className="title" href={result?.UE}>
          {result?.T}
        </a>
      );
    }
  }

  function getResultDescription(result) {
    // Documents (3) tab
    if (tab === 3) {
      return (
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: result?.S?.toString() }}
        />
      );

      // All (1), Services (4), News (2) tabs and default
    } else {
      return (
        <p className="description">
          {result?.MT?.length > 0 &&
            result?.MT?.map((metaTag) => {
              if (metaTag?.$?.N === "description") {
                return metaTag?.$?.V;
              }
              // .map() expects an explicit return value and React will
              // throw a warning if this is not present
              return null;
            })}
        </p>
      );
    }
  }

  return (
    <StyledResult>
      <div className="text">
        {/* File type icon (if result is a document) */}
        {result?.$?.MIME && getResultFileIcon(result?.$?.MIME)}

        {/* Title (without trailing "- Province of BC" suffix) */}
        {getResultTitle(result)}

        {/* Description */}
        {getResultDescription(result)}
      </div>

      {/* Preview image */}
      <div className="image"></div>
    </StyledResult>
  );
}

export default Result;
