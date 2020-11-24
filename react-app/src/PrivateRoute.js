import React from "react";
import { Route, Redirect } from "react-router-dom";

import Page from "./components/Page";

function PrivateRoute({ title, breadcrumbs, content, ...rest }) {
  return localStorage.getItem("user") ? (
    <Route {...rest}>
      <Page title={title} breadcrumbs={breadcrumbs} content={content} />
    </Route>
  ) : (
    <Redirect to={{ pathname: "/login", state: { referer: "/" } }} />
  );
}

export default PrivateRoute;
