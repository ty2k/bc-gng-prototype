import React, { useState } from "react";
import propTypes from "prop-types";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

import { userService } from "../../_services/user.service";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";
import { AlertBanner } from "../../components/AlertBanner";

const StyledMain = styled.main`
  padding: 0 10px;
`;

function Login(props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const referer =
    props.location && props.location.state && props.location.state.referer
      ? props.location.state.referer
      : "/";

  function postLogin(event) {
    event.preventDefault();
    setIsSubmitting(true);

    userService.login(userName, password).then(
      (user) => {
        setLoggedIn(true);
      },
      (error) => {
        setIsError(true);
        setIsSubmitting(false);
      }
    );
  }

  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }

  return (
    <StyledMain>
      <h1>Login</h1>
      <form
        id="form--login"
        method="post"
        onSubmit={(e) => {
          postLogin(e);
        }}
      >
        <TextInput
          label="Username"
          name="username"
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="Username"
          autoComplete="off"
        />
        <TextInput
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          autoComplete="off"
        />
        <Button type="submit" disabled={isSubmitting} primary={true}>
          Login
        </Button>
      </form>
      {isError && !isSubmitting && (
        <AlertBanner bannerType="error">
          Incorrect username or password.
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
