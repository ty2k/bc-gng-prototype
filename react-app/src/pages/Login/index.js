import React, { useState } from "react";
import propTypes from "prop-types";
import { Redirect } from "react-router-dom";

import { userService } from "../../_services/user.service";

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
    <main>
      <h1>Login</h1>
      <form
        id="form--login"
        method="post"
        onSubmit={(e) => {
          postLogin(e);
        }}
      >
        <input
          name="username"
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="Username"
          autoComplete="username"
        />
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          autoComplete="current-password"
        />
        <button type="submit" disabled={isSubmitting}>
          Login
        </button>
      </form>
      {isError && !isSubmitting && <div>Incorrect username or password</div>}
    </main>
  );
}

Login.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

Login.defaultProps = {};

export default Login;
