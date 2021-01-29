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
    type: "stepped-guide",
    callToAction: {
      label: "Apply Online",
      href: "/under-construction",
    },
    children: [
      {
        label: "Overview",
        href:
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-temporary-foreign-workers/apply-for-a-recruiters-license",
      },
      {
        label: "How to Apply",
        href:
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-temporary-foreign-workers/apply-for-a-recruiters-license/how-to-apply",
      },
      {
        label: "Pay the Security Bond",
        href: "/under-construction",
      },
      {
        label: "Register to Hire Foreign Workers",
        href: "/under-construction",
      },
      {
        label: "Once You Get Your License",
        href:
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-temporary-foreign-workers/apply-for-a-recruiters-license/once-you-get-your-license",
      },
      {
        label: "Renewing Your License",
        href: "/under-construction",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "Recruiters help employers in B.C. find foreign workers. Individual recruiters must be licensed in B.C., even if their business or main operations are located outside of the province. Businesses or organizations that offer recruitment services do not get licensed – only individuals are licensed.",
      },
    ],
  },
  {
    type: "callout",
    children: [
      {
        type: "p",
        children: [
          {
            type: "text",
            style: "strong",
            children:
              "Recruiters who operate without a licence could be fined up to $10,000.",
          },
        ],
      },
    ],
  },
  {
    type: "br",
  },
  {
    type: "wizard",
    title: "Is a Recruiter's License for you?",
    first: "intro",
    steps: {
      intro: {
        text:
          "In some cases, a recruiter’s license is not necessary for you. Go through this simple questionnaire to see whether or not a recruiter’s license is for you.",
        controls: {
          forward: {
            label: "Start the questionnaire",
            step: "",
            primary: true,
          },
        },
      },
    },
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
        "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-temporary-foreign-workers/apply-for-a-recruiters-license/how-to-apply",
      forwardLabel: "How to Apply",
    },
  },
  {
    type: "br",
  },
  {
    type: "hr",
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
            title: "Register to Hire Temporary Foreign Workers",
            description: [
              {
                type: "p",
                children: [
                  {
                    type: "text",
                    children:
                      "Employers who hire temporary foreign workers in B.C. are required by law to register with the provincial government.",
                  },
                ],
              },
            ],
          },
          {
            title: "Search for an Employer or Recruiter",
            description: [
              {
                type: "p",
                children: [
                  {
                    type: "text",
                    children: "Find registered employers or licensed recruiter",
                  },
                ],
              },
            ],
          },
          {
            title: "Guide to the Employment Standards Act and Regulation",
            description: [
              {
                type: "p",
                children: [
                  {
                    type: "text",
                    children:
                      "View an interpretation of the B.C. Employment Standards Act and Regulation",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "h2",
    children: "Contact the Temporary Foreign Worker Protection Unit (TFWPU)",
    id: "contact-the-tfwpu",
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "Email: ",
      },
      {
        type: "a-external",
        href: "mailto:BCTFW.ProtectionUnit@gov.bc.ca",
        children: "BCTFW.ProtectionUnit@gov.bc.ca",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "Toll free: 1 833 236-3700 (Canada and the U.S.A.)",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "Phone: 604 660-2421",
      },
    ],
  },
  {
    type: "br",
  },
];

export { content };
