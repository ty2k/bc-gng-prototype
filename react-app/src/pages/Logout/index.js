import React, { useState } from "react";
import { Helmet } from "react-helmet";
import propTypes from "prop-types";
import styled from "styled-components";

import { userService } from "../../_services/user.service";
import { Button } from "../../components/Button";
import { AlertBanner } from "../../components/AlertBanner";

const StyledMain = styled.main`
  padding: 0 10px;
`;

function Logout(props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  function postLogout(event) {
    event.preventDefault();
    setIsSubmitting(true);
    userService.logout();
    setIsLoggedOut(true);
  }

  return (
    <StyledMain>
      {/* Meta information */}
      <Helmet>
        <title>Logout</title>
        <meta name="description" content="Logout of prototype" />
      </Helmet>

      <h1>Logout</h1>
      <form
        id="form--logout"
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

Logout.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

Logout.defaultProps = {};

export default Logout;
