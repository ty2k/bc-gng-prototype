const sections = [
  {
    title: "How can we help you?",
    cards: [
      {
        title: "Hiring Employees",
        links: [
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees",
            label: "Domestic workers",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees",
            label: "Farm Workers",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees",
            label: "Siviculture Workers",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees",
            label: "Temporary Foreign Workers",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees",
            label: "Young People",
          },
        ],
      },
      {
        title: "Hours of Work & Overtime",
        links: [
          {
            href: "/",
            label: "Overtime Pay",
          },
          {
            href: "/",
            label: "Averaging Agreements",
          },
          {
            href: "/",
            label: "Variances",
          },
        ],
      },
      {
        title: "Statutory Holidays",
        links: [
          {
            href: "/",
            label: "Quality for statutory holiday pay",
          },
          {
            href: "/",
            label: "Calculate statuary holiday pay",
          },
        ],
      },
      {
        title: "Taking Time Off",
        links: [
          {
            href: "/",
            label: "Annual Vacation",
          },
          {
            href: "/",
            label: "Leaves of absence",
          },
          {
            href: "/",
            label: "Unexpected time off",
          },
          {
            href: "/",
            label: "Handling absences & other disruptions",
          },
        ],
      },
      {
        title: "Quit, Fired or Laid Off",
        links: [
          {
            href: "/",
            label: "Quitting or Getting Fired",
          },
          {
            href: "/",
            label: "Temporary Layoffs",
          },
          {
            href: "/",
            label: "Extend a COVID-19 temporary layoff",
          },
        ],
      },
      {
        title: "Getting Paid for Work",
        links: [
          {
            href: "/",
            label: "Minimum wage",
          },
          {
            href: "/",
            label: "Minimum wage daily pay",
          },
          {
            href: "/",
            label: "Deductions",
          },
          {
            href: "/",
            label: "Keeping records",
          },
          {
            href: "/",
            label: "Tips and gratuities",
          },
          {
            href: "/",
            label: "Uniforms & Special clothing",
          },
        ],
      },
      {
        title: "Forms & Resources",
        links: [
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/forms-and-resources",
            label: "Guide to the Employment Standards Act and Regulation",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/forms-and-resources",
            label: "Education Seminars",
          },
          {
            href:
              "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/forms-and-resources",
            label: "Due diligence searches",
          },
        ],
      },
      {
        title: "Specific Industries",
        description:
          "Find guidance, standards and regulations based on the industry and type of worker",
      },
      {
        title: "Licensing",
        links: [
          {
            href: "/",
            label: "Employment agencies",
          },
          {
            href: "/",
            label: "Talent agencies",
          },
          {
            href: "/",
            label: "Farm labour contractors",
          },
        ],
      },
    ],
  },
  {
    title: "Our Services",
    cards: [
      {
        title: "Make a Complaint",
        description: "Submit a complaint to resolve a problem at work",
      },
      {
        title: "Ask a Question",
        description:
          "Ask a question or get help with an issue you’re having at work.",
      },
      {
        title: "Register a Domestic Worker",
        description: "Follow the steps in registering a domestic worker",
      },
      {
        title: "Apply for a temporary foreign worker recruiter’s license",
        description: "Follow the steps to apply for a recruiter’s license",
        cardLink: {
          href:
            "/themes/employment-business-and-economic-development/employment-standards-and-workplace-safety/employment-standards/hiring-employees/hiring-temporary-foreign-workers/apply-for-a-recruiters-license",
          external: false,
        },
      },
    ],
  },
];

const content = [
  {
    type: "wizard",
    title: "Do Employment Standards apply to you?",
    first: "intro",
    steps: {
      intro: {
        text:
          "Not every work issue, workplace or type is related to Employment Standards. We can help direct you to the right place with this quick questionnaire.",
        controls: {
          forward: {
            label: "Start the questionnaire",
            step: "start",
            primary: true,
          },
        },
      },
      start: {
        question_text:
          "Please tell us how you would describe your work situation.",
        options: [
          {
            label: "I am an employee",
            id: "employee",
            next_step: "workplace_safety",
            text:
              "An employee is someone who receives money (or is owed money) for work performed. This includes someone who an employer allows to perform work that would normally be done by an employee.",
          },
          {
            label: "I am an employer",
            id: "employer",
            next_step: "employment_standards",
            text:
              "An employer is someone who hires employees and is responsible for their employment. They have control over employees or provide instruction and/or direction to staff.",
          },
          {
            label: "I am an independent contractor",
            id: "contractor",
            next_step: "workplace_safety",
            text:
              "An independent contractor is considered to be self-employed. Contractors are responsible for upholding workplace standards for their business.",
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
        question_text: "Is your question or concern about workplace safety?",
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
        text:
          "Yes, as an employer, Employment Standards apply. Navigate along to learn more about Employment Standards or seek advice.",
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
        text:
          '<p><a href="https://www.worksafebc.com/" class="a--external">WorkSafeBC</a> is the organization primarily responsible for addressing issues concerning workplace health and safety. This includes injuries, illness, or other health and safety incidents.</p>\r\n<p><strong>You can:</strong></p>\r\n<p>- Visit <a href="https://www.worksafebc.com/" class="a--external">WorkSafeBC</a> to learn about workplace health and safety in B.C., to report an incident or to seek resolution</p>\r\n<p>- Contact the <a href="https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/personal-injury-and-workplace-safety">Workers\u2019 Advisers Office</a> if you disagree with a WorkSafeBC decision</p>',
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
];

export { sections, content };
