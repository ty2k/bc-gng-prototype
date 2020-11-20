import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./context/auth";

function PrivateRoute({ content, ...rest }) {
  const { authTokens } = useAuth();

  if (authTokens) {
    return <Route {...rest}>{content}</Route>;
  } else {
    return <Redirect to={{ pathname: "/login" }} />;
  }
}

export default PrivateRoute;
