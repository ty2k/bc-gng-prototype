import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: right;
  display: block;
  margin: 20px 0;

  button {
    background: none;
    border: none;
    color: #1a5a96;
    cursor: pointer;
    font-size: 18px;
    margin: 0;
    padding: 0;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
      color: blue;
    }
  }
`;

function BackToTopButton({ label }) {
  return (
    <StyledDiv>
      <button
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        {label}
      </button>
    </StyledDiv>
  );
}

BackToTopButton.propTypes = {
  label: propTypes.string,
};

BackToTopButton.defaultProps = {
  label: "Back to Top",
};

export default BackToTopButton;
