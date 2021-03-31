import React from "react";
import { Helmet } from "react-helmet";
import { Route, Redirect } from "react-router-dom";

import Page from "./components/Page";

function PrivateRoute({
  title,
  breadcrumbs,
  content,
  metadata,
  parentHref,
  parentTitle,
  ...rest
}) {
  return localStorage.getItem("user") ? (
    <Route {...rest}>
      {/* By defining the Helmet defaults here, we can keep the BC branding out
      of the public Login route. In the future, this can live in App.js */}
      <Helmet
        defaultTitle="Province of British Columbia"
        titleTemplate="%s - Province of British Columbia"
      >
        <meta name="description" content="Prototype BC Gov Next Gen site" />
      </Helmet>
      <Page
        title={title}
        breadcrumbs={breadcrumbs}
        content={content}
        parentHref={parentHref}
        parentTitle={parentTitle}
      />
    </Route>
  ) : (
    <Redirect to={{ pathname: "/login", state: { referer: "/" } }} />
  );
}

export default PrivateRoute;
