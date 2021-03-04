const content = [
  {
    type: "wizard",
    title: "Do Employment Standards apply to you?",
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
                  "Not every work issue, workplace or type is related to Employment Standards. We can help direct you to the right place with this quick questionnaire.",
              },
            ],
          },
        ],
        controls: {
          forward: {
            label: "Start the questionnaire",
            step: "start",
            primary: true,
          },
        },
      },
      start: {
        text: [
          {
            type: "p",
            children: [
              {
                type: "text",
                style: "strong",
                children:
                  "Please tell us how you would describe your work situation.",
              },
            ],
          },
        ],
        options: [
          {
            label: "I am an employee",
            id: "employee",
            next_step: "workplace_safety",
            text: [
              {
                type: "p",
                children: [
                  {
                    type: "text",
                    children:
                      "An employee is someone who receives money (or is owed money) for work performed. This includes someone who an employer allows to perform work that would normally be done by an employee.",
                  },
                ],
              },
            ],
          },
          {
            label: "I am an employer",
            id: "employer",
            next_step: "employment_standards",
            text: [
              {
                type: "p",
                children: [
                  {
                    type: "text",
                    children:
                      "An employer is someone who hires employees and is responsible for their employment. They have control over employees or provide instruction and/or direction to staff.",
                  },
                ],
              },
            ],
          },
          {
            label: "I am an independent contractor",
            id: "contractor",
            next_step: "workplace_safety",
            text: [
              {
                type: "p",
                children: [
                  {
                    type: "text",
                    children:
                      "An independent contractor is considered to be self-employed. Contractors are responsible for upholding workplace standards for their business.",
                  },
                ],
              },
            ],
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
      workplace_safety: {
        text: [
          {
            type: "p",
            children: [
              {
                type: "text",
                children: "Is your question or concern about workplace safety?",
              },
            ],
          },
        ],
        options: [
          {
            label: "Yes",
            id: "yes",
            next_step: "worksafe_bc",
          },
          {
            label: "No",
            id: "no",
            next_step: "worksafe_bc",
          },
        ],
        controls: {
          back: {
            label: "Back",
            next_step: "start",
          },
          forward: {
            label: "Next",
            primary: true,
          },
        },
      },
      employment_standards: {
        text: [
          {
            type: "p",
            children: [
              {
                type: "text",
                style: "strong",
                children: "Yes",
              },
              {
                type: "text",
                children:
                  ", as an employer, Employment Standards apply. Navigate along to learn more about Employment Standards or seek advice.",
              },
            ],
          },
        ],
        controls: {
          back: {
            label: "Back",
          },
          restart: {
            label: "Restart",
            primary: true,
          },
        },
      },
      worksafe_bc: {
        text: [
          {
            type: "p",
            children: [
              {
                type: "a-external",
                href: "https://www.worksafebc.com/",
                children: "WorkSafeBC",
              },
              {
                type: "text",
                children:
                  " is the organization primarily responsible for addressing issues concerning workplace health and safety. This includes injuries, illness, or other health and safety incidents.",
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                style: "strong",
                children: "You can:",
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children: "- Visit ",
              },
              {
                type: "a-external",
                href: "https://www.worksafebc.com/",
                children: "WorkSafeBC",
              },
              {
                type: "text",
                children:
                  " to learn about workplace health and safety in B.C., to report an incident or to seek resolution",
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children: "- Contact the ",
              },
              {
                type: "a-external",
                href:
                  "https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/personal-injury-and-workplace-safety",
                children: "Workers' Advisers Office",
              },
              {
                type: "text",
                children: " if you disagree with a WorkSafeBC decision",
              },
            ],
          },
        ],
        controls: {
          back: {
            label: "Back",
          },
          restart: {
            label: "Restart",
            primary: true,
          },
        },
      },
    },
  },
  {
    type: "navigation",
    search: {
      label: "Search Employment Standards",
    },
    children: [
      {
        id: "how-can-we-help-you",
        title: "How can we help you?",
        seeMoreLabel: "See More Topics",
        cards: [
          {
            title: "Hiring Employees",
            cardLink: {
              href:
                "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/",
              external: false,
            },
            links: [
              {
                href:
                  "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-domestic-workers",
                label: "Domestic workers",
              },
              {
                href: "/under-construction",
                label: "Farm Workers",
              },
              {
                href: "/under-construction",
                label: "Siviculture Workers",
              },
              {
                href:
                  "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-temporary-foreign-workers",
                label: "Hiring Temporary Foreign Workers",
              },
              {
                href:
                  "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-young-people",
                label: "Hiring Young People",
              },
            ],
          },
          {
            title: "Hours of Work & Overtime",
            cardLink: {
              href: "/under-construction",
              external: false,
            },
            links: [
              {
                href: "/under-construction",
                label: "Overtime Pay",
              },
              {
                href: "/under-construction",
                label: "Averaging Agreements",
              },
              {
                href: "/under-construction",
                label: "Variances",
              },
            ],
          },
          {
            title: "Statutory Holidays",
            cardLink: {
              href: "/under-construction",
              external: false,
            },
            links: [
              {
                href: "/under-construction",
                label: "Quality for statutory holiday pay",
              },
              {
                href: "/under-construction",
                label: "Calculate statuary holiday pay",
              },
            ],
          },
          {
            title: "Taking Time Off",
            cardLink: {
              href: "/under-construction",
              external: false,
            },
            links: [
              {
                href: "/under-construction",
                label: "Annual Vacation",
              },
              {
                href: "/under-construction",
                label: "Leaves of absence",
              },
              {
                href: "/under-construction",
                label: "Unexpected time off",
              },
              {
                href: "/under-construction",
                label: "Handling absences & other disruptions",
              },
            ],
          },
          {
            title: "Quit, Fired or Laid Off",
            cardLink: {
              href: "/under-construction",
              external: false,
            },
            links: [
              {
                href: "/under-construction",
                label: "Quitting or Getting Fired",
              },
              {
                href: "/under-construction",
                label: "Temporary Layoffs",
              },
              {
                href: "/under-construction",
                label: "Extend a COVID-19 temporary layoff",
              },
            ],
          },
          {
            title: "Getting Paid for Work",
            cardLink: {
              href: "/under-construction",
              external: false,
            },
            links: [
              {
                href: "/under-construction",
                label: "Minimum wage",
              },
              {
                href: "/under-construction",
                label: "Minimum wage daily pay",
              },
              {
                href: "/under-construction",
                label: "Deductions",
              },
              {
                href: "/under-construction",
                label: "Keeping records",
              },
              {
                href: "/under-construction",
                label: "Tips and gratuities",
              },
              {
                href: "/under-construction",
                label: "Uniforms & Special clothing",
              },
            ],
          },
          {
            title: "Forms & Resources",
            cardLink: {
              href:
                "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/forms-and-resources",
              external: false,
            },
            links: [
              {
                href: "/under-construction",
                label: "Education Seminars",
              },
              {
                href: "/under-construction",
                label: "Due diligence searches",
              },
              {
                href:
                  "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/forms-and-resources/guide-to-the-employment-standards-act",
                label: "Guide to the Employment Standards Act and Regulation",
              },
            ],
          },
          {
            title: "Specific Industries",
            cardLink: {
              href: "/under-construction",
              external: false,
            },
            description: [
              {
                type: "p",
                children: [
                  {
                    type: "text",
                    children:
                      "Find guidance, standards and regulations based on the industry and type of worker",
                  },
                ],
              },
            ],
          },
          {
            title: "Licensing",
            cardLink: {
              href: "/under-construction",
              external: false,
            },
            links: [
              {
                href: "/under-construction",
                label: "Employment agencies",
              },
              {
                href: "/under-construction",
                label: "Talent agencies",
              },
              {
                href: "/under-construction",
                label: "Farm labour contractors",
              },
            ],
          },
        ],
      },
      {
        id: "our-services",
        title: "Our Services",
        seeMoreLabel: "See More Services",
        cards: [
          {
            title: "Make a Complaint",
            cardLink: {
              href: "/under-construction",
              external: false,
            },
            description: [
              {
                type: "p",
                children: [
                  {
                    type: "text",
                    children: "Submit a complaint to resolve a problem at work",
                  },
                ],
              },
            ],
          },
          {
            title: "Ask a Question",
            cardLink: {
              href: "/under-construction",
              external: false,
            },
            description: [
              {
                type: "p",
                children: [
                  {
                    type: "text",
                    children:
                      "Ask a question or get help with an issue you’re having at work.",
                  },
                ],
              },
            ],
          },
          {
            title: "Register a Domestic Worker",
            cardLink: {
              href: "/under-construction",
              external: false,
            },
            description: [
              {
                type: "p",
                children: [
                  {
                    type: "text",
                    children:
                      "Follow the steps in registering a domestic worker",
                  },
                ],
              },
            ],
          },
          {
            title: "Apply for a temporary foreign worker recruiter’s license",
            cardLink: {
              href:
                "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-temporary-foreign-workers/apply-for-a-recruiters-license",
              external: false,
            },
            description: [
              {
                type: "p",
                children: [
                  {
                    type: "text",
                    children:
                      "Follow the steps to apply for a recruiter’s license",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export { content };
