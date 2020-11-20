import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "./context/auth";

import "./App.scss";

import Page from "./components/Page";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Topics from "./pages/Topics";
import News from "./pages/News";
import PublicEngagements from "./pages/PublicEngagements";
import JobsHR from "./pages/JobsHR";
import Contact from "./pages/Contact";

function App(props) {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Switch>
        <Route exact path="/">
          <Page title={""} breadcrumbs={[]} content={<Home />} />
        </Route>
        <Route path="/login">
          <Page title={""} breadcrumbs={[]} content={<Login />} />
        </Route>
        <PrivateRoute path="/services">
          <Page title={""} breadcrumbs={[]} content={<Services />} />
        </PrivateRoute>
        <PrivateRoute path="/topics">
          <Page title={""} breadcrumbs={[]} content={<Topics />} />
        </PrivateRoute>
        <PrivateRoute path="/news">
          <Page title={""} breadcrumbs={[]} content={<News />} />
        </PrivateRoute>
        <PrivateRoute path="/public-engagements">
          <Page title={""} breadcrumbs={[]} content={<PublicEngagements />} />
        </PrivateRoute>
        <PrivateRoute path="/jobs-hr">
          <Page title={""} breadcrumbs={[]} content={<JobsHR />} />
        </PrivateRoute>
        <PrivateRoute path="/contact">
          <Page title={""} breadcrumbs={[]} content={<Contact />} />
        </PrivateRoute>
        <PrivateRoute>
          <Page title={""} breadcrumbs={[]} content={<Home />} />
        </PrivateRoute>
      </Switch>
    </AuthContext.Provider>
  );
}

export default App;
