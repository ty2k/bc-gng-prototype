import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "./context/auth";

import "./App.scss";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Topics from "./pages/Topics";
import News from "./pages/News";
import PublicEngagements from "./pages/PublicEngagements";
import JobsHR from "./pages/JobsHR";
import Contact from "./pages/Contact";

function App() {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute
          exact
          path="/"
          title={""}
          breadcrumbs={[]}
          content={<Home />}
        />
        <PrivateRoute
          path="/services"
          title={""}
          breadcrumbs={[]}
          content={<Services />}
        />
        <PrivateRoute
          path="/topics"
          title={""}
          breadcrumbs={[]}
          content={<Topics />}
        />
        <PrivateRoute
          path="/news"
          title={""}
          breadcrumbs={[]}
          content={<News />}
        />
        <PrivateRoute
          path="/public-engagements"
          title={""}
          breadcrumbs={[]}
          content={<PublicEngagements />}
        />
        <PrivateRoute
          path="/jobs-hr"
          title={""}
          breadcrumbs={[]}
          content={<JobsHR />}
        />
        <PrivateRoute
          path="/contact"
          title={""}
          breadcrumbs={[]}
          content={<Contact />}
        />
        <PrivateRoute title={""} breadcrumbs={[]} content={<Home />} />
      </Switch>
    </AuthContext.Provider>
  );
}

export default App;
