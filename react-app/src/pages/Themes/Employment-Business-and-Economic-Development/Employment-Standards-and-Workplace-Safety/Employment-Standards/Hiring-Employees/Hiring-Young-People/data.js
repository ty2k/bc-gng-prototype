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
      //   start: {
      //     question_text:
      //       "Please tell us how you would describe your work situation.",
      //     options: [
      //       {
      //         label: "I am an employee",
      //         id: "employee",
      //         next_step: "workplace_safety",
      //         text:
      //           "An employee is someone who receives money (or is owed money) for work performed. This includes someone who an employer allows to perform work that would normally be done by an employee.",
      //       },
      //       {
      //         label: "I am an employer",
      //         id: "employer",
      //         next_step: "employment_standards",
      //         text:
      //           "An employer is someone who hires employees and is responsible for their employment. They have control over employees or provide instruction and/or direction to staff.",
      //       },
      //       {
      //         label: "I am an independent contractor",
      //         id: "contractor",
      //         next_step: "workplace_safety",
      //         text:
      //           "An independent contractor is considered to be self-employed. Contractors are responsible for upholding workplace standards for their business.",
      //       },
      //     ],
      //     controls: {
      //       back: {
      //         label: "Back",
      //         step: "intro",
      //       },
      //       forward: {
      //         label: "Next",
      //         primary: true,
      //       },
      //     },
      //   },
      //   workplace_safety: {
      //     question_text: "Is your question or concern about workplace safety?",
      //     options: [
      //       {
      //         label: "Yes",
      //         id: "yes",
      //         next_step: "worksafe_bc",
      //       },
      //       {
      //         label: "No",
      //         id: "no",
      //         next_step: "worksafe_bc",
      //       },
      //     ],
      //     controls: {
      //       back: {
      //         label: "Back",
      //         next_step: "start",
      //       },
      //       forward: {
      //         label: "Next",
      //         primary: true,
      //       },
      //     },
      //   },
      //   employment_standards: {
      //     text:
      //       "Yes, as an employer, Employment Standards apply. Navigate along to learn more about Employment Standards or seek advice.",
      //     controls: {
      //       back: {
      //         label: "Back",
      //       },
      //       restart: {
      //         label: "Restart",
      //         primary: true,
      //       },
      //     },
      //   },
      //   worksafe_bc: {
      //     text:
      //       '<p><a href="https://www.worksafebc.com/" class="a--external">WorkSafeBC</a> is the organization primarily responsible for addressing issues concerning workplace health and safety. This includes injuries, illness, or other health and safety incidents.</p>\r\n<p><strong>You can:</strong></p>\r\n<p>- Visit <a href="https://www.worksafebc.com/" class="a--external">WorkSafeBC</a> to learn about workplace health and safety in B.C., to report an incident or to seek resolution</p>\r\n<p>- Contact the <a href="https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/personal-injury-and-workplace-safety">Workers\u2019 Advisers Office</a> if you disagree with a WorkSafeBC decision</p>',
      //     controls: {
      //       back: {
      //         label: "Back",
      //       },
      //       restart: {
      //         label: "Restart",
      //         primary: true,
      //       },
      //     },
      //   },
    },
  },
  {
    type: "hr",
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
