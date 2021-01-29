const content = [
  {
    type: "table",
    id: "forms-table",
    data: {
      sortConfig: {
        id: "form-number",
        direction: "ascending",
      },
      filter: {
        initial: {
          "sort-forms-for": "all",
          "view-forms-by": "list",
        },
        children: [
          {
            id: "sort-forms-for",
            data: {
              legend: "Sort Forms for",
              name: "sort-forms-for",
              children: [
                {
                  id: "all",
                  label: "All",
                },
                {
                  id: "landlords",
                  label: "Landlords",
                },
                {
                  id: "tenants",
                  label: "Tenants",
                },
              ],
            },
          },
          {
            id: "view-forms-by",
            data: {
              legend: "View Forms by",
              name: "view-forms-by",
              children: [
                {
                  id: "type",
                  label: "Type",
                },
                {
                  id: "list",
                  label: "List",
                },
              ],
            },
          },
        ],
      },
      thead: {
        cols: [
          {
            id: "form",
            align: "left",
            label: "Form",
            width: "80",
          },
          {
            id: "form-number",
            align: "center",
            label: "Form Number",
            width: "20",
          },
        ],
      },
      tbody: [
        {
          cols: [
            {
              align: "left",
              children: [
                {
                  type: "p",
                  children: [
                    {
                      type: "a-internal",
                      href: "/under-construction",
                      children:
                        "Residential Tenancy Agreement for Internet Explorer",
                    },
                  ],
                },
                {
                  type: "p",
                  children: [
                    {
                      type: "text",
                      children: "(Last Updated: Oct-18) (PDF, 271 KB)",
                    },
                  ],
                },
                {
                  type: "more-info",
                  id: "more-info-form-rtb-1",
                  label: "More",
                  children: [
                    {
                      type: "p",
                      children: [
                        {
                          type: "text",
                          children:
                            "A Tenancy Agreement is a contract between a landlord and a tenant that outlines the terms of the tenancy - it's an important legal document. This Tenancy Agreement template accurately reflects the Residential Tenancy Act and is best viewed using Internet Explorer.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              align: "center",
              children: [
                {
                  type: "p",
                  style: "strong",
                  children: [
                    {
                      type: "a-internal",
                      href: "/under-construction",
                      children: "RTB-1",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          cols: [
            {
              align: "left",
              children: [
                {
                  type: "p",
                  children: [
                    {
                      type: "a-internal",
                      href: "/under-construction",
                      children:
                        "Residential Tenancy Agreement for other browsers",
                    },
                  ],
                },
                {
                  type: "p",
                  children: [
                    {
                      type: "text",
                      children: "(Last Updated: Oct-18) (PDF, 239 KB)",
                    },
                  ],
                },
                {
                  type: "more-info",
                  id: "more-info-form-rtb-1c",
                  label: "More",
                  children: [
                    {
                      type: "p",
                      children: [
                        {
                          type: "text",
                          children:
                            "A Tenancy Agreement is a contract between a landlord and a tenant that outlines the terms of the tenancy - it's an important legal document. This Tenancy Agreement template accurately reflects the Residential Tenancy Act and is best viewed using most browsers.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              align: "center",
              children: [
                {
                  type: "p",
                  style: "strong",
                  children: [
                    {
                      type: "a-internal",
                      href: "/under-construction",
                      children: "RTB-1C",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          cols: [
            {
              align: "left",
              children: [
                {
                  type: "p",
                  children: [
                    {
                      type: "a-internal",
                      href: "/under-construction",
                      children: "Application for Review Consideration",
                    },
                  ],
                },
                {
                  type: "p",
                  children: [
                    {
                      type: "text",
                      children: "(Last Updated: Jan-21) (PDF, 645 KB)",
                    },
                  ],
                },
                {
                  type: "more-info",
                  id: "more-info-form-rtb-2",
                  label: "More",
                  children: [
                    {
                      type: "p",
                      children: [
                        {
                          type: "text",
                          children:
                            "Use this form to apply for review of an arbitrator's order or decision.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              align: "center",
              children: [
                {
                  type: "p",
                  style: "strong",
                  children: [
                    {
                      type: "a-internal",
                      href: "/under-construction",
                      children: "RTB-2",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          cols: [
            {
              align: "left",
              children: [
                {
                  type: "p",
                  children: [
                    {
                      type: "a-internal",
                      href: "/under-construction",
                      children: "Manufactured Home Site Tenancy Agreement",
                    },
                  ],
                },
                {
                  type: "p",
                  children: [
                    {
                      type: "text",
                      children: "(Last Updated: Dec-17) (PDF, 163 KB)",
                    },
                  ],
                },
                {
                  type: "more-info",
                  id: "more-info-form-rtb-5",
                  label: "More",
                  children: [
                    {
                      type: "p",
                      children: [
                        {
                          type: "text",
                          children:
                            "A Manufactured Home Site Tenancy Agreement is a contract between a park owner and the manufactured home owner that outlines the terms of the tenancy for the site – it’s an important legal document. This Tenancy Agreement templates accurately reflect the Manufactured Home Park Tenancy Act and can be viewed in most browsers.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              align: "center",
              children: [
                {
                  type: "p",
                  style: "strong",
                  children: [
                    {
                      type: "a-internal",
                      href: "/under-construction",
                      children: "RTB-5",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          cols: [
            {
              align: "left",
              children: [
                {
                  type: "p",
                  children: [
                    {
                      type: "a-internal",
                      href: "/under-construction",
                      children: "Request for Correction",
                    },
                  ],
                },
                {
                  type: "p",
                  children: [
                    {
                      type: "text",
                      children: "(Last Updated: Jan-21) (PDF, 710 KB)",
                    },
                  ],
                },
                {
                  type: "more-info",
                  id: "more-info-form-rtb-6",
                  label: "More",
                  children: [
                    {
                      type: "p",
                      children: [
                        {
                          type: "text",
                          children:
                            "Use this form to request that an arbitrator correct any obvious error or inadvertent omission.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              align: "center",
              children: [
                {
                  type: "p",
                  style: "strong",
                  children: [
                    {
                      type: "a-internal",
                      href: "/under-construction",
                      children: "RTB-6",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
];

export { content };
