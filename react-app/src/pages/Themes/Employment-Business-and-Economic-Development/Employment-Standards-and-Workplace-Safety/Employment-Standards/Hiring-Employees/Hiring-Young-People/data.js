const content = [
  {
    type: "wizard",
    title: "Curate your information",
    first: "intro",
    steps: {
      intro: {
        text:
          "Rules are different depending on the situation and the age of the young person being hired. Let us take you through a short questionnaire to show only relevant information for you.",
        controls: {
          forward: {
            label: "Start the questionnaire",
            step: "start",
            primary: true,
          },
        },
      },
    },
  },
  {
    type: "tabbed-page-nav",
    children: [
      {
        label: "Hiring Under 15 Years Old",
        href:
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-young-people",
      },
      {
        label: "Hiring young people in the entertainment industry",
        href:
          "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-young-people/entertainment-industry",
      },
    ],
  },
  {
    type: "br",
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
        id: "hiring-under-15-years-old",
        label: "Hiring Under 15 Years Old",
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
    id: "hiring-under-15-years-old",
    children: "Hiring Under 15 Years Old",
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
              "Employers need permission to hire a child under 15 years old",
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
        children:
          "A parent or guardian decides if it’s in the best interests of their child to have a job. They must provide written permission for their child to work.",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "Employers must keep a record of the written consent. It needs to include the child’s date of birth and confirmation that the child’s parent or guardian agrees to the hours, location and type of work the child will be doing.",
      },
    ],
  },
  {
    type: "br",
  },
  {
    type: "tabbed-content",
    children: [
      {
        label: "Hiring 15 years and older",
        body: [
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "Employers who hire a young person who is 15 years of age or older must:",
              },
            ],
          },
          {
            type: "ul",
            children: [
              {
                type: "li",
                children: [
                  {
                    type: "p",
                    children: [
                      {
                        type: "text",
                        children: "Follow ",
                      },
                      {
                        type: "a-internal",
                        href: "",
                        children: "employment standards for regular employees",
                      },
                    ],
                  },
                ],
              },
              {
                type: "li",
                children: [
                  {
                    type: "p",
                    children: [
                      {
                        type: "text",
                        children: "Meet ",
                      },
                      {
                        type: "a-internal",
                        href: "",
                        children: "WorkSafeBC requirements for young workers",
                      },
                      {
                        type: "text",
                        children: " (under 25 years old)",
                      },
                    ],
                  },
                ],
              },
              {
                type: "li",
                children: [
                  {
                    type: "p",
                    children: [
                      {
                        type: "text",
                        children: "Make any required ",
                      },
                      {
                        type: "a-internal",
                        href: "",
                        children: "federal payroll deductions",
                      },
                      {
                        type: "text",
                        children:
                          " like income tax and Employment Insurance premiums",
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
        label: "Rules Hiring ages 12-14",
        body: [
          {
            type: "p",
            children: [
              {
                type: "text",
                style: "strong",
                children: "Get Parent or Guardian Consent",
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children: "Employers ",
              },
              {
                type: "a-internal",
                href: "",
                children:
                  "need written consent from a parent or guardian (PDF, 20 KB)",
              },
              {
                type: "text",
                children: ".",
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
                children: "Work Hours",
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "Work Hours Children who are 12 to 14 years old cannot:",
              },
            ],
          },
          {
            type: "ul",
            children: [
              {
                type: "li",
                children: [
                  {
                    type: "p",
                    children: [
                      {
                        type: "text",
                        children: "Be required to work during school hours",
                      },
                    ],
                  },
                ],
              },
              {
                type: "li",
                children: [
                  {
                    type: "p",
                    children: [
                      {
                        type: "text",
                        children: "Work more than four hours on school days",
                      },
                    ],
                  },
                ],
              },
              {
                type: "li",
                children: [
                  {
                    type: "p",
                    children: [
                      {
                        type: "text",
                        children:
                          "Work more than seven hours on a non-school day",
                      },
                    ],
                  },
                ],
              },
              {
                type: "li",
                children: [
                  {
                    type: "p",
                    children: [
                      {
                        type: "text",
                        children:
                          "Work more than 20 hours during a week with five school days",
                      },
                    ],
                  },
                ],
              },
              {
                type: "li",
                children: [
                  {
                    type: "p",
                    children: [
                      {
                        type: "text",
                        children:
                          "Work more than 35 hours a week when school is not in session",
                      },
                    ],
                  },
                ],
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
                children: "Provide Adult Supervision",
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "Employees who are 12 to 14 years old must always be under the direct and immediate supervision of an adult.",
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
                children: "Protect the Child’s Best Interest",
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "Parents or guardians need to make sure the child’s employment is in their best interests. They need to:",
              },
            ],
          },
          {
            type: "ul",
            children: [
              {
                type: "li",
                children: [
                  {
                    type: "p",
                    children: [
                      {
                        type: "text",
                        children:
                          "Protect the child from work that could be unsafe, interrupt their education or harm their development",
                      },
                    ],
                  },
                ],
              },
              {
                type: "li",
                children: [
                  {
                    type: "p",
                    children: [
                      {
                        type: "text",
                        children:
                          "Make sure the child understands what’s expected of them",
                      },
                    ],
                  },
                ],
              },
              {
                type: "li",
                children: [
                  {
                    type: "p",
                    children: [
                      {
                        type: "text",
                        children: "Make sure the child can do the job",
                      },
                    ],
                  },
                ],
              },
              {
                type: "li",
                children: [
                  {
                    type: "p",
                    children: [
                      {
                        type: "text",
                        children:
                          "Act as a liaison between their child and other workers",
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
        label: "Rules Hiring under 12 years old",
        // body: "Rules Hiring under 12 years old body text",
      },
    ],
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

export { content };