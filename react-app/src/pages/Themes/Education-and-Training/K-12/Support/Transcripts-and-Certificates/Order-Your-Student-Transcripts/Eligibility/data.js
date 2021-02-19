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
    type: "wizard",
    title: "Check if you are eligible",
    first: "intro",
    steps: {
      intro: {
        text:
          "Not all transcripts are available online through the StudentTranscript Service.",
        controls: {
          forward: {
            label: "Check Now",
            step: "grade1012bc",
            primary: true,
          },
        },
      },
      grade1012bc: {
        question_text: "Did you take any grade 10 to 12 courses in B.C.?",
        options: [
          {
            label: "Yes",
            id: "yes",
            next_step: "gradAfter1986",
          },
          {
            label: "No",
            id: "no",
            next_step: "notAvailable",
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
      gradAfter1986: {
        question_text: "Did you graduate high school after 1986?",
        options: [
          {
            label: "Yes",
            id: "yes",
            next_step: "available",
          },
          {
            label: "No",
            id: "no",
            next_step: "notAvailable",
          },
        ],
        controls: {
          back: {
            label: "Back",
            step: "grade1012bc",
          },
          forward: {
            label: "Next",
            primary: true,
          },
        },
      },
      available: {
        text:
          "<p><strong>Results</strong></p><p>Based on your answers, your transcripts and certificates are available online through the StudentTranscript Service.</p>",
        controls: {
          back: {
            label: "Back",
            step: "gradAfter1986",
          },
          restart: {
            label: "Restart",
            primary: true,
          },
        },
      },
      notAvailable: {
        text:
          "<p><strong>Results</strong></p><p>Based on your answers you will need to obtain your school record from the <a href='/under-construction'>school district office</a> or contact <a href='/under-construction'>your school of graduation</a>.</p>",
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
    type: "back-forward-button-pair",
    args: {
      backHref:
        "/themes/education-and-training/k-12/support/transcripts-and-certificates/order-your-student-transcripts",
      backLabel: "Overview",
      forwardHref:
        "/themes/education-and-training/k-12/support/transcripts-and-certificates/order-your-student-transcripts/before-you-start",
      forwardLabel: "Before You Start",
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
