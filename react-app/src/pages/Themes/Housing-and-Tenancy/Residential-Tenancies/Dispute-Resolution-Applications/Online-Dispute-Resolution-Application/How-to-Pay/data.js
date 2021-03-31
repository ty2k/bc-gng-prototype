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
      href: "/under-construction",
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
    type: "on-this-page",
    title: "On this Page",
    children: [
      {
        id: "filing-fee",
        label: "Filing Fee",
      },
      {
        id: "pay-online",
        label: "Pay Online",
      },
      {
        id: "pay-in-person",
        label: "Pay in Person",
      },
      {
        id: "fee-waiver-for-tenants-with-low-income",
        label: "Fee Waiver for Tenants with Low Income",
      },
      {
        id: "related-services",
        label: "Related Services",
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
    type: "radio-button-group",
    id: "filing-fee",
    title: "I'm applying for an",
    children: [
      {
        id: "application-for-dispute-resolution",
        label: "Application for Dispute Resolution",
      },
      {
        id: "application-for-review-consideration",
        label: "Application for Review Considersation",
      },
      {
        id: "application-for-an-additional-rent-increase",
        label:
          "Application for an Additional Rent Increase (above the regular limit)",
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
        children: "The filing fee for a Dispute Resolution Application is $100",
      },
    ],
  },
  {
    type: "br",
  },
  {
    type: "h2",
    id: "pay-online",
    children: "Pay Online",
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "You may pay the filing fee online by:",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "- Credit card (Visa, Mastercard or American Express)",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "- Visa Debit",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "- MasterCard Debit",
      },
    ],
  },
  {
    type: "br",
  },
  {
    type: "h2",
    id: "pay-in-person",
    children: "Pay In Person",
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "You may pay the filing fee in person at a Service BC Office or Residential Tenancy Branch Office by:",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "- Cash",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "- Debit",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "- Credit card (Visa, Mastercard or American Express)",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "- Visa Debit",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "- MasterCard Debit",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "- Certified cheque payable to the Minister of Finance",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "- Residential Tenancy Branch Office only: Money order payable to the Minister of Finance",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "Make sure to bring your file number and your Dispute Access Code.",
      },
    ],
  },
  {
    type: "br",
  },
  {
    type: "h2",
    id: "fee-waiver-for-tenants-with-low-income",
    children: "Fee Waiver for Tenants with Low Income",
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "Applicants with very low income or who have extraordinary expenses that would make paying the filing fee a hardship can also apply to have the fee waived.",
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
        type: "text",
        style: "strong",
        children: "Low Income Tenants",
      },
      {
        type: "text",
        children:
          ": can apply for a fee waiver through the Online Application for Dispute Resolution or by submitting a paper Application to Waive Filing Fee (RTB-17)",
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
        type: "text",
        style: "strong",
        children: "Extraordinary Expenses",
      },
      {
        type: "text",
        children:
          ": landlords or tenants who have incurred extraordinary expenses within the past eight weeks that would make paying the filing fee a hardship, may submit a paper Application to Waive Filing Fee (RTB-17) for extraordinary expenses",
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
        type: "text",
        style: "strong",
        children: "Low Income Landlords",
      },
      {
        type: "text",
        children:
          ": can submit a paper Application to Waive Filing Fee (RTB-17)",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "If you are a landlord using the Online Application for Dispute Resolution, select that you will make your payment at our Burnaby Office or a Service BC Office and submit your fee waiver in person",
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
        children: "Application to Waive Filing Fee (PDF)",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "Note: Some applications must be submitted within a certain amount of time, like claims against the security deposit or to cancel a Notice to End Tenancy. You must submit proof of income for a fee waiver before the application deadline expires.",
      },
    ],
  },
  {
    type: "br",
  },
  {
    type: "h3",
    children: "Request to Waive Filing Fee due to Extraordinary Expenses",
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "If you are requesting a fee waiver because you have had extraordinary expenses that would make paying the filing fee a hardship, you must complete a paper Application to Waive Filing Fee (PDF) and submit it in person to any Service BC Office or the Residential Tenancy Branch Office in Burnaby.",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "You must provide proof of eligible hardship expenses such as:",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "- extraordinary medical expenses",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "- transportation costs for medically necessary procedures not available in your community",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "- funeral expenses",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "- costs associated with an emergency such as a fire, flood, earthquake, landslide or avalanche",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "a-internal",
        href: "/under-construction",
        children: "Learn more about fee waivers",
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
        "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/online-dispute-resolution-application/before-you-apply",
      backLabel: "Before You Apply",
      forwardHref:
        "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/online-dispute-resolution-application/how-to-apply",
      forwardLabel: "How to Apply",
    },
  },
  {
    type: "br",
  },
  {
    type: "h2",
    id: "related-services",
    children: "Related Services",
  },
  {
    type: "navigation",
    children: [
      {
        title: "",
        cards: [
          {
            title: "Complete a Paper Application",
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
                    children: "Learn how to complete a paper application",
                  },
                ],
              },
            ],
          },
          {
            title: "Apply for a Tenant Direct Request",
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
                      "Apply for a Monetary Order for return of a security deposit and/or a pet damage deposit.",
                  },
                ],
              },
            ],
          },
          {
            title: "Apply for a Landlord Direct Request",
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
                      "Apply for a Monetary Order for return of a security deposit and/or a pet damage deposit.",
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
  title: "How to Pay",
  description:
    "How to pay for a dispute resolution through the Residential Tenancy Branch.",
};

export { content, metadata };
