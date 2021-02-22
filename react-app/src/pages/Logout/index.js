import React, { useState } from "react";
import propTypes from "prop-types";
import styled from "styled-components";

import { userService } from "../../_services/user.service";
import { Button } from "../../components/Button";
import { AlertBanner } from "../../components/AlertBanner";

const StyledMain = styled.main`
  padding: 0 10px;
`;

function Login(props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const referer =
    props.location && props.location.state && props.location.state.referer
      ? props.location.state.referer
      : "/";

  function postLogout(event) {
    event.preventDefault();
    setIsSubmitting(true);
    userService.logout();
    setIsLoggedOut(true);
  }

  return (
    <StyledMain>
      <h1>Logout</h1>
      <form
        id="form--login"
        method="post"
        onSubmit={(e) => {
          postLogout(e);
        }}
      >
        <Button type="submit" disabled={isSubmitting} primary={true}>
          Logout
        </Button>
      </form>
      {isLoggedOut && (
        <AlertBanner bannerType="success">
          Thanks for your help! You've successfully logged out.
        </AlertBanner>
      )}
    </StyledMain>
  );
}

Login.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

Login.defaultProps = {};

export default Login;
