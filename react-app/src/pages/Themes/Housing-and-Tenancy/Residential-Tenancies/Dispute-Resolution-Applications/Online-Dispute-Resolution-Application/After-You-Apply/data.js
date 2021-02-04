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
        id: "whats-my-application-status",
        label: "What's my application status?",
      },
      {
        id: "what-does-my-dispute-status-mean",
        label: "What does my dispute status mean?",
      },
      {
        id: "email-notifications",
        label: "Email notifications",
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
    type: "h2",
    id: "whats-my-application-status",
    children: "What's my application status?",
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "Want to know the status of your application? Check any time on the Dispute Access Site. All you need is your Dispute Access Code and your name.",
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
              "Your Dispute Access Code is provided to you when you submit your application or if you are the respondent, in the Notice of Dispute Resolution Proceeding served to you by the other party.",
          },
        ],
      },
    ],
  },
  {
    type: "button-link",
    children: "Visit Dispute Access Site",
    external: false,
    href: "/under-construction",
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
        type: "a-internal",
        href: "/under-construction",
        children: "View existing applications",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "If you submitted an online application before September 23, 2017, you can contact the Residential Tenancy Branch for questions, changes or to receive a copy of your application.",
      },
    ],
  },
  {
    type: "br",
  },
  {
    type: "h2",
    id: "what-does-my-dispute-status-mean",
    children: "What does my dispute status mean?",
  },
  // TODO: Simple table goes here
  {
    type: "p",
    children: [
      {
        type: "text",
        style: "strong",
        children: "Application Status",
      },
      {
        type: "text",
        style: "strong",
        children: " .......... ",
      },
      {
        type: "text",
        style: "strong",
        children: "What does it mean?",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "Abandoned applicant inaction",
      },
      {
        type: "text",
        children: " .......... ",
      },
      {
        type: "text",
        children:
          "The applicant did not make a required update to their application",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "Abandoned no payment",
      },
      {
        type: "text",
        children: " .......... ",
      },
      {
        type: "text",
        children:
          "The application has been abandoned because the application fee was not paid",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "Assessing Application",
      },
      {
        type: "text",
        children: " .......... ",
      },
      {
        type: "text",
        children:
          "The application has been received and is being assessed by the Residential Tenancy Branch",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "Cancelled",
      },
      {
        type: "text",
        children: " .......... ",
      },
      {
        type: "text",
        children:
          "Dispute has been cancelled by the Residential Tenancy Branch",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "Clarification pending",
      },
      {
        type: "text",
        children: " .......... ",
      },
      {
        type: "text",
        children:
          "A clarification to a decision or order is being made by an arbitrator or adjudicator",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "Closed",
      },
      {
        type: "text",
        children: " .......... ",
      },
      {
        type: "text",
        children:
          "No further action on the file is required. The file is closed",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "Closed for submissions",
      },
      {
        type: "text",
        children: " .......... ",
      },
      {
        type: "text",
        children: "Evidence submissions are no longer accepted from any party",
      },
    ],
  },
  {
    type: "br",
  },
  {
    type: "h2",
    id: "email-notifications",
    children: "Email Notifications",
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children:
          "You will receive email notifications with status updates and reminders about your application.",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "If you don’t see these reminders:",
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
        href: "mailto:donotreply@tenancydispute.gov.bc.ca",
        children: "donotreply@tenancydispute.gov.bc.ca",
      },
      {
        type: "text",
        children: " to your contacts or safe senders",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        type: "text",
        children: "- check your junk mail folder",
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
        "/themes/housing-and-tenancy/residential-tenancies/dispute-resolution-applications/online-dispute-resolution-application/how-to-apply",
      backLabel: "How to Apply",
      forwardHref: "",
      forwardLabel: "",
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

export { content };
