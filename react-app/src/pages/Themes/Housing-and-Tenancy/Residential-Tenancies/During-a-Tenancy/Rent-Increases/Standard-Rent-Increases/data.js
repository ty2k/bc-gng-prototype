const content = [
  {
    type: "p",
    className: "p--last-updated",
    children: [
      {
        type: "text",
        style: "normal",
        children: "Last Updated: December 12, 2020",
      },
    ],
  },
  {
    type: "tabbed-page-nav",
    children: [
      {
        label: "Rent Increases Overview",
        href:
          "/themes/housing-and-tenancy/residential-tenancies/during-a-tenancy/rent-increases",
      },
      {
        label: "Standard Rent Increases",
        href:
          "/themes/housing-and-tenancy/residential-tenancies/during-a-tenancy/rent-increases/standard-rent-increases",
      },
      {
        label: "Proportional Amount Rent Increase",
        href: "/under-construction",
      },
      {
        label: "Additional Rent Increase",
        href: "/under-construction",
      },
    ],
  },
  {
    type: "br",
  },
  {
    type: "on-this-page",
    title: "On this Page",
    children: [
      {
        id: "overview",
        label: "Overview",
      },
      {
        id: "rent-increase-calculator",
        label: "Rent Increase Calculator",
      },
      {
        id: "notifying-tenants",
        label: "Notifying Tenants",
      },
      {
        id: "related-links",
        label: "Related Links",
      },
      {
        id: "contact-the-rtb",
        label: "Contact the Residential Tenancy Branch",
      },
    ],
  },
  {
    type: "br",
  },
  {
    type: "h2",
    id: "overview",
    children: "Overview",
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "Landlords must provide tenants with three full rental months’ notice of a rent increase.",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "Manufactured home park landlords who do not wish to increase rent by the allowable proportional amount may apply a standard rent increase.",
      },
    ],
  },
  {
    type: "br",
  },
  {
    type: "callout",
    className: "error",
    children: [
      {
        type: "p",
        children: [
          {
            type: "text",
            style: "strong",
            children:
              "NOTE: A landlord can give a notice of rent increase however, the increase will not come into effect until December 1, 2020. Go to the COVID-19 page for more details.",
          },
        ],
      },
    ],
  },
  {
    type: "br",
  },
  {
    type: "h2",
    id: "rent-increase-calculator",
    children: "Rent Increase Calculator",
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "What are the rules about rent increases in B.C.? How much can landlords increase rent by in B.C.? Use the rent increase calculator and get information about rent increases for landlords and tenants.",
      },
    ],
  },
  {
    type: "button-link",
    children: "Rent Increase Calculator",
    external: false,
    href: "/under-construction",
    primary: true,
  },
  {
    type: "br",
  },
  {
    type: "h2",
    id: "notifying-tenants",
    children: "Notifying Tenants",
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "Landlords must give tenants a copy of one of the completed forms depending on the type of tenancy:",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "- Notice of Rent Increase - Residential Rental Units (PDF, 1.7MB)",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "- Notice of Standard Rent Increase – Manufactured Home Site (PDF)",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "Be sure to complete both pages of the form – including all of the boxes on the second page. Please note that the amount of the calculated increase must not be rounded up.",
      },
    ],
  },
  {
    type: "br",
  },
  {
    type: "back-forward-button-pair",
    args: {
      backHref:
        "/themes/housing-and-tenancy/residential-tenancies/during-a-tenancy/rent-increases",
      backLabel: "Rent Increases Overview",
      forwardHref: "/under-construction",
      forwardLabel: "Proportional Amount Rent Increase",
    },
  },
  {
    type: "br",
  },
  {
    type: "h2",
    id: "related-links",
    children: "Related Links",
  },
  {
    type: "navigation",
    children: [
      {
        cards: [
          {
            title: "Paying Rent",
            description:
              "Find out what needs to happen in situations where tenants must be notified. For example, when a landlord wants to enter a rental unit, end a tenancy, discontinue services or schedule a showing.",
          },
          {
            title: "Changes to the Agreement",
            description:
              "Find out what needs to happen in situations where tenants must be notified. For example, when a landlord wants to enter a rental unit, end a tenancy, discontinue services or schedule a showing.",
          },
          {
            title: "Repairs and Maintenance",
            description:
              "Find out what needs to happen in situations where tenants must be notified. For example, when a landlord wants to enter a rental unit, end a tenancy, discontinue services or schedule a showing.",
          },
        ],
      },
    ],
  },
  {
    type: "br",
  },
  {
    type: "full-width-block",
    children: [
      {
        type: "h2",
        children: "Contact the Residential Tenancy Branch",
        id: "contact-the-rtb",
      },
      {
        type: "p",
        children: [
          {
            type: "text",
            children: "Contact us via phone, email, or in person",
          },
        ],
      },
      {
        type: "button-link",
        children: "Contact the Branch",
        external: false,
        href: "/under-construction",
        primary: true,
      },
    ],
  },
  {
    type: "br",
  },
];

export { content };
