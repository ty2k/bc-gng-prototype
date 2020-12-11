const content = [
  {
    type: "h1",
    children: "Overview",
  },
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
    type: "on-this-page",
    title: "On This Page",
    children: [
      {
        id: "what-employers-must-do",
        label: "What Employers Must Do",
      },
      {
        id: "references-from-the-employment-standards-act-and-regulation",
        label: "References from the Employment Standards Act & Regulation",
      },
      {
        id: "submit-a-complaint",
        label: "Submit a Complaint",
      },
      {
        id: "contact-the-employment-standards-branch",
        label: "Contact the Employment Standards Branch",
      },
    ],
  },
  {
    type: "br",
  },
  {
    type: "h2",
    id: "what-employers-must-do",
    children: "What Employers Must Do",
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        style: "strong",
        children: "Meet all Minimum Standards",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "Employers must provide employment agreements that meet all minimum standards including ",
      },
      {
        type: "a-internal",
        href: "",
        children: "minimum wage",
      },
      {
        type: "text",
        children: ", ",
      },
      {
        type: "a-internal",
        href: "",
        children: "minimum hours of work",
      },
      {
        type: "text",
        children: ", ",
      },
      {
        type: "a-internal",
        href: "",
        children: "vacation time and pay",
      },
      {
        type: "text",
        children: ", ",
      },
      {
        type: "a-internal",
        href: "",
        children: "statutory holidays",
      },
      {
        type: "text",
        children: " and ",
      },
      {
        type: "a-internal",
        href: "",
        children: "ending employment",
      },
      {
        type: "text",
        children: ".",
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
            children:
              "Employers and employees cannot agree to working arrangements that are for less than the minimum standards",
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
        style: "strong",
        children: "Explain workplace standards",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "Employers need to clearly communicate to employees what their rights are for working in B.C. They should do so by posting and sharing the information in these documents:",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "- ",
      },
      {
        type: "a-internal",
        href: "",
        children: "Working in B.C. - poster format (PDF)",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "- ",
      },
      {
        type: "a-internal",
        href: "",
        children: "Working in B.C. - information sheet format (PDF)",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "Employers should also communicate the specific terms and conditions of employment in writing. A job description is not required, but it can help new employees know what is expected of them.",
      },
    ],
  },
  {
    type: "br",
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        style: "strong",
        children:
          "Give Accurate Information about wages & employment conditions",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "Employers are not allowed to misrepresent an employment offer to convince potential employees to work for them.",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "They also cannot pay an employee less than the wage agreed upon, even if the employee isn’t performing as well as expected. In these situations, employers may choose to end employment.",
      },
    ],
  },
  {
    type: "br",
  },
  {
    type: "h2",
    id: "references-from-the-employment-standards-act-and-regulation",
    children: "References from the Employment Standards Act & Regulation",
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "- ",
      },
      {
        type: "a-internal",
        href: "",
        children: "Section 6 Informing employees of their rights",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "- ",
      },
      {
        type: "a-internal",
        href: "",
        children: "Section 8 No False Representations",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "- ",
      },
      {
        type: "a-internal",
        href: "",
        children: "Section 10 No charge for hiring or providing information",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "- ",
      },
      {
        type: "a-internal",
        href: "",
        children: "Section 11 No fees to other persons",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "- ",
      },
      {
        type: "a-internal",
        href: "",
        children:
          "Section 14 Written employment contract required for domestics",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "- ",
      },
      {
        type: "a-internal",
        href: "",
        children: "Section 15 Register of employees working in residences",
      },
    ],
  },
  {
    type: "br",
  },
  {
    type: "h2",
    id: "submit-a-complaint",
    children: "Submit a Complaint",
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "Try to resolve disputes informally. If this isn’t possible, you can submit a complaint to resolve a problem at work.",
      },
    ],
  },
  {
    type: "button",
    children: "Make a Complaint",
    onClick: null,
    primary: true,
  },
  {
    type: "br",
  },
  {
    type: "h2",
    id: "contact-the-employment-standards-branch",
    children: "Contact the Employment Standards Branch",
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
    type: "button",
    children: "Contact the Branch",
    onClick: null,
    primary: true,
  },
  {
    type: "br",
  },
];

const navigation = [
  {
    label: "Overview",
    href:
      "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees",
  },
  {
    label: "Hiring Domestic Workers",
    href:
      "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-domestic-workers",
  },
  {
    label: "Hiring Farm Workers",
    href:
      "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-farm-workers",
  },
  {
    label: "Hiring Silviculture Workers",
    href:
      "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-silviculture-workers",
  },
  {
    label: "Requirements to Hiring Temporary Foreign Workers",
    href:
      "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/requirements-to-hiring-temporary-foreign-workers",
  },
  {
    label: "Hiring Young People",
    href:
      "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-young-people",
  },
];

export { content, navigation };
