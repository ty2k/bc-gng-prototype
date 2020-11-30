import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import "./App.scss";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Themes from "./pages/Themes";
import HousingAndTenancy from "./pages/Themes/Housing-and-Tenancy";
import ResidentialTenancies from "./pages/Themes/Housing-and-Tenancy/Residential-Tenancies";
import News from "./pages/News";
import PublicEngagements from "./pages/PublicEngagements";
import JobsHR from "./pages/JobsHR";
import Contact from "./pages/Contact";
import EmploymentBusinessAndEconomicDevelopment from "./pages/Themes/Employment-Business-and-Economic-Development";

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
        path="/themes/housing-and-tenancy/residential-tenancies"
        title={""}
        breadcrumbs={[
          { href: "/themes", label: "Themes" },
          { href: "/themes/housing-and-tenancy", label: "Housing & Tenancy" },
        ]}
        content={<ResidentialTenancies />}
      />
      <PrivateRoute
        exact
        path="/themes/employment-business-and-economic-development"
        title={""}
        breadcrumbs={[{ href: "/themes", label: "Themes" }]}
        content={<EmploymentBusinessAndEconomicDevelopment />}
      />
      <PrivateRoute
        exact
        path="/themes/housing-and-tenancy"
        title={""}
        breadcrumbs={[{ href: "/themes", label: "Themes" }]}
        content={<HousingAndTenancy />}
      />
      <PrivateRoute
        path="/themes"
        title={""}
        breadcrumbs={[]}
        content={<Themes />}
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
