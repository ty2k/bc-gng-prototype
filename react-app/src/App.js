import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import "./App.scss";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Services from "./pages/Services";
import Themes from "./pages/Themes";
import News from "./pages/News";
import PublicEngagements from "./pages/PublicEngagements";
import JobsHR from "./pages/JobsHR";
import Contact from "./pages/Contact";
import UnderConstruction from "./pages/Under-Construction";

// Residential Tenancy Branch pages
import HousingAndTenancy from "./pages/Themes/Housing-and-Tenancy";
import ResidentialTenancies from "./pages/Themes/Housing-and-Tenancy/Residential-Tenancies";
import Forms from "./pages/Themes/Housing-and-Tenancy/Residential-Tenancies/Forms";
import DuringATenancy from "./pages/Themes/Housing-and-Tenancy/Residential-Tenancies/During-a-Tenancy";
import RentIncreases from "./pages/Themes/Housing-and-Tenancy/Residential-Tenancies/During-a-Tenancy/Rent-Increases";
import StandardRentIncreases from "./pages/Themes/Housing-and-Tenancy/Residential-Tenancies/During-a-Tenancy/Rent-Increases/Standard-Rent-Increases";
import PossessionOfTheUnit from "./pages/Themes/Housing-and-Tenancy/Residential-Tenancies/During-a-Tenancy/Possession-of-the-Unit";
import DisputeResolutionApplications from "./pages/Themes/Housing-and-Tenancy/Residential-Tenancies/Dispute-Resolution-Applications";
import OnlineDisputeResolutionApplication from "./pages/Themes/Housing-and-Tenancy/Residential-Tenancies/Dispute-Resolution-Applications/Online-Dispute-Resolution-Application";
import ODRABeforeYouApply from "./pages/Themes/Housing-and-Tenancy/Residential-Tenancies/Dispute-Resolution-Applications/Online-Dispute-Resolution-Application/Before-You-Apply";
import ODRAHowToPay from "./pages/Themes/Housing-and-Tenancy/Residential-Tenancies/Dispute-Resolution-Applications/Online-Dispute-Resolution-Application/How-to-Pay";
import ODRAHowToApply from "./pages/Themes/Housing-and-Tenancy/Residential-Tenancies/Dispute-Resolution-Applications/Online-Dispute-Resolution-Application/How-to-Apply";
import ODRAAfterYouApply from "./pages/Themes/Housing-and-Tenancy/Residential-Tenancies/Dispute-Resolution-Applications/Online-Dispute-Resolution-Application/After-You-Apply";
import TenantDirectRequest from "./pages/Themes/Housing-and-Tenancy/Residential-Tenancies/Dispute-Resolution-Applications/Tenant-Direct-Request";
import TDRBeforeYouApply from "./pages/Themes/Housing-and-Tenancy/Residential-Tenancies/Dispute-Resolution-Applications/Tenant-Direct-Request/Before-You-Apply";
import TDRHowToApply from "./pages/Themes/Housing-and-Tenancy/Residential-Tenancies/Dispute-Resolution-Applications/Tenant-Direct-Request/How-to-Apply";
import TDRApplicationFee from "./pages/Themes/Housing-and-Tenancy/Residential-Tenancies/Dispute-Resolution-Applications/Tenant-Direct-Request/Application-Fee";
import TDRWhatsNext from "./pages/Themes/Housing-and-Tenancy/Residential-Tenancies/Dispute-Resolution-Applications/Tenant-Direct-Request/Whats-Next";

