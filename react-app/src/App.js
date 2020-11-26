import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import "./App.scss";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Topics from "./pages/Topics";
import HousingAndTenancy from "./pages/Topics/Housing-and-Tenancy";
import ResidentialTenancies from "./pages/Topics/Housing-and-Tenancy/Residential-Tenancies";
import News from "./pages/News";
import PublicEngagements from "./pages/PublicEngagements";
import JobsHR from "./pages/JobsHR";
import Contact from "./pages/Contact";

function App() {
  return (
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
        exact
        path="/topics/housing-and-tenancy/residential-tenancies"
        title={""}
        breadcrumbs={[
          { href: "/topics", label: "Topics" },
          { href: "/topics/housing-and-tenancy", label: "Housing & Tenancy" },
        ]}
        content={<ResidentialTenancies />}
      />
      <PrivateRoute
        exact
        path="/topics/housing-and-tenancy"
        title={""}
        breadcrumbs={[{ href: "/topics", label: "Topics" }]}
        content={<HousingAndTenancy />}
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
  );
}

export default App;
