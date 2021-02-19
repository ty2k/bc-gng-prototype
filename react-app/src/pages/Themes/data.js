const sections = [
  {
    id: "themes",
    title: "",
    seeMoreLabel: "See More Topics",
    cards: [
      {
        title: "Health",
        icon: "heart-solid.svg",
        cardLink: {
          href: "/under-construction",
          external: false,
        },
        links: [
          {
            href: "/under-construction",
            label: "MSP",
          },
          {
            href: "/under-construction",
            label: "PharmaCase for B.C. Residents",
          },
          {
            href: "/under-construction",
            label: "Health Forms",
          },
        ],
      },
      {
        title: "Our Governments & Relations",
        icon: "local-government.svg",
        cardLink: {
          href: "/under-construction",
          external: false,
        },
        links: [
          {
            href: "/under-construction",
            label: "Indigenous Peoples’ Relationship",
          },
          {
            href: "/under-construction",
            label: "BC Bid",
          },
          {
            href: "/under-construction",
            label: "BC Auction",
          },
        ],
      },
      {
        title: "Taxes & Tax Credits",
        icon: "dollar-sign-solid.svg",
        cardLink: {
          href: "/under-construction",
          external: false,
        },
        links: [
          {
            href: "/under-construction",
            label: "Provincial Sales Tax",
          },
          {
            href: "/under-construction",
            label: "Speculation and Vacancy Tax",
          },
          {
            href: "/under-construction",
            label: "Property Transfer Tax",
          },
        ],
      },
      {
        title: "Employment, Business & Economic Development",
        icon: "material-work.svg",
        cardLink: {
          href: "/themes/employment-business-and-economic-development/",
          external: false,
        },
        links: [
          {
            href: "/under-construction",
            label: "Financial Supports for COVID-19",
          },
          {
            href: "/under-construction",
            label: "Economic Development",
          },
          {
            href: "/under-construction",
            label: "Funding & Grants Changes for Societies",
          },
        ],
      },
      {
        title: "Family and Social Supports",
        icon: "hands-solid.svg",
        cardLink: {
          href: "/under-construction",
          external: false,
        },
        links: [
          {
            href: "/under-construction",
            label: "MCFD Supports & Response to COVID-19",
          },
          {
            href: "/under-construction",
            label: "Helpline for Children",
          },
          {
            href: "/under-construction",
            label: "Poverty Reduction Strategy",
          },
        ],
      },
      {
        title: "Public Safety & Emergency Services",
        icon: "ambulance.svg",
        cardLink: {
          href: "/under-construction",
          external: false,
        },
        links: [
          {
            href: "/under-construction",
            label: "Current Wildfire Activity",
          },
          {
            href: "/under-construction",
            label: "Criminal Record Checks",
          },
          {
            href: "/under-construction",
            label: "Cannabis",
          },
        ],
      },
      {
        title: "Education and Training",
        icon: "book-open-solid.svg",
        cardLink: {
          href: "/themes/education-and-training",
          external: false,
        },
        links: [
          {
            href:
              "/themes/education-and-training/k-12/support/transcripts-and-certificates",
            label: "Transcripts and Certificates",
          },
          {
            href: "/under-construction",
            label: "Blueprint Builder",
          },
        ],
      },
      {
        title: "Housing & Tenancy",
        icon: "home-solid.svg",
        cardLink: {
          href: "/themes/housing-and-tenancy",
          external: false,
        },
        links: [
          {
            href: "/themes/housing-and-tenancy/residential-tenancies",
            label: "Renting a Home",
          },
          {
            href: "/under-construction",
            label: "Living in a Strata",
          },
          {
            href: "/under-construction",
            label: "Home Owner Grant",
          },
        ],
      },
      {
        title: "Driving and Transporation",
        icon: "car-alt-solid.svg",
        cardLink: {
          href: "/under-construction",
          external: false,
        },
        links: [
          {
            href: "/under-construction",
            label: "Save Lives. Respect the Cone Zone",
          },
          {
            href: "/under-construction",
            label: "Intersection Safety Cameras",
          },
          {
            href: "/under-construction",
            label: "Commercial Transportation",
          },
        ],
      },
      {
        title: "Law, Crime & Justice",
        icon: "map-icons-lawyer.svg",
        cardLink: {
          href: "/under-construction",
          external: false,
        },
        links: [
          {
            href: "/under-construction",
            label: "Pay eTickets on PayBC",
          },
          {
            href: "/under-construction",
            label: "Intersection Safety Cameras",
          },
          {
            href: "/under-construction",
            label: "Daily Court Lists",
          },
        ],
      },
      {
        title: "Farming, Natural Resources & Industry",
        icon: "industry-solid.svg",
        cardLink: {
          href: "/under-construction",
          external: false,
        },
        links: [
          {
            href: "/under-construction",
            label: "BC Building Code",
          },
          {
            href: "/under-construction",
            label: "Site C Information & Updates",
          },
          {
            href: "/under-construction",
            label: "Start a Farm",
          },
        ],
      },
      {
        title: "Environmental Protection & Sustainability",
        icon: "leaf-solid.svg",
        cardLink: {
          href: "/under-construction",
          external: false,
        },
        links: [
          {
            href: "/under-construction",
            label: "BC Parks",
          },
          {
            href: "/under-construction",
            label: "B.C. Spill Response",
          },
          {
            href: "/under-construction",
            label: "Clean BC",
          },
        ],
      },
      {
        title: "Birth, Adoption, Death, Marriage and Identity",
        icon: "hand-holding-heart-solid.svg",
        cardLink: {
          href: "/under-construction",
          external: false,
        },
        links: [
          {
            href: "/under-construction",
            label: "Birth Registration & Birth Certificates",
          },
          {
            href: "/under-construction",
            label: "How to Get Married In BC",
          },
          {
            href: "/under-construction",
            label: "Legal Changes of Name",
          },
        ],
      },
      {
        title: "Sports, Recreation, Arts & Culture",
        icon: "ios-football.svg",
        cardLink: {
          href: "/under-construction",
          external: false,
        },
        links: [
          {
            href: "/under-construction",
            label: "Book Your Camping Reservation",
          },
          {
            href: "/under-construction",
            label: "Arts and Culture Funding",
          },
          {
            href: "/under-construction",
            label: "Sport Participation",
          },
        ],
      },
      {
        title: "Data",
        icon: "passport-solid.svg",
        cardLink: {
          href: "/under-construction",
          external: false,
        },
        links: [
          {
            href: "/under-construction",
            label: "Data Innovation Program",
          },
          {
            href: "/under-construction",
            label: "Integrated Land & Resource Registry",
          },
          {
            href: "/under-construction",
            label: "Highlight on Technology",
          },
        ],
      },
      {
        title: "Moving to B.C. & Tourism",
        icon: "plane-solid.svg",
        cardLink: {
          href: "/under-construction",
          external: false,
        },
        links: [
          {
            href: "/under-construction",
            label: "Get a B.C. Services Card",
          },
          {
            href: "/under-construction",
            label: "Moving to British Columbia",
          },
          {
            href: "/under-construction",
            label: "Travelling in B.C.",
          },
        ],
      },
    ],
  },
];

export { sections };