// Employment Standards Branch pages
import EmploymentBusinessAndEconomicDevelopment from "./pages/Themes/Employment-Business-and-Economic-Development";
import EmploymentStandardsAndWorkplaceSafety from "./pages/Themes/Employment-Business-and-Economic-Development/Employment-Standards-and-Workplace-Safety";
import EmploymentStandards from "./pages/Themes/Employment-Business-and-Economic-Development/Employment-Standards-and-Workplace-Safety/Employment-Standards";
import FormsAndResources from "./pages/Themes/Employment-Business-and-Economic-Development/Employment-Standards-and-Workplace-Safety/Employment-Standards/Forms-and-Resources";
import GuideToTheEmploymentStandardsAct from "./pages/Themes/Employment-Business-and-Economic-Development/Employment-Standards-and-Workplace-Safety/Employment-Standards/Forms-and-Resources/Guide-to-the-Employment-Standards-Act";
import EmploymentStandardsAppendices from "./pages/Themes/Employment-Business-and-Economic-Development/Employment-Standards-and-Workplace-Safety/Employment-Standards/Forms-and-Resources/Guide-to-the-Employment-Standards-Act/Appendices";
import HiringEmployees from "./pages/Themes/Employment-Business-and-Economic-Development/Employment-Standards-and-Workplace-Safety/Employment-Standards/Hiring-Employees";
import HiringDomesticWorkers from "./pages/Themes/Employment-Business-and-Economic-Development/Employment-Standards-and-Workplace-Safety/Employment-Standards/Hiring-Employees/Hiring-Domestic-Workers";
import HiringTemporaryForeignWorkers from "./pages/Themes/Employment-Business-and-Economic-Development/Employment-Standards-and-Workplace-Safety/Employment-Standards/Hiring-Employees/Hiring-Temporary-Foreign-Workers";
import HiringYoungPeople from "./pages/Themes/Employment-Business-and-Economic-Development/Employment-Standards-and-Workplace-Safety/Employment-Standards/Hiring-Employees/Hiring-Young-People";
import EntertainmentIndustry from "./pages/Themes/Employment-Business-and-Economic-Development/Employment-Standards-and-Workplace-Safety/Employment-Standards/Hiring-Employees/Hiring-Young-People/Entertainment-Industry";
import ApplyForRecruitersLicense from "./pages/Themes/Employment-Business-and-Economic-Development/Employment-Standards-and-Workplace-Safety/Employment-Standards/Hiring-Employees/Hiring-Temporary-Foreign-Workers/Apply-for-Recruiters-License";
import HowToApply from "./pages/Themes/Employment-Business-and-Economic-Development/Employment-Standards-and-Workplace-Safety/Employment-Standards/Hiring-Employees/Hiring-Temporary-Foreign-Workers/Apply-for-Recruiters-License/How-to-Apply";
import OnceYouGetYourLicense from "./pages/Themes/Employment-Business-and-Economic-Development/Employment-Standards-and-Workplace-Safety/Employment-Standards/Hiring-Employees/Hiring-Temporary-Foreign-Workers/Apply-for-Recruiters-License/Once-You-Get-Your-License";

// Education pages
import EducationAndTraining from "./pages/Themes/Education-and-Training";
import KindergartenToGrade12 from "./pages/Themes/Education-and-Training/K-12";
import OrderYourStudentTranscripts from "./pages/Themes/Education-and-Training/K-12/Transcripts-and-Certifications/Order-Your-Student-Transcripts";
import Eligibility from "./pages/Themes/Education-and-Training/K-12/Transcripts-and-Certifications/Order-Your-Student-Transcripts/Eligibility";
import BeforeYouStart from "./pages/Themes/Education-and-Training/K-12/Transcripts-and-Certifications/Order-Your-Student-Transcripts/Before-You-Start";
import Costs from "./pages/Themes/Education-and-Training/K-12/Transcripts-and-Certifications/Order-Your-Student-Transcripts/Costs";
import HowToOrder from "./pages/Themes/Education-and-Training/K-12/Transcripts-and-Certifications/Order-Your-Student-Transcripts/How-to-Order";
import AfterYouOrder from "./pages/Themes/Education-and-Training/K-12/Transcripts-and-Certifications/Order-Your-Student-Transcripts/After-You-Order";

