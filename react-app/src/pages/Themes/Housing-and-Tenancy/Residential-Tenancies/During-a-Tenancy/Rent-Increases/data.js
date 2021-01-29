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
        id: "maximum-allowable-rent-increase",
        label: "Maximum Allowable Rent Increase",
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
          "When a tenancy ends and the landlord receives the tenant’s forwarding address in writing, the landlord has fifteen days to either return the outstanding deposit(s) or make an application to retain part or all of the deposit(s).",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "- See more details by clicking here.",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "A rent increase for a tenant with a fixed-term agreement (lease), who is remaining in a rental unit, is limited to the maximum annual allowable amount and can only be increased once every 12 months. Rent can no longer be increased above that amount between tenancy agreements with the same tenant.",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "Landlords are no longer able to apply for an additional rent increase on the basis that the rent is significantly lower than other similar rental units in the same geographic area.",
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
    id: "maximum-allowable-rent-increase",
    children: "Maximum Allowable Rent Increase",
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "The landlord may only increase the rent 12 months after the date that the existing rent was established with the existing tenant(s) or 12 months after the date of the last legal rent increase, even if there is a new landlord or a new tenant by way of an assignment.",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "The maximum allowable rent increase is defined as the 12-month average percent change in the all-items Consumer Price Index for British Columbia ending in the July that is most recently available for the calendar year for which a rent increase takes effect.",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "For example, if a rent increase takes effect in 2021, the maximum allowable rent increase is the 12-month average percent change in the all-items Consumer Price Index for British Columbia ending in July 2020.",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "BC Stats publishes the 12-month average percent change in the all-items Consumer Price Index for British Columbia:",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "- Twelve-month averages and percent change (XLSX)",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "The limits for residential tenancies and manufactured home park tenancies are different.",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "- For residential tenancies, the standard allowable rent increase for 2021 is 1.4%",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "- For residential tenancies use the form RTB-7",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "- For manufactured home park tenancies, the standard allowable rent increase for 2021 is 1.4% plus a proportional amount for the change in local government levies and regulated utility fees​",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "- For manufactured home park tenancy rent increases taking place in 2021 use the form RTB-11a​",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "Subsidized housing, where rent is related to the tenant’s income, is not subject to rent increase laws. In these cases, the Residential Tenancy Branch does not have the authority to make decisions on rent increases. Tenants who have questions about rent increases for subsidized housing should discuss it with the housing provider.​",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "The rent increase cannot be more than the amount calculated using the allowable increase percentage. This means a landlord can’t round up when calculating the allowable increase. For example, if the base rent is $1,100 and the maximum allowable increase is $15.40 the landlord can issue a Notice of Rent Increase for a new rent of up to $1,115.40, but not $1,116.00",
      },
    ],
  },
  {
    type: "br",
  },
  {
    type: "back-forward-button-pair",
    args: {
      backHref: "",
      backLabel: "",
      forwardHref:
        "/themes/housing-and-tenancy/residential-tenancies/during-a-tenancy/rent-increases/standard-rent-increases",
      forwardLabel: "Standard Rent Increases",
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
