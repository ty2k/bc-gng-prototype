import React from "react";
import propTypes from "prop-types";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Icon from "./Icon";
import { Button } from "./Button";

const StyledSpan = styled.span`
  align-items: center;
  display: flex;

  svg {
    display: inline;
    height: 30px;
    margin-right: 5px;
  }
`;

function BackButton({ children, id, primary }) {
  let history = useHistory();

  return (
    <Button
      id={id}
      onClick={() => {
        history.goBack();
      }}
      primary={primary}
    >
      <StyledSpan>
        <Icon id={"ionic-ios-arrow-back.svg"} />
        {children}
      </StyledSpan>
    </Button>
  );
}

BackButton.propTypes = {
  children: propTypes.string,
};

BackButton.defaultProps = {
  children: "Back",
};

export default BackButton;
