const content = [
  {
    type: "stepped-guide",
    callToAction: {
      label: "Order Now",
      href: "/under-construction",
    },
    children: [
      {
        label: "Overview",
        href:
          "/themes/education-and-training/k-12/support/transcripts-and-certificates/order-your-student-transcripts",
      },
      {
        label: "Eligibility",
        href:
          "/themes/education-and-training/k-12/support/transcripts-and-certificates/order-your-student-transcripts/eligibility",
      },
      {
        label: "Before You Start",
        href:
          "/themes/education-and-training/k-12/support/transcripts-and-certificates/order-your-student-transcripts/before-you-start",
      },
      {
        label: "Costs",
        href:
          "/themes/education-and-training/k-12/support/transcripts-and-certificates/order-your-student-transcripts/costs",
      },
      {
        label: "How to Order",
        href:
          "/themes/education-and-training/k-12/support/transcripts-and-certificates/order-your-student-transcripts/how-to-order",
      },
      {
        label: "After You Order",
        href:
          "/themes/education-and-training/k-12/support/transcripts-and-certificates/order-your-student-transcripts/after-you-order",
      },
    ],
  },
  {
    type: "br",
  },
  {
    type: "h2",
    id: "costs",
    children: "Costs",
  },
  {
    type: "h3",
    id: "are-you-a-current-student",
    children: "Are you a current student?",
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "You are a current student if you are enrolled in a secondary school or have completed a course within the last six months",
      },
    ],
  },
  {
    type: "radio-button-group",
    id: "current-student-radio-group",
    title: "",
    defaultContent: [
      {
        type: "h3",
        id: "default-current-students",
        children: "Current students",
      },
      {
        type: "p",
        children: [
          {
            type: "text",
            children: "As a current student, you get for free",
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
                      "up to 25 transcripts sent to post-secondary institutions on your behalf",
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
                      "one printed, mailed transcript sent to a third party (e.g. to yourself or an employer)",
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
                      "one graduation certificate from your school (once you have met graduation requirements)",
                  },
                ],
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
            children: "Any additional transcripts are $10 each.",
          },
        ],
      },
      {
        type: "br",
      },
      {
        type: "h3",
        id: "default-former-students",
        children: "Former students",
      },
      {
        type: "p",
        children: [
          {
            type: "text",
            children:
              "For former students, ordering transcripts and certificates are ",
          },
          {
            type: "text",
            style: "strong",
            children: "$10 each",
          },
          {
            type: "text",
            children:
              ". Once your request is received, you will be sent a confirmation e-mail.",
          },
        ],
      },
    ],
    children: [
      {
        id: "yes",
        label: "Yes",
        body: [
          {
            type: "h3",
            id: "current-students",
            children: "Current students",
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children: "As a current student, you get for free",
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
                          "up to 25 transcripts sent to post-secondary institutions on your behalf",
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
                          "one printed, mailed transcript sent to a third party (e.g. to yourself or an employer)",
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
                          "one graduation certificate from your school (once you have met graduation requirements)",
                      },
                    ],
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
                children: "Any additional transcripts are $10 each.",
              },
            ],
          },
        ],
      },
      {
        id: "no",
        label: "No",
        body: [
          {
            type: "h3",
            id: "former-students",
            children: "Former students",
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "For former students, ordering transcripts and certificates are ",
              },
              {
                type: "text",
                style: "strong",
                children: "$10 each",
              },
              {
                type: "text",
                children:
                  ". Once your request is received, you will be sent a confirmation e-mail.",
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
    type: "back-forward-button-pair",
    args: {
      backHref:
        "/themes/education-and-training/k-12/support/transcripts-and-certificates/order-your-student-transcripts/before-you-start",
      backLabel: "Before You Start",
      forwardHref:
        "/themes/education-and-training/k-12/support/transcripts-and-certificates/order-your-student-transcripts/how-to-order",
      forwardLabel: "How to Order",
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
            title:
              "Order a General Educational Development (GED®) transcript or certificate",
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
                      "Available if you completed the GED® tests from 1973 to 2014",
                  },
                ],
              },
            ],
          },
          {
            title: "Get your Personal Educations Number (PEN)",
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
                      "Not sure if you have a PEN? Find out if you have a PEN and the ways to find it",
                  },
                ],
              },
            ],
          },
          {
            title: "Contact your school of record or district office",
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
                      "If you last attended school between 1974-1985, contact your secondary school for your transcript or certificate",
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
    type: "br",
  },
  {
    type: "full-width-block",
    children: [
      {
        type: "h2",
        children: "Contact Us",
        id: "contact-the-rtb",
      },
      {
        type: "p",
        children: [
          {
            type: "text",
            children:
              "Can’t find what you are looking for? Do you have a question about the StudentTranscripts service?",
          },
        ],
      },
      {
        type: "p",
        children: [
          {
            type: "text",
            children:
              "Contact us Monday through Friday, 7:30am to 5pm Pacific Time",
          },
        ],
      },
      {
        type: "p",
        children: [
          {
            type: "svg",
            id: "comment-dots-solid.svg",
            args: {
              display: "inline-block",
              height: "20px",
              margin: "0 14px 0 0",
              width: "20px",
              "vertical-align": "text-bottom",
            },
          },
          {
            type: "text",
            style: "strong",
            children: "Text: ",
          },
          {
            type: "a-external",
            href: "tel:1-604-660-2421",
            children: "1-604-660-2421",
          },
        ],
      },
      {
        type: "p",
        children: [
          {
            type: "svg",
            id: "phone-solid.svg",
            args: {
              display: "inline-block",
              height: "20px",
              margin: "0 14px 0 0",
              width: "20px",
              "vertical-align": "text-bottom",
            },
          },
          {
            type: "text",
            style: "strong",
            children: "Victoria Office: ",
          },
          {
            type: "a-external",
            href: "tel:1-250-387-6121",
            children: "250-387-6121",
          },
        ],
      },
      {
        type: "p",
        children: [
          {
            type: "svg",
            id: "phone-solid.svg",
            args: {
              display: "inline-block",
              height: "20px",
              margin: "0 14px 0 0",
              width: "20px",
              "vertical-align": "text-bottom",
            },
          },
          {
            type: "text",
            style: "strong",
            children: "Vancouver Office: ",
          },
          {
            type: "a-external",
            href: "tel:1-604-660-2421",
            children: "604-660-2421",
          },
        ],
      },
      {
        type: "p",
        children: [
          {
            type: "svg",
            id: "phone-solid.svg",
            args: {
              display: "inline-block",
              height: "20px",
              margin: "0 14px 0 0",
              width: "20px",
              "vertical-align": "text-bottom",
            },
          },
          {
            type: "text",
            style: "strong",
            children: "Toll Free: ",
          },
          {
            type: "a-external",
            href: "tel:1-800-663-7867",
            children: "1-800-663-7867",
          },
        ],
      },
      {
        type: "p",
        children: [
          {
            type: "svg",
            id: "envelope-solid.svg",
            args: {
              display: "inline-block",
              height: "20px",
              margin: "0 14px 0 0",
              width: "20px",
              "vertical-align": "text-bottom",
            },
          },
          {
            type: "text",
            style: "strong",
            children: "Email: ",
          },
          {
            type: "a-external",
            href: "mailto:servicebc@gov.bc.ca",
            children: "servicebc@gov.bc.ca",
          },
        ],
      },
    ],
  },
  {
    type: "br",
  },
];

export { content };
