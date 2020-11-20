import React, { useState } from "react";
import propTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";

function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();
  const referer = "/";

  function postLogin() {
    // TODO: Mocked success route to get page loading
    if (true) {
      setAuthTokens("testing");
      setLoggedIn(true);
    } else {
      setIsError(true);
    }
  }

  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }

  return (
    <main>
      <h1>Login</h1>
      <form id="form--login" method="post">
        <input
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder="Username"
          autoComplete="username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          autoComplete="current-password"
        />
        <button type="submit" onSubmit={postLogin}>
          Login
        </button>
      </form>
      {isError && <div>Incorrect username or password</div>}
    </main>
  );
}

Login.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

Login.defaultProps = {};

export default Login;
