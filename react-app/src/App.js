import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { AuthContext } from "./context/auth";

import "./App.scss";

import Page from "./components/Page";
import Home from "./pages/Home";
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
        <Route path="/services">
          <Page title={""} breadcrumbs={[]} content={<Services />} />
        </Route>
        <Route path="/topics">
          <Page title={""} breadcrumbs={[]} content={<Topics />} />
        </Route>
        <Route path="/news">
          <Page title={""} breadcrumbs={[]} content={<News />} />
        </Route>
        <Route path="/public-engagements">
          <Page title={""} breadcrumbs={[]} content={<PublicEngagements />} />
        </Route>
        <Route path="/jobs-hr">
          <Page title={""} breadcrumbs={[]} content={<JobsHR />} />
        </Route>
        <Route path="/contact">
          <Page title={""} breadcrumbs={[]} content={<Contact />} />
        </Route>
        <Route>
          <Page title={""} breadcrumbs={[]} content={<Home />} />
        </Route>
      </Switch>
    </AuthContext.Provider>
  );
}

export default App;
