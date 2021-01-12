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
    type: "br",
  },
  {
    type: "stepped-guide",
    callToAction: {
      label: "Apply Online",
      href: "",
    },
    children: [
      {
        label: "Overview",
        href:
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-temporary-foreign-workers/apply-for-a-recruiters-license",
      },
      {
        label: "Before You Apply",
        href:
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-temporary-foreign-workers/apply-for-a-recruiters-license/how-to-apply",
      },
      {
        label: "How to Pay",
        href:
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-temporary-foreign-workers/apply-for-a-recruiters-license/pay-the-security-bond",
      },
      {
        label: "How to Apply",
        href:
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-temporary-foreign-workers/apply-for-a-recruiters-license/register-to-hire-foreign-workers",
      },
      {
        label: "After You Apply",
        href:
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-temporary-foreign-workers/apply-for-a-recruiters-license/once-you-get-your-license",
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
          "Dispute resolution is the formal process for resolving disputes between landlords and tenants – it’s similar to a court proceeding.",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "Landlords and tenants can apply for dispute resolution when they can’t resolve a problem related to a tenancy.",
      },
    ],
  },
  {
    type: "wizard",
    title: "I'm a...",
    first: "intro",
    steps: {
      intro: {
        options: [
          {
            label: "Tenant",
            id: "tenant",
            next_step: "",
            content: [],
          },
          {
            label: "Landlord",
            id: "landlord",
            next_step: "",
            content: [],
          },
          {
            label: "Respondent",
            id: "respondent",
            next_step: "",
            content: [],
          },
        ],
      },
    },
  },
  {
    type: "back-forward-button-pair",
    args: {
      backHref: "",
      backLabel: "",
      forwardHref:
        "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/online-dispute-resolution-application/before-you-apply",
      forwardLabel: "Before You Apply",
    },
  },
  {
    type: "br",
  },
  {
    type: "navigation",
    children: [
      {
        title: "Related Links",
        cards: [
          {
            title: "Complete a Paper Application",
            description: "Learn how to complete a paper application",
          },
          {
            title: "Service BC",
            description: [
              {
                type: "p",
                children: [
                  {
                    type: "text",
                    children: "Want an in-person experience?",
                  },
                ],
              },
              {
                type: "p",
                children: [
                  {
                    type: "text",
                    children: "Find your nearest Service BC location",
                  },
                ],
              },
            ],
          },
          {
            title: "Forms",
            description: "Find all tenancy forms",
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
        external: "false",
        href: "",
        primary: true,
      },
    ],
  },
  {
    type: "br",
  },
];

export { content };
