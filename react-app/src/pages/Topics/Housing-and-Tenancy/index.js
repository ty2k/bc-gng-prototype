import React from "react";
import propTypes from "prop-types";

import Navigation from "../../Navigation";

function HousingAndTenancy() {
  return (
    <main>
      <h1>Housing &amp; Tenancy</h1>
      <Navigation
        sections={[
          {
            title: "",
            cards: [
              {
                title: "Residential Tenancies",
                description: "Info and services for tenants and landlords.",
                links: [
                  {
                    href: "",
                    label: "Tips for landlords & renters",
                  },
                  {
                    href: "",
                    label: "Tenancy Agreements",
                  },
                ],
              },
            ],
          },
        ]}
      />
    </main>
  );
}

HousingAndTenancy.propTypes = {
  title: propTypes.string,
  breadcrumbs: propTypes.array,
};

HousingAndTenancy.defaultProps = {};

export default HousingAndTenancy;
