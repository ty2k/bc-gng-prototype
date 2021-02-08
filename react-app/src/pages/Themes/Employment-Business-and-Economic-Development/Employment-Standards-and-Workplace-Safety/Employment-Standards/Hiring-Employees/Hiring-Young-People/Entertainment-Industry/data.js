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
            step: "age",
            primary: true,
          },
        },
      },
      age: {
        question_text: "How old is the child?",
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
        question_text:
          "Is the young person working in the entertainment industry?",
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
        text:
          "The information below has been curated to match your selections.",
        controls: {
          restart: {
            label: "Restart",
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
        id: "employers-need-permission",
        label: "Employers Need Permission",
      },
      {
        id: "dont-leave-your-child-unsupervised",
        label: "Don’t leave your child unsupervised",
      },
      {
        id: "the-role-of-parents-or-guardians",
        label: "The Role of parents or guardians",
      },
      {
        id: "hours-of-work",
        label: "Hours of Work",
      },
      {
        id: "children-under-three-years-old",
        label: "Children under three years old",
      },
      {
        id: "working-with-a-talent-agency",
        label: "Working with a talent agency",
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
    type: "p",
    children: [
      {
        type: "text",
        style: "strong",
        children:
          "To hire a child under the age of four for live entertainment",
      },
      {
        type: "text",
        children:
          ", employers need to complete an Application of Employer for Child’s Permit of Employment (PDF, 32.2KB). The child’s parent or guardian and school authority also complete sections of the application form. Send the application and a copy of the child’s birth certificate to the Victoria Employment Standards Branch office.",
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
        children: ", the ratio of children to supervising adults is: ",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "- One child per adult for children aged 15 days to under 6 years old",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "- Three children per adult for children aged 6 to under 12 years old",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "- Five children per adult for children aged 12 to 15 years old",
      },
    ],
  },
  {
    type: "br",
  },
];

export { content };
