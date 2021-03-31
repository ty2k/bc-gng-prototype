const content = [
  {
    type: "wizard",
    title: "Curate your information",
    first: "intro",
    steps: {
      intro: {
        text: [
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "Rules are different depending on the situation and the age of the young person being hired. Let us take you through a short questionnaire to show only relevant information for you.",
              },
            ],
          },
        ],
        controls: {
          forward: {
            label: "Start the questionnaire",
            step: "age",
            primary: true,
          },
        },
      },
      age: {
        text: [
          {
            type: "p",
            children: [
              {
                type: "text",
                style: "strong",
                children: "How old is the child?",
              },
            ],
          },
        ],
        options: [
          {
            label: "Under 6 years old",
            id: "under-6-years-old",
            next_step: "entertainmentIndustry",
          },
          {
            label: "Under 12 years",
            id: "under-12-years",
            next_step: "entertainmentIndustry",
          },
          {
            label: "12-14 years",
            id: "12-to-14-years",
            next_step: "entertainmentIndustry",
          },
          {
            label: "15 years or older",
            id: "15-years-or-older",
            next_step: "entertainmentIndustry",
          },
        ],
        controls: {
          back: {
            label: "Back",
            step: "intro",
          },
          forward: {
            label: "Next",
            primary: true,
          },
        },
      },
      entertainmentIndustry: {
        text: [
          {
            type: "p",
            children: [
              {
                type: "text",
                style: "strong",
                children:
                  "Is the young person working in the entertainment industry?",
              },
            ],
          },
        ],
        options: [
          {
            label: "Yes",
            id: "yes",
            next_step: "end",
          },
          {
            label: "No",
            id: "no",
            next_step: "end",
          },
        ],
        controls: {
          back: {
            label: "Back",
            step: "age",
          },
          forward: {
            label: "Next",
            primary: true,
          },
        },
      },
      end: {
        text: [
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "The information below has been curated to match your selections.",
              },
            ],
          },
        ],
        conditionalText: [
          {
            displayState: {
              age: "12-to-14-years",
              entertainmentIndustry: "yes",
            },
            contentArray: [
              {
                type: "p",
                children: [
                  {
                    type: "text",
                    children: "View below information relevant to:",
                  },
                ],
              },
              {
                type: "p",
                children: [
                  {
                    type: "text",
                    children: "A child at the age of ",
                  },
                  {
                    type: "text",
                    style: "strong",
                    children: "12 -14 years old",
                  },
                  {
                    type: "text",
                    children: " working in the ",
                  },
                  {
                    type: "text",
                    style: "strong",
                    children: "entertainment industry",
                  },
                ],
              },
            ],
          },
        ],
        controls: {
          restart: {
            label: "Restart",
            primary: true,
          },
        },
      },
    },
    defaultContent: [
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
                            href: "/under-construction",
                            children:
                              "employment standards for regular employees",
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
                            href: "/under-construction",
                            children:
                              "WorkSafeBC requirements for young workers",
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
                            href: "/under-construction",
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
                    href: "/under-construction",
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
                    children: "Children who are 12 to 14 years old cannot:",
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
                            children:
                              "Work more than four hours on school days",
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
            body: [
              {
                type: "p",
                children: [
                  {
                    type: "text",
                    children: "Employers need to complete an ",
                  },
                  {
                    type: "a-internal",
                    href: "/under-construction",
                    children:
                      "Application of Employer for Child’s Permit of Employment (PDF, 32.2KB)",
                  },
                  {
                    type: "text",
                    children:
                      ". The child’s parent or guardian and school authority also complete sections of the application form.",
                  },
                ],
              },
              {
                type: "p",
                children: [
                  {
                    type: "text",
                    children:
                      "Send the application and a copy of the child’s birth certificate to the ",
                  },
                  {
                    type: "a-internal",
                    href: "/under-construction",
                    children: "Victoria Employment Standards Branch office",
                  },
                  {
                    type: "text",
                    children: ".",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    contentBlocks: [
      {
        displayState: {
          age: "12-to-14-years",
          entertainmentIndustry: "yes",
        },
        contentArray: [
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
                id: "rules-hiring-ages-12-14",
                label: "Rules Hiring Ages 12-14",
              },
              {
                id: "specific-rules-hiring-for-the-entertainment-industry",
                label: "Specific rules Hiring for the Entertainment Industry",
              },
              {
                id: "employers-need-permission",
                label: "Employers Need Permission",
              },
              {
                id: "dont-leave-your-child-unsupervised",
                label: "Don't leave your children unsupervised",
              },
              {
                id: "hours-of-work",
                label: "Hours of work",
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
            id: "rules-hiring-ages-12-14",
            children: "Rules Hiring Ages 12-14",
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
            type: "br",
          },
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
                href: "/under-construction",
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
                children: "Children who are 12 to 14 years old cannot:",
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
          {
            type: "br",
          },
          {
            type: "h2",
            id: "specific-rules-hiring-for-the-entertainment-industry",
            children: "Specific Rule Hiring for the Entertainment Industry",
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "Special employment conditions are outlined for children that work in the entertainment industry because they may be very young and will likely work during school hours. If a young person works in the entertainment industry, but in a position other than an actor, background performer or extra, the general rules for employing young people apply.",
              },
            ],
          },
          {
            type: "br",
          },
          {
            type: "h2",
            id: "employers-need-permission",
            children: "Employers Need Permission",
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children: "Employers need written ",
              },
              {
                type: "a-internal",
                href: "/under-construction",
                children: "consent from a parent or guardian (PDF, 30 KB)",
              },
              {
                type: "text",
                children:
                  " to hire a young person as an actor, performer (including background performer) or extra for film, radio, video, television, theatre, dance, music, opera or circus performances.",
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "The employer (via the assistant director, casting director or talent agent) should explain to the parent or guardian what the role of their child will be.",
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
                href: "/under-construction",
                children:
                  "Children in the Recorded Entertainment Industry - Part 7.1 Division 2",
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
                href: "/under-construction",
                children:
                  "Children in the Live Entertainment Industry - Part 7.1 Division 3",
              },
            ],
          },
          {
            type: "br",
          },
          {
            type: "h2",
            id: "dont-leave-your-child-unsupervised",
            children: "Don't Leave Your Children Unsupervised",
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "One of the child’s parents or guardians should be present to supervise the child at all times. If the parent can’t be present, an adult (over 19 years old) can be assigned as the child’s chaperone. The chaperone needs written permission from a parent or guardian that authorizes them to make decisions on behalf of the child. The chaperone cannot be the child’s employer, tutor, or an employee of the employer or tutor.",
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "The supervising adult should be present on the set within sight and sound of the child. The employer can provide an audio and visual monitor when filming scenes.",
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                style: "strong",
                children: "For live entertainment",
              },
              {
                type: "text",
                children:
                  ", up to three children can be assigned to one adult that is also working as an extra or background performer on the same production set. ",
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                style: "strong",
                children: "For recorded entertainment",
              },
              {
                type: "text",
                children:
                  ", the ratio of children to supervising adults is five children per adult for children aged 12 to 15 years old.",
              },
            ],
          },
          {
            type: "br",
          },
          {
            type: "h2",
            id: "hours-of-work",
            children: "Hours of Work",
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "Work hours include time spent doing hair, makeup, wardrobe or fittings. Split shifts are not allowed. Children cannot work more than five days per week.",
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                style: "strong",
                children: "Work begins at call time",
              },
              {
                type: "text",
                children:
                  ". The workday starts at the child’s call time or when they’re required to start work. The earliest work can start is 5 am.",
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                style: "strong",
                children: "Work ends at wrap time",
              },
              {
                type: "text",
                children:
                  ". The end of the workday is when the young person is no longer wearing makeup or a costume. It may include travel time or time spent waiting for transportation. The latest a child can work is 10 pm if the next day is a school day or 12:30 am if the next day is not a school day. If school is not in session a child can work until 2 a.m.",
              },
            ],
          },
          {
            type: "br",
          },
          {
            type: "table-basic",
            id: "esb-hiring-young-people-hours",
            data: {
              thead: [
                {
                  id: "age",
                  label: "Age",
                  colspan: 1,
                  align: "left",
                  width: "20",
                },
                {
                  id: "maximum-hours-of-work",
                  label: "Maximum hours of work",
                  colspan: 1,
                  align: "left",
                  width: "30",
                },
                {
                  id: "time-before-camera",
                  label: "Time before camera",
                  colspan: 1,
                  align: "left",
                  width: "50",
                },
              ],
              tbody: [
                {
                  cols: [
                    {
                      id: "age",
                      colspan: 1,
                      align: "left",
                      children: [
                        {
                          type: "text",
                          children: "12-14 years old",
                        },
                      ],
                    },
                    {
                      id: "maximum-hours-of-work",
                      colspan: 1,
                      align: "left",
                      children: [
                        {
                          type: "text",
                          children: "10 hours per day",
                        },
                      ],
                    },
                    {
                      id: "time-before-camera",
                      colspan: 1,
                      align: "left",
                      children: [
                        {
                          type: "text",
                          children:
                            "A minimum break of 10 minutes for every 60 consecutive minutes",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
          {
            type: "br",
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

const metadata = {
  title: "Hiring Young People",
  description:
    "The Employment Standards Branch administers the Employment Standards Act and Regulation, which set minimum standards of wages and working conditions for youth.",
};

export { content, metadata };
