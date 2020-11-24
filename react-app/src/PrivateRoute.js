import React from "react";
import { Route, Redirect } from "react-router-dom";

import Page from "./components/Page";

function PrivateRoute({ content, ...rest }) {
  return localStorage.getItem("user") ? (
    <Route {...rest}>
      {<Page title={""} breadcrumbs={[]} content={content} />}
    </Route>
  ) : (
    <Redirect to={{ pathname: "/login", state: { referer: "/" } }} />
  );
}

export default PrivateRoute;
