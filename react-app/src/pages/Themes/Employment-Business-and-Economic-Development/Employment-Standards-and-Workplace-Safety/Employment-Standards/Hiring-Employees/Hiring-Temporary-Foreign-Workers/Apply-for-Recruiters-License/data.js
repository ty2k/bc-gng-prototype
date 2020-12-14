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
    type: "numbered-page-nav",
    children: [
      {
        label: "Overview",
        href:
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-temporary-foreign-workers",
      },
      {
        label: "How to Apply",
        href:
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-temporary-foreign-workers/apply-for-temporary-foreign-worker-recruiters-license",
      },
      {
        label: "Pay the Security Bond",
        href:
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-temporary-foreign-workers/search-for-registered-employer-or-licensed-recruiter",
      },
      {
        label: "Register to Hire Foreign Workers",
        href:
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-temporary-foreign-workers/register-to-hire-foreign-workers",
      },
      {
        label: "Once You Get Your License",
        href:
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-temporary-foreign-workers/register-to-hire-foreign-workers",
      },
      {
        label: "Renewing Your License",
        href:
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-temporary-foreign-workers/register-to-hire-foreign-workers",
      },
    ],
  },
  {
    type: "button",
    children: "Apply Online",
    onClick: null,
    primary: true,
  },
  {
    type: "br",
  },
  {
    type: "hr",
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
    type: "p",
    children: [
      {
        type: "text",
        children: "The ",
      },
      {
        type: "a-internal",
        href: "",
        children: "federal Temporary Foreign Worker (TFW)",
      },
      {
        type: "text",
        children:
          " Program allows people from other countries to be hired for positions when there are no Canadian workers available.",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "In B.C., recruiters and employers are regulated under the ",
      },
      {
        type: "a-internal",
        href: "",
        children: "Temporary Foreign Worker Protection Act",
      },
      {
        type: "text",
        children: " to protect against unfair practices.",
      },
    ],
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
];

export { content };
