import HowToPay from "../../Online-Dispute-Resolution-Application/How-to-Pay";

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
      href: "",
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
    type: "h2",
    id: "before-you-apply",
    children: "Before You Apply",
  },
  {
    type: "on-this-page",
    title: "On this Page",
    children: [
      {
        id: "know-your-issues",
        label: "Know Your Issues",
      },
      {
        id: "check-your-deadlines-and-calculations",
        label: "Check Your Deadlines and Calculations",
      },
      {
        id: "register-for-a-basic-bceid",
        label: "Register for a Basic BCeID",
      },
      {
        id: "gather-required-documents",
        label: "Gather Required Documents",
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
    id: "know-your-issues",
    children: "Know Your Issues",
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "In order to apply for a Direct Request, the tenant must first make sure that the landlord has not already applied to keep part or all of their deposit(s). If the landlord had applied for dispute resolution to retain part or all of the deposit(s) – the tenant may file a cross-application for dispute resolution.",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "Additionally, a tenant may not seek the return of deposit(s) or the portion of the deposits where:",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "There is an outstanding order from the director allowing the landlord to retain the deposit(s) or a portion of the deposits; or",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "The tenant has agreed in writing to let the landlord keep the deposit(s) or a portion of the deposit(s).",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "For example, if the tenant provided a $500 security deposit to the landlord and agreed in writing to allow the landlord to retain $100 dollars, then the tenant is only eligible to seek the return of the remaining $400 amount. The tenant may not make a claim for the $100 dollars that they had previously agreed to let the landlord keep.",
      },
    ],
  },
  {
    type: "br",
  },
  {
    type: "h2",
    id: "check-your-deadlines-and-calculations",
    children: "Check Your Deadlines and Calculations",
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "Different types of disputes can have different application deadlines. Make sure you meet important deadlines and that your calculations are correct. Use the calculators to help you figure out timelines to file for dispute or how much the rent can be increase… and more!",
      },
    ],
  },
  {
    type: "button-link",
    children: "Try the Online Calculators",
    external: "false",
    href: "/",
    primary: true,
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "If it’s close to the deadline for applying, it’s best to submit your application and complete payment online or submit your application in person to a Service BC Office or the Burnaby Residential Tenancy Branch Office.",
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
              "Your application is not considered to be made until you have submitted your application and paid the filing fee or submitted documents for a fee waiver.",
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
    id: "register-for-a-basic-bceid",
    children: "Register for a Basic BCeID",
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "You will need a Basic BCeID account to access the Online Application for Dispute Resolution. A Basic BCeID account provides secure access to online government services.",
      },
    ],
  },
  {
    type: "button-link",
    children: "Register for a Basic BCeID",
    external: "true",
    href: "https://www.bceid.ca/register/",
    primary: true,
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "- ",
      },
      {
        type: "a-external",
        href: "https://www.bceid.ca/aboutbceid/privacy_policy.aspx",
        children: "BCeID Privacy Policy",
      },
      {
        type: "text",
        children: " (external link)",
      },
    ],
  },
  {
    type: "br",
  },
  {
    type: "h2",
    id: "gather-required-documents",
    children: "Gather Required Documents",
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "The tenant must submit the following documents with their application when applying in-person or when using the online application (applications without these documents will be scheduled for a regular hearing):",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "- A copy of the completed Tenant’s Direct Request Worksheet (",
      },
      {
        type: "a-internal",
        href: "/",
        children: "form RTB-40",
      },
      {
        type: "text",
        children: ")",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "- A copy of the forwarding address given to the landlord (",
      },
      {
        type: "a-internal",
        href: "/",
        children: "form RTB-47",
      },
      {
        type: "text",
        children:
          " is recommended, but not required) or a copy of the condition inspection report with the forwarding address provided",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "- A copy of the completed Proof of Service of Forwarding Address (",
      },
      {
        type: "a-internal",
        href: "/",
        children: "form RTB-41",
      },
      {
        type: "text",
        children: ")",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "- A copy of the signed tenancy agreement (including the addendum if there is one)",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "- If a pet damage deposit was accepted after the tenancy began, a receipt for the pet damage deposit",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "- Any other documents that support the application",
      },
    ],
  },
  {
    type: "br",
  },
  {
    type: "br",
  },
  {
    type: "back-forward-button-pair",
    args: {
      backHref:
        "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/online-dispute-resolution-application/",
      backLabel: "Overview",
      forwardHref:
        "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/online-dispute-resolution-application/before-you-apply",
      forwardLabel: "Before You Apply",
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
        // TODO: Navigation should be able to take id's to link to
        // title: "Related Links",
        cards: [
          {
            title: "Follow the Rules",
            description:
              "Dispute resolution is a formal process – it’s a lot like going to court. Both the landlord and the tenant need to know and follow the Residential Tenancy Branch Rules of Procedure (PDF).",
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
        external: "false",
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
