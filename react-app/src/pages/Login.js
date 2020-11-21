import React, { useState } from "react";
import propTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";
import axios from "axios";

function Login(props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();
  const referer =
    props.location && props.location.state && props.location.state.referer
      ? props.location.state.referer
      : "/";

  function postLogin(event) {
    event.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();
    data.username = userName;
    data.password = password;

    axios
      .post("/login", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((result) => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          setLoggedIn(true);
        } else {
          setIsError(true);
          setIsSubmitting(false);
        }
      })
      .catch((e) => {
        setIsError(true);
        setIsSubmitting(false);
      });
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
