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
      label: "Apply Online",
      href: "",
    },
    children: [
      {
        label: "Overview",
        href:
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/online-dispute-resolution-application",
      },
      {
        label: "Before You Apply",
        href:
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/online-dispute-resolution-application/before-you-apply",
      },
      {
        label: "How to Pay",
        href:
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/online-dispute-resolution-application/how-to-pay",
      },
      {
        label: "How to Apply",
        href:
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/online-dispute-resolution-application/how-to-apply",
      },
      {
        label: "After You Apply",
        href:
          "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/online-dispute-resolution-application/after-you-apply",
      },
    ],
  },
  {
    type: "br",
  },
  {
    type: "h2",
    id: "overview",
    children: "Overview",
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "Dispute resolution is the formal process for resolving disputes between landlords and tenants – it’s similar to a court proceeding.",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "Landlords and tenants can apply for dispute resolution when they can’t resolve a problem related to a tenancy.",
      },
    ],
  },
  {
    type: "radio-button-group",
    id: "dispute-resolution",
    title: "I'm a...",
    children: [
      {
        id: "tenant",
        label: "Tenant",
        body: [
          {
            type: "h3",
            children: "Common Reasons to apply for a dispute resolution",
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children: "- Dispute a Notice to End Tenancy",
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "- Have a landlord make repairs to the rental unit or property",
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "- Apply for compensation from a landlord for money owed or other tenancy-related issues",
              },
            ],
          },
          {
            type: "br",
          },
          {
            type: "h3",
            children: "Direct Requests",
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "When a tenancy ends and the landlord receives the tenant’s forwarding address in writing, the landlord has fifteen days to either return the outstanding deposit(s) or make an application to retain part or all of the deposit(s).",
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "If the landlord does nothing, tenants have an alternative option to get a Monetary Order. This is called a Direct Request.",
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
                children: "Learn How to Apply for a Tenant’s Direct Request",
                href: "/",
              },
            ],
          },
        ],
      },
      {
        id: "landlord",
        label: "Landlord",
        body: [
          {
            type: "h3",
            children: "Common Reasons to apply for a dispute resolution",
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "- Apply for an Order of Possession because a tenant hasn’t moved out when they should",
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "- Claim money from a tenant for unpaid rent or damages",
              },
            ],
          },
          {
            type: "br",
          },
          {
            type: "h3",
            children: "Direct Requests",
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "When a tenant receives a 10 Day Notice to End Tenancy for Unpaid Rent or Utilities, they have five days to either pay the overdue amount or dispute it. If the tenant does nothing, landlords have an alternative option to get an Order of Possession. This is called a Landlord Direct Request.",
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "A landlord can use a Direct Request to claim for an order of possession when a tenant hasn’t paid their rent or utilities and a monetary order for unpaid rent or utilities or payment of the filing fee.",
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
                children: "Learn How to Apply for a Landlord’s Direct Request",
                href: "/",
              },
            ],
          },
        ],
      },
      {
        id: "respondent",
        label: "Respondent",
        body: [
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "As a respondent, you’d have received a Notice of Dispute Resolution Hearing Package with a Dispute Access Code. With that you can add your evidence online though the Dispute Access Site.",
              },
            ],
          },
          {
            type: "button-link",
            children: "Dispute Access Site",
            external: false,
            href: "/",
            primary: true,
          },
          {
            type: "br",
          },
        ],
      },
    ],
  },
  {
    type: "back-forward-button-pair",
    args: {
      backHref: "",
      backLabel: "",
      forwardHref:
        "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/online-dispute-resolution-application/before-you-apply",
      forwardLabel: "Before You Apply",
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
            title: "Complete a Paper Application",
            description: "Learn how to complete a paper application",
          },
          {
            title: "Service BC",
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
        href: "/",
        primary: true,
      },
    ],
  },
  {
    type: "br",
  },
];

export { content };