function App() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/logout">
        <Logout />
      </Route>
      <PrivateRoute
        exact
        path="/"
        title={""}
        breadcrumbs={[]}
        content={<Home />}
      />
      <PrivateRoute
        path={"/services"}
        title={"Programs & Services"}
        breadcrumbs={[]}
        content={<Services />}
      />

      {/* Residential Tenancy Branch pages */}
      <PrivateRoute
        exact
        path={
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/tenant-direct-request/whats-next"
        }
        title={"Tenant's Direct Request"}
        breadcrumbs={[
          { href: "/themes/housing-and-tenancy", label: "Housing & Tenancy" },
          {
            href: "/themes/housing-and-tenancy/residential-tenancies",
            label: "Residential Tenancies",
          },
          {
            href:
              "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications",
            label: "Dispute Resolution Applications",
          },
        ]}
        content={<TDRWhatsNext />}
        parentHref={
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications"
        }
        parentTitle={"Dispute Resolution Applications"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/tenant-direct-request/application-fee"
        }
        title={"Tenant's Direct Request"}
        breadcrumbs={[
          { href: "/themes/housing-and-tenancy", label: "Housing & Tenancy" },
          {
            href: "/themes/housing-and-tenancy/residential-tenancies",
            label: "Residential Tenancies",
          },
          {
            href:
              "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications",
            label: "Dispute Resolution Applications",
          },
        ]}
        content={<TDRApplicationFee />}
        parentHref={
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications"
        }
        parentTitle={"Dispute Resolution Applications"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/tenant-direct-request/how-to-apply"
        }
        title={"Tenant's Direct Request"}
        breadcrumbs={[
          { href: "/themes/housing-and-tenancy", label: "Housing & Tenancy" },
          {
            href: "/themes/housing-and-tenancy/residential-tenancies",
            label: "Residential Tenancies",
          },
          {
            href:
              "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications",
            label: "Dispute Resolution Applications",
          },
        ]}
        content={<TDRHowToApply />}
        parentHref={
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications"
        }
        parentTitle={"Dispute Resolution Applications"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/tenant-direct-request/before-you-apply"
        }
        title={"Tenant's Direct Request"}
        breadcrumbs={[
          { href: "/themes/housing-and-tenancy", label: "Housing & Tenancy" },
          {
            href: "/themes/housing-and-tenancy/residential-tenancies",
            label: "Residential Tenancies",
          },
          {
            href:
              "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications",
            label: "Dispute Resolution Applications",
          },
        ]}
        content={<TDRBeforeYouApply />}
        parentHref={
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications"
        }
        parentTitle={"Dispute Resolution Applications"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/tenant-direct-request"
        }
        title={"Tenant's Direct Request"}
        breadcrumbs={[
          { href: "/themes/housing-and-tenancy", label: "Housing & Tenancy" },
          {
            href: "/themes/housing-and-tenancy/residential-tenancies",
            label: "Residential Tenancies",
          },
          {
            href:
              "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications",
            label: "Dispute Resolution Applications",
          },
        ]}
        content={<TenantDirectRequest />}
        parentHref={
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications"
        }
        parentTitle={"Dispute Resolution Applications"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/online-dispute-resolution-application/after-you-apply"
        }
        title={"Online Dispute Resolution Application"}
        breadcrumbs={[
          { href: "/themes/housing-and-tenancy", label: "Housing & Tenancy" },
          {
            href: "/themes/housing-and-tenancy/residential-tenancies",
            label: "Residential Tenancies",
          },
          {
            href:
              "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications",
            label: "Dispute Resolution Applications",
          },
        ]}
        content={<ODRAAfterYouApply />}
        parentHref={
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications"
        }
        parentTitle={"Dispute Resolution Applications"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/online-dispute-resolution-application/how-to-apply"
        }
        title={"Online Dispute Resolution Application"}
        breadcrumbs={[
          { href: "/themes/housing-and-tenancy", label: "Housing & Tenancy" },
          {
            href: "/themes/housing-and-tenancy/residential-tenancies",
            label: "Residential Tenancies",
          },
          {
            href:
              "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications",
            label: "Dispute Resolution Applications",
          },
        ]}
        content={<ODRAHowToApply />}
        parentHref={
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications"
        }
        parentTitle={"Dispute Resolution Applications"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/online-dispute-resolution-application/how-to-pay"
        }
        title={"Online Dispute Resolution Application"}
        breadcrumbs={[
          { href: "/themes/housing-and-tenancy", label: "Housing & Tenancy" },
          {
            href: "/themes/housing-and-tenancy/residential-tenancies",
            label: "Residential Tenancies",
          },
          {
            href:
              "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications",
            label: "Dispute Resolution Applications",
          },
        ]}
        content={<ODRAHowToPay />}
        parentHref={
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications"
        }
        parentTitle={"Dispute Resolution Applications"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/online-dispute-resolution-application/before-you-apply"
        }
        title={"Online Dispute Resolution Application"}
        breadcrumbs={[
          { href: "/themes/housing-and-tenancy", label: "Housing & Tenancy" },
          {
            href: "/themes/housing-and-tenancy/residential-tenancies",
            label: "Residential Tenancies",
          },
          {
            href:
              "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications",
            label: "Dispute Resolution Applications",
          },
        ]}
        content={<ODRABeforeYouApply />}
        parentHref={
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications"
        }
        parentTitle={"Dispute Resolution Applications"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/online-dispute-resolution-application"
        }
        title={"Online Dispute Resolution Application"}
        breadcrumbs={[
          { href: "/themes/housing-and-tenancy", label: "Housing & Tenancy" },
          {
            href: "/themes/housing-and-tenancy/residential-tenancies",
            label: "Residential Tenancies",
          },
          {
            href:
              "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications",
            label: "Dispute Resolution Applications",
          },
        ]}
        content={<OnlineDisputeResolutionApplication />}
        parentHref={
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications"
        }
        parentTitle={"Dispute Resolution Applications"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications"
        }
        title={"Dispute Resolution Applications"}
        breadcrumbs={[
          { href: "/themes/housing-and-tenancy", label: "Housing & Tenancy" },
          {
            href: "/themes/housing-and-tenancy/residential-tenancies",
            label: "Residential Tenancies",
          },
        ]}
        content={<DisputeResolutionApplications />}
        parentHref={"/themes/housing-and-tenancy/residential-tenancies"}
        parentTitle={"Residential Tenancies"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/housing-and-tenancy/residential-tenancies/during-a-tenancy/rent-increases/standard-rent-increases"
        }
        title={"Rent Increases"}
        breadcrumbs={[
          { href: "/themes/housing-and-tenancy", label: "Housing & Tenancy" },
          {
            href: "/themes/housing-and-tenancy/residential-tenancies",
            label: "Residential Tenancies",
          },
          {
            href:
              "/themes/housing-and-tenancy/residential-tenancies/during-a-tenancy",
            label: "During a Tenancy",
          },
        ]}
        content={<StandardRentIncreases />}
        parentHref={
          "/themes/housing-and-tenancy/residential-tenancies/during-a-tenancy"
        }
        parentTitle={"During a Tenancy"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/housing-and-tenancy/residential-tenancies/during-a-tenancy/possession-of-the-unit"
        }
        title={"Possession of the Unit"}
        breadcrumbs={[
          { href: "/themes/housing-and-tenancy", label: "Housing & Tenancy" },
          {
            href: "/themes/housing-and-tenancy/residential-tenancies",
            label: "Residential Tenancies",
          },
          {
            href:
              "/themes/housing-and-tenancy/residential-tenancies/during-a-tenancy",
            label: "During a Tenancy",
          },
        ]}
        content={<PossessionOfTheUnit />}
        parentHref={
          "/themes/housing-and-tenancy/residential-tenancies/during-a-tenancy"
        }
        parentTitle={"During a Tenancy"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/housing-and-tenancy/residential-tenancies/during-a-tenancy/rent-increases"
        }
        title={"Rent Increases"}
        breadcrumbs={[
          { href: "/themes/housing-and-tenancy", label: "Housing & Tenancy" },
          {
            href: "/themes/housing-and-tenancy/residential-tenancies",
            label: "Residential Tenancies",
          },
          {
            href:
              "/themes/housing-and-tenancy/residential-tenancies/during-a-tenancy",
            label: "During a Tenancy",
          },
        ]}
        content={<RentIncreases />}
        parentHref={
          "/themes/housing-and-tenancy/residential-tenancies/during-a-tenancy"
        }
        parentTitle={"During a Tenancy"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/housing-and-tenancy/residential-tenancies/during-a-tenancy"
        }
        title={"During a Tenancy"}
        breadcrumbs={[
          { href: "/themes/housing-and-tenancy", label: "Housing & Tenancy" },
          {
            href: "/themes/housing-and-tenancy/residential-tenancies",
            label: "Residential Tenancies",
          },
        ]}
        content={<DuringATenancy />}
        parentHref={"/themes/housing-and-tenancy/residential-tenancies"}
        parentTitle={"Residential Tenancies"}
      />
      <PrivateRoute
        exact
        path={"/themes/housing-and-tenancy/residential-tenancies/forms"}
        title={"Forms"}
        breadcrumbs={[
          { href: "/themes/housing-and-tenancy", label: "Housing & Tenancy" },
          {
            href: "/themes/housing-and-tenancy/residential-tenancies",
            label: "Residential Tenancies",
          },
        ]}
        content={<Forms />}
        parentHref={"/themes/housing-and-tenancy/residential-tenancies/"}
        parentTitle={"Residential Tenancies"}
      />
      <PrivateRoute
        exact
        path={"/themes/housing-and-tenancy/residential-tenancies"}
        title={"Residential Tenancies"}
        breadcrumbs={[
          { href: "/themes/housing-and-tenancy", label: "Housing & Tenancy" },
        ]}
        content={<ResidentialTenancies />}
        parentHref={"/themes/housing-and-tenancy"}
        parentTitle={"Housing & Tenancy"}
      />
      <PrivateRoute
        exact
        path={"/themes/housing-and-tenancy"}
        title={"Housing & Tenancy"}
        breadcrumbs={[]}
        content={<HousingAndTenancy />}
        parentHref={"/themes"}
        parentTitle={"Topics"}
      />

      {/* Employment Standards Branch pages */}
      <PrivateRoute
        exact
        path={
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-domestic-workers"
        }
        title={"Hiring Employees"}
        breadcrumbs={[
          {
            href: "/themes/employment-business-and-economic-development",
            label: "Employment, Business & Economic Development",
          },
          {
            href: "/themes/employment-business-and-economic-development",
            label: "Employment Standards & Workplace Safety",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards",
            label: "Employment Standards",
          },
        ]}
        content={<HiringDomesticWorkers />}
        parentHref={
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/"
        }
        parentTitle={"Employment Standards"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-young-people/entertainment-industry"
        }
        title={"Hiring Young People"}
        breadcrumbs={[
          {
            href: "/themes/employment-business-and-economic-development",
            label: "Employment, Business & Economic Development",
          },
          {
            href: "/themes/employment-business-and-economic-development",
            label: "Employment Standards & Workplace Safety",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards",
            label: "Employment Standards",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees",
            label: "Hiring Employees",
          },
        ]}
        content={<EntertainmentIndustry />}
        parentHref={
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-young-people"
        }
        parentTitle={"Hiring Young People"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-young-people"
        }
        title={"Hiring Young People"}
        breadcrumbs={[
          {
            href: "/themes/employment-business-and-economic-development",
            label: "Employment, Business & Economic Development",
          },
          {
            href: "/themes/employment-business-and-economic-development",
            label: "Employment Standards & Workplace Safety",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards",
            label: "Employment Standards",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees",
            label: "Hiring Employees",
          },
        ]}
        content={<HiringYoungPeople />}
        parentHref={
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees"
        }
        parentTitle={"Hiring Employees"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-temporary-foreign-workers/apply-for-a-recruiters-license"
        }
        title={"Apply for a Recuiter’s License"}
        breadcrumbs={[
          {
            href: "/themes/employment-business-and-economic-development",
            label: "Employment, Business & Economic Development",
          },
          {
            href: "/themes/employment-business-and-economic-development",
            label: "Employment Standards & Workplace Safety",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards",
            label: "Employment Standards",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees",
            label: "Hiring Employees",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-temporary-foreign-workers",
            label: "Hiring Temporary Foreign Workers",
          },
        ]}
        content={<ApplyForRecruitersLicense />}
        parentHref={
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-temporary-foreign-workers"
        }
        parentTitle={"Hiring Temporary Foreign Workers"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-temporary-foreign-workers/apply-for-a-recruiters-license/how-to-apply"
        }
        title={"Apply for a Recuiter’s License"}
        breadcrumbs={[
          {
            href: "/themes/employment-business-and-economic-development",
            label: "Employment, Business & Economic Development",
          },
          {
            href: "/themes/employment-business-and-economic-development",
            label: "Employment Standards & Workplace Safety",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards",
            label: "Employment Standards",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees",
            label: "Hiring Employees",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-temporary-foreign-workers",
            label: "Hiring Temporary Foreign Workers",
          },
        ]}
        content={<HowToApply />}
        parentHref={
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-temporary-foreign-workers"
        }
        parentTitle={"Hiring Temporary Foreign Workers"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-temporary-foreign-workers/apply-for-a-recruiters-license/once-you-get-your-license"
        }
        title={"Apply for a Recuiter’s License"}
        breadcrumbs={[
          {
            href: "/themes/employment-business-and-economic-development",
            label: "Employment, Business & Economic Development",
          },
          {
            href: "/themes/employment-business-and-economic-development",
            label: "Employment Standards & Workplace Safety",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards",
            label: "Employment Standards",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees",
            label: "Hiring Employees",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-temporary-foreign-workers",
            label: "Hiring Temporary Foreign Workers",
          },
        ]}
        content={<OnceYouGetYourLicense />}
        parentHref={
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-temporary-foreign-workers"
        }
        parentTitle={"Hiring Temporary Foreign Workers"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-temporary-foreign-workers"
        }
        title={"Hiring Temporary Foreign Workers"}
        breadcrumbs={[
          {
            href: "/themes/employment-business-and-economic-development",
            label: "Employment, Business & Economic Development",
          },
          {
            href: "/themes/employment-business-and-economic-development",
            label: "Employment Standards & Workplace Safety",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards",
            label: "Employment Standards",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees",
            label: "Hiring Employees",
          },
        ]}
        content={<HiringTemporaryForeignWorkers />}
        parentHref={
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees"
        }
        parentTitle={"Hiring Employees"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees"
        }
        title={"Hiring Employees"}
        breadcrumbs={[
          {
            href: "/themes/employment-business-and-economic-development",
            label: "Employment, Business & Economic Development",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety",
            label: "Employment Standards & Workplace Safety",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards",
            label: "Employment Standards",
          },
        ]}
        content={<HiringEmployees />}
        parentHref={
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards"
        }
        parentTitle={"Employment Standards"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/forms-and-resources/guide-to-the-employment-standards-act/appendices"
        }
        title={"Guide to the Employment Standards Act and Regulations"}
        breadcrumbs={[
          {
            href: "/themes/employment-business-and-economic-development",
            label: "Employment, Business & Economic Development",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety",
            label: "Employment Standards & Workplace Safety",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards",
            label: "Employment Standards",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/forms-and-resources",
            label: "Forms and Resources",
          },
        ]}
        content={<EmploymentStandardsAppendices />}
        parentHref={
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/forms-and-resources"
        }
        parentTitle={"Forms and Resources"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/forms-and-resources/guide-to-the-employment-standards-act"
        }
        title={"Guide to the Employment Standards Act and Regulations"}
        breadcrumbs={[
          {
            href: "/themes/employment-business-and-economic-development",
            label: "Employment, Business & Economic Development",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety",
            label: "Employment Standards & Workplace Safety",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards",
            label: "Employment Standards",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/forms-and-resources",
            label: "Forms and Resources",
          },
        ]}
        content={<GuideToTheEmploymentStandardsAct />}
        parentHref={
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/forms-and-resources"
        }
        parentTitle={"Forms and Resources"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/forms-and-resources"
        }
        title={"Forms and Resources"}
        breadcrumbs={[
          {
            href: "/themes/employment-business-and-economic-development",
            label: "Employment, Business & Economic Development",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety",
            label: "Employment Standards & Workplace Safety",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards",
            label: "Employment Standards",
          },
        ]}
        content={<FormsAndResources />}
        parentHref={
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards"
        }
        parentTitle={"Employment Standards"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards"
        }
        title={"Employment Standards"}
        breadcrumbs={[
          {
            href: "/themes/employment-business-and-economic-development",
            label: "Employment, Business & Economic Development",
          },
          {
            href: "/themes/employment-business-and-economic-development",
            label: "Employment Standards & Workplace Safety",
          },
        ]}
        content={<EmploymentStandards />}
        parentHref={
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety"
        }
        parentTitle={"Employment Standards & Workplace Safety"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety"
        }
        title={"Employment Standards & Workplace Safety"}
        breadcrumbs={[
          {
            href: "/themes/employment-business-and-economic-development",
            label: "Employment, Business & Economic Development",
          },
        ]}
        content={<EmploymentStandardsAndWorkplaceSafety />}
        parentHref={"/themes/employment-business-and-economic-development"}
        parentTitle={"Employment, Business & Economic Development"}
      />
      <PrivateRoute
        exact
        path={"/themes/employment-business-and-economic-development"}
        title={"Employment, Business & Economic Development"}
        breadcrumbs={[]}
        content={<EmploymentBusinessAndEconomicDevelopment />}
        parentHref={"/themes"}
        parentTitle={"Topics"}
      />

      {/* Education pages */}
      <PrivateRoute
        exact
        path={
          "/themes/education-and-training/k-12/transcripts-and-certificates/order-your-student-transcripts"
        }
        title={"Order Your Student Transcript"}
        breadcrumbs={[
          {
            href: "/themes/education-and-training",
            label: "Education & Training",
          },
          {
            href: "/under-construction",
            label: "Kindergarten to Grade 12",
          },
          {
            href: "/under-construction",
            label: "Transcripts and Certificates",
          },
        ]}
        content={<OrderYourStudentTranscripts />}
        parentHref={"/under-construction"}
        parentTitle={"Transcripts and Certificates"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/education-and-training/k-12/transcripts-and-certificates/order-your-student-transcripts/eligibility"
        }
        title={"Order Your Student Transcript"}
        breadcrumbs={[
          {
            href: "/themes/education-and-training",
            label: "Education & Training",
          },
          {
            href: "/under-construction",
            label: "Kindergarten to Grade 12",
          },
          {
            href: "/under-construction",
            label: "Transcripts and Certificates",
          },
        ]}
        content={<Eligibility />}
        parentHref={"/under-construction"}
        parentTitle={"Transcripts and Certificates"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/education-and-training/k-12/transcripts-and-certificates/order-your-student-transcripts/before-you-start"
        }
        title={"Order Your Student Transcript"}
        breadcrumbs={[
          {
            href: "/themes/education-and-training",
            label: "Education & Training",
          },
          {
            href: "/under-construction",
            label: "Kindergarten to Grade 12",
          },
          {
            href: "/under-construction",
            label: "Transcripts and Certificates",
          },
        ]}
        content={<BeforeYouStart />}
        parentHref={"/under-construction"}
        parentTitle={"Transcripts and Certificates"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/education-and-training/k-12/transcripts-and-certificates/order-your-student-transcripts/costs"
        }
        title={"Order Your Student Transcript"}
        breadcrumbs={[
          {
            href: "/themes/education-and-training",
            label: "Education & Training",
          },
          {
            href: "/under-construction",
            label: "Kindergarten to Grade 12",
          },
          {
            href: "/under-construction",
            label: "Transcripts and Certificates",
          },
        ]}
        content={<Costs />}
        parentHref={"/under-construction"}
        parentTitle={"Transcripts and Certificates"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/education-and-training/k-12/transcripts-and-certificates/order-your-student-transcripts/how-to-order"
        }
        title={"Order Your Student Transcript"}
        breadcrumbs={[
          {
            href: "/themes/education-and-training",
            label: "Education & Training",
          },
          {
            href: "/under-construction",
            label: "Kindergarten to Grade 12",
          },
          {
            href: "/under-construction",
            label: "Transcripts and Certificates",
          },
        ]}
        content={<HowToOrder />}
        parentHref={"/under-construction"}
        parentTitle={"Transcripts and Certificates"}
      />
      <PrivateRoute
        exact
        path={
          "/themes/education-and-training/k-12/transcripts-and-certificates/order-your-student-transcripts/after-you-order"
        }
        title={"Order Your Student Transcript"}
        breadcrumbs={[
          {
            href: "/themes/education-and-training",
            label: "Education & Training",
          },
          {
            href: "/under-construction",
            label: "Kindergarten to Grade 12",
          },
          {
            href: "/under-construction",
            label: "Transcripts and Certificates",
          },
        ]}
        content={<AfterYouOrder />}
        parentHref={"/under-construction"}
        parentTitle={"Transcripts and Certificates"}
      />
      <PrivateRoute
        exact
        path={"/themes/education-and-training/k-12/"}
        title={"Kindergarten to Grade 12"}
        breadcrumbs={[
          {
            href: "/themes/education-and-training",
            label: "Education & Training",
          },
        ]}
        content={<KindergartenToGrade12 />}
        parentHref={"/themes/education-and-training"}
        parentTitle={"Education and Training"}
      />
      <PrivateRoute
        exact
        path={"/themes/education-and-training"}
        title={"Education and Training"}
        breadcrumbs={[]}
        content={<EducationAndTraining />}
        parentHref={"/themes"}
        parentTitle={"Topics"}
      />

      <PrivateRoute
        path={"/themes"}
        title={"Topics"}
        breadcrumbs={[]}
        content={<Themes />}
      />
      <PrivateRoute
        path={"/news"}
        title={"News"}
        breadcrumbs={[]}
        content={<News />}
      />
      <PrivateRoute
        path={"/public-engagements"}
        title={"Public Engagements"}
        breadcrumbs={[]}
        content={<PublicEngagements />}
      />
      <PrivateRoute
        path={"/jobs-hr"}
        title={"Jobs & HR"}
        breadcrumbs={[]}
        content={<JobsHR />}
      />
      <PrivateRoute
        path={"/contact"}
        title={"Contact Us"}
        breadcrumbs={[]}
        content={<Contact />}
      />
      <PrivateRoute
        path={"/under-construction"}
        title={"Under Construction"}
        breadcrumbs={[]}
        content={<UnderConstruction />}
      />
      <PrivateRoute title={""} breadcrumbs={[]} content={<Home />} />
    </Switch>
  );
}

export default App;
