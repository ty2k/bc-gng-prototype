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
    type: "br",
  },
  {
    type: "stepped-guide",
    callToAction: {
      label: "Apply",
      href: "/under-construction",
    },
    children: [
      {
        label: "Overview",
        href:
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/tenant-direct-request",
      },
      {
        label: "Before You Apply",
        href:
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/tenant-direct-request/before-you-apply",
      },
      {
        label: "How to Apply",
        href:
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/tenant-direct-request/how-to-apply",
      },
      {
        label: "Application Fee",
        href:
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/tenant-direct-request/application-fee",
      },
      {
        label: "What's next?",
        href:
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/tenant-direct-request/whats-next",
      },
    ],
  },
  {
    type: "br",
  },
  {
    type: "on-this-page",
    title: "On this Page",
    children: [
      {
        id: "apply-online",
        label: "Apply Online",
      },
      {
        id: "complete-a-paper-application",
        label: "Complete a Paper Application",
      },
      {
        id: "related-links",
        label: "Related Links",
      },
      {
        id: "contact-the-rtb",
        label: "Contact the Residential Tenancy Branch",
      },
    ],
  },
  {
    type: "br",
  },
  {
    type: "h2",
    id: "apply-online",
    children: "Apply Online",
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "Do you have everything ready to apply online? Let’s get started.",
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
              "Before starting an application, please make sure your internet browser is up to date.",
          },
        ],
      },
    ],
  },
  {
    type: "button-link",
    children: "Apply Online",
    external: false,
    href: "/under-construction",
    primary: true,
  },
  {
    type: "br",
  },
  {
    type: "h2",
    id: "complete-a-paper-application",
    children: "Complete a Paper Application",
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "Not able to apply online? No problem.",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "While applying online is the fastest, easiest way to apply, you may complete a paper application and submit it in person at any ",
      },
      {
        type: "a-internal",
        href: "/under-construction",
        children: "Service BC Office",
      },
      {
        type: "text",
        children: " or the ",
      },
      {
        type: "a-internal",
        href: "/under-construction",
        children: "Residential Tenancy Branch Office in Burnaby",
      },
      {
        type: "text",
        children: ".",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "- Learn ",
      },
      {
        type: "a-internal",
        href: "/under-construction",
        children: "how to complete a paper application",
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
        "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/tenant-direct-request/before-you-apply",
      backLabel: "Before You Apply",
      forwardHref:
        "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/tenant-direct-request/application-fee",
      forwardLabel: "Application Fee",
    },
  },
  {
    type: "br",
  },
  {
    type: "h2",
    id: "related-links",
    children: "Related Links",
  },
  {
    type: "navigation",
    children: [
      {
        cards: [
          {
            title: "Follow the Rules",
            cardLink: {
              href: "/under-construction",
              external: false,
            },
            description:
              "Dispute resolution is a formal process – it’s a lot like going to court. Both the landlord and the tenant need to know and follow the Residential Tenancy Branch Rules of Procedure (PDF).",
          },
          {
            title: "Service BC",
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
                    children: "Want an in-person experience?",
                  },
                ],
              },
              {
                type: "p",
                children: [
                  {
                    type: "text",
                    children: "Find your nearest Service BC location",
                  },
                ],
              },
            ],
          },
          {
            title: "Forms",
            cardLink: {
              href: "/themes/housing-and-tenancy/residential-tenancies/forms",
              external: false,
            },
            description: "Find all tenancy forms",
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
        children: "Contact the Residential Tenancy Branch",
        id: "contact-the-rtb",
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
        type: "button-link",
        children: "Contact the Branch",
        external: false,
        href: "/under-construction",
        primary: true,
      },
    ],
  },
  {
    type: "br",
  },
];

const metadata = {
  title: "How to Apply",
  description: "How to apply for a Tenant's Direct Request application.",
};

export { content, metadata };
