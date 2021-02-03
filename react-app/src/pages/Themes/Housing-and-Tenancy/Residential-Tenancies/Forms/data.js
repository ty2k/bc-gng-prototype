const content = [
  {
    type: "table-group",
    id: "forms-table",
    data: {
      sortConfig: {
        id: "form-number",
        direction: "ascending",
      },
      filter: {
        initial: {
          "sort-forms-for": "all",
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
        ],
      },
      view: {
        initial: {
          "view-forms-by": "list",
        },
        children: [
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
      children: [
        {
          view: {
            "view-forms-by": "list",
          },
          body: [
            {
              type: "table",
              id: "rtb-forms-view-by-list",
              data: {
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
                    filter: {
                      "sort-forms-for": ["all", "landlords", "tenants"],
                    },
                    view: {
                      "view-forms-by": ["list"],
                    },
                    cols: [
                      {
                        colId: "form",
                        align: "left",
                        sort:
                          "Residential Tenancy Agreement for Internet Explorer",
                        children: [
                          {
                            type: "p",
                            children: [
                              {
                                type: "a-internal",
                                style: "strong",
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
                                children:
                                  "(Last Updated: Oct-18) (PDF, 271 KB)",
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
                        colId: "form-number",
                        align: "center",
                        sort: "RTB-1",
                        children: [
                          {
                            type: "p",
                            style: "strong",
                            children: [
                              {
                                type: "a-internal",
                                style: "strong",
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
                    filter: {
                      "sort-forms-for": ["all", "landlords", "tenants"],
                      "view-forms-by": ["list"],
                    },
                    cols: [
                      {
                        colId: "form",
                        align: "left",
                        sort:
                          "Residential Tenancy Agreement for other browsers",
                        children: [
                          {
                            type: "p",
                            children: [
                              {
                                type: "a-internal",
                                style: "strong",
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
                                children:
                                  "(Last Updated: Oct-18) (PDF, 239 KB)",
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
                        colId: "form-number",
                        align: "center",
                        sort: "RTB-1C",
                        children: [
                          {
                            type: "p",
                            style: "strong",
                            children: [
                              {
                                type: "a-internal",
                                style: "strong",
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
                    filter: {
                      "sort-forms-for": ["all", "landlords", "tenants"],
                      "view-forms-by": ["list"],
                    },
                    cols: [
                      {
                        colId: "form",
                        align: "left",
                        sort: "Application for Review Consideration",
                        children: [
                          {
                            type: "p",
                            children: [
                              {
                                type: "a-internal",
                                style: "strong",
                                href: "/under-construction",
                                children:
                                  "Application for Review Consideration",
                              },
                            ],
                          },
                          {
                            type: "p",
                            children: [
                              {
                                type: "text",
                                children:
                                  "(Last Updated: Jan-21) (PDF, 645 KB)",
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
                        colId: "form-number",
                        align: "center",
                        sort: "RTB-2",
                        children: [
                          {
                            type: "p",
                            style: "strong",
                            children: [
                              {
                                type: "a-internal",
                                style: "strong",
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
                    filter: {
                      "sort-forms-for": ["all", "landlords", "tenants"],
                      "view-forms-by": ["list"],
                    },
                    cols: [
                      {
                        colId: "form",
                        align: "left",
                        sort: "Manufactured Home Site Tenancy Agreement",
                        children: [
                          {
                            type: "p",
                            children: [
                              {
                                type: "a-internal",
                                style: "strong",
                                href: "/under-construction",
                                children:
                                  "Manufactured Home Site Tenancy Agreement",
                              },
                            ],
                          },
                          {
                            type: "p",
                            children: [
                              {
                                type: "text",
                                children:
                                  "(Last Updated: Dec-17) (PDF, 163 KB)",
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
                        colId: "form-number",
                        align: "center",
                        sort: "RTB-5",
                        children: [
                          {
                            type: "p",
                            style: "strong",
                            children: [
                              {
                                type: "a-internal",
                                style: "strong",
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
                    filter: {
                      "sort-forms-for": ["all", "landlords", "tenants"],
                      "view-forms-by": ["list"],
                    },
                    cols: [
                      {
                        colId: "form",
                        align: "left",
                        sort: "Request for Correction",
                        children: [
                          {
                            type: "p",
                            children: [
                              {
                                type: "a-internal",
                                style: "strong",
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
                                children:
                                  "(Last Updated: Jan-21) (PDF, 710 KB)",
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
                        colId: "form-number",
                        align: "center",
                        sort: "RTB-6",
                        children: [
                          {
                            type: "p",
                            style: "strong",
                            children: [
                              {
                                type: "a-internal",
                                style: "strong",
                                href: "/under-construction",
                                children: "RTB-6",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    filter: {
                      "sort-forms-for": ["all", "landlords"],
                      "view-forms-by": ["list"],
                    },
                    cols: [
                      {
                        colId: "form",
                        align: "left",
                        sort:
                          "Notice of Rent Increase - Residential Rental Units",
                        children: [
                          {
                            type: "p",
                            children: [
                              {
                                type: "a-internal",
                                style: "strong",
                                href: "/under-construction",
                                children:
                                  "Notice of Rent Increase - Residential Rental Units",
                              },
                            ],
                          },
                          {
                            type: "p",
                            children: [
                              {
                                type: "text",
                                children:
                                  "(Last Updated: Jan-21) (PDF, 1.7 MB)",
                              },
                            ],
                          },
                          {
                            type: "more-info",
                            id: "more-info-form-rtb-7",
                            label: "More",
                            children: [
                              {
                                type: "p",
                                children: [
                                  {
                                    type: "text",
                                    children:
                                      "Landlords must use this form to notify tenants of rent increases.",
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
                                    style: "strong",
                                    children:
                                      "***Due to the State of Emergency the rent increase will not come into effect until July 10, 2021.",
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        colId: "form-number",
                        align: "center",
                        sort: "RTB-7",
                        children: [
                          {
                            type: "p",
                            style: "strong",
                            children: [
                              {
                                type: "a-internal",
                                style: "strong",
                                href: "/under-construction",
                                children: "RTB-7",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    filter: {
                      "sort-forms-for": ["all", "landlords", "tenants"],
                      "view-forms-by": ["list"],
                    },
                    cols: [
                      {
                        colId: "form",
                        align: "left",
                        sort: "Mutual Agreement to End a Tenancy",
                        children: [
                          {
                            type: "p",
                            children: [
                              {
                                type: "a-internal",
                                style: "strong",
                                href: "/under-construction",
                                children: "Mutual Agreement to End a Tenancy",
                              },
                            ],
                          },
                          {
                            type: "p",
                            children: [
                              {
                                type: "text",
                                children:
                                  "(Last Updated: Apr-19) (PDF, 539 KB)",
                              },
                            ],
                          },
                          {
                            type: "more-info",
                            id: "more-info-form-rtb-8",
                            label: "More",
                            children: [
                              {
                                type: "p",
                                children: [
                                  {
                                    type: "text",
                                    children:
                                      "Use this form when both parties agree to end a tenancy.",
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        colId: "form-number",
                        align: "center",
                        sort: "RTB-8",
                        children: [
                          {
                            type: "p",
                            style: "strong",
                            children: [
                              {
                                type: "a-internal",
                                style: "strong",
                                href: "/under-construction",
                                children: "RTB-8",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    filter: {
                      "sort-forms-for": ["all", "landlords", "tenants"],
                      "view-forms-by": ["list"],
                    },
                    cols: [
                      {
                        colId: "form",
                        align: "left",
                        sort: "Proof of Service Notice of Expedited Hearing",
                        children: [
                          {
                            type: "p",
                            children: [
                              {
                                type: "a-internal",
                                style: "strong",
                                href: "/under-construction",
                                children:
                                  "Proof of Service Notice of Expedited Hearing",
                              },
                            ],
                          },
                          {
                            type: "p",
                            children: [
                              {
                                type: "text",
                                children: "(Last Updated: May-19) (PDF, 586 B)",
                              },
                            ],
                          },
                          {
                            type: "more-info",
                            id: "more-info-form-rtb-9",
                            label: "More",
                            children: [
                              {
                                type: "p",
                                children: [
                                  {
                                    type: "text",
                                    children:
                                      "This document is used to prove service of the Expedited Hearing Proceeding Package.",
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        colId: "form-number",
                        align: "center",
                        sort: "RTB-9",
                        children: [
                          {
                            type: "p",
                            style: "strong",
                            children: [
                              {
                                type: "a-internal",
                                style: "strong",
                                href: "/under-construction",
                                children: "RTB-9",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    filter: {
                      "sort-forms-for": ["all", "tenants"],
                      "view-forms-by": ["list"],
                    },
                    cols: [
                      {
                        colId: "form",
                        align: "left",
                        sort:
                          "Request for Consent to Assign a Manufactured Home Site Tenancy Agreement",
                        children: [
                          {
                            type: "p",
                            children: [
                              {
                                type: "a-internal",
                                style: "strong",
                                href: "/under-construction",
                                children:
                                  "Request for Consent to Assign a Manufactured Home Site Tenancy Agreement",
                              },
                            ],
                          },
                          {
                            type: "p",
                            children: [
                              {
                                type: "text",
                                children: "(Last Updated: Sept-14) (PDF)",
                              },
                            ],
                          },
                          {
                            type: "more-info",
                            id: "more-info-form-rtb-10",
                            label: "More",
                            children: [
                              {
                                type: "p",
                                children: [
                                  {
                                    type: "text",
                                    children:
                                      "Manufactured home owners can use this form to request the park owner’s consent to assign your site tenancy agreement to the purchaser of your manufactured home.",
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        colId: "form-number",
                        align: "center",
                        sort: "RTB-10",
                        children: [
                          {
                            type: "p",
                            style: "strong",
                            children: [
                              {
                                type: "a-internal",
                                style: "strong",
                                href: "/under-construction",
                                children: "RTB-10",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    filter: {
                      "sort-forms-for": ["all", "landlords"],
                      "view-forms-by": ["list"],
                    },
                    cols: [
                      {
                        colId: "form",
                        align: "left",
                        sort:
                          "Notice of Rent Increase - Manufactured Home Site - (auto-calculating version)",
                        children: [
                          {
                            type: "p",
                            children: [
                              {
                                type: "a-internal",
                                style: "strong",
                                href: "/under-construction",
                                children:
                                  "Notice of Rent Increase - Manufactured Home Site - (auto-calculating version)",
                              },
                            ],
                          },
                          {
                            type: "p",
                            children: [
                              {
                                type: "text",
                                children: "(PDF, 282 KB)",
                              },
                            ],
                          },
                          {
                            type: "more-info",
                            id: "more-info-form-rtb-11A",
                            label: "More",
                            children: [
                              {
                                type: "p",
                                children: [
                                  {
                                    type: "text",
                                    children:
                                      "Manufactured home park landlords must use this form to notify tenants of rent increases above the standard amount.",
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
                                        type: "text",
                                        children:
                                          "Check the bottom of page one of form RTB-11A to be sure that you have the correct version (if an older version shows, clear your browser cache)",
                                      },
                                    ],
                                  },
                                  {
                                    type: "li",
                                    children: [
                                      {
                                        type: "text",
                                        children:
                                          "Please note that RTB-11A is only compatible with Internet Explorer and Google Chrome browsers.",
                                      },
                                    ],
                                  },
                                  {
                                    type: "li",
                                    children: [
                                      {
                                        type: "text",
                                        children:
                                          "The form will not work with FireFox or Microsoft Edge.*",
                                      },
                                    ],
                                  },
                                  {
                                    type: "li",
                                    children: [
                                      {
                                        type: "text",
                                        children:
                                          "Please ensure you have an updated version of either Internet Explorer or Google Chrome downloaded in order to properly view and use the form.",
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
                                    style: "strong",
                                    children:
                                      "***Due to the State of Emergency the rent increase will not come into effect until July 10, 2021.",
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        colId: "form-number",
                        align: "center",
                        sort: "RTB-11A",
                        children: [
                          {
                            type: "p",
                            style: "strong",
                            children: [
                              {
                                type: "a-internal",
                                style: "strong",
                                href: "/under-construction",
                                children: "RTB-11A",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    filter: {
                      "sort-forms-for": ["all", "landlords"],
                      "view-forms-by": ["list"],
                    },
                    cols: [
                      {
                        colId: "form",
                        align: "left",
                        sort:
                          "Landlord Application for Dispute Resolution - Current Tenancy",
                        children: [
                          {
                            type: "p",
                            children: [
                              {
                                type: "a-internal",
                                style: "strong",
                                href: "/under-construction",
                                children:
                                  "Landlord Application for Dispute Resolution - Current Tenancy",
                              },
                            ],
                          },
                          {
                            type: "p",
                            children: [
                              {
                                type: "text",
                                children:
                                  "(Last Updated: Jan-21) (PDF, 978 KB)",
                              },
                            ],
                          },
                          {
                            type: "more-info",
                            id: "more-info-form-rtb-12l-ct",
                            label: "More",
                            children: [
                              {
                                type: "p",
                                children: [
                                  {
                                    type: "text",
                                    children:
                                      "Landlords with tenants who are currently living in the unit can use this form to apply for dispute resolution in order to resolve a residential tenancy dispute.",
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        colId: "form-number",
                        align: "center",
                        sort: "RTB-12L-CT",
                        children: [
                          {
                            type: "p",
                            style: "strong",
                            children: [
                              {
                                type: "a-internal",
                                style: "strong",
                                href: "/under-construction",
                                children: "RTB-12L-CT",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    filter: {
                      "sort-forms-for": ["all", "landlords"],
                      "view-forms-by": ["list"],
                    },
                    cols: [
                      {
                        colId: "form",
                        align: "left",
                        sort:
                          "Landlord Application for Dispute Resolution - Past Tenancy",
                        children: [
                          {
                            type: "p",
                            children: [
                              {
                                type: "a-internal",
                                style: "strong",
                                href: "/under-construction",
                                children:
                                  "Landlord Application for Dispute Resolution - Past Tenancy",
                              },
                            ],
                          },
                          {
                            type: "p",
                            children: [
                              {
                                type: "text",
                                children:
                                  "(Last Updated: Jan-21) (PDF, 976 KB)",
                              },
                            ],
                          },
                          {
                            type: "more-info",
                            id: "more-info-form-rtb-12l-pt",
                            label: "More",
                            children: [
                              {
                                type: "p",
                                children: [
                                  {
                                    type: "text",
                                    children:
                                      "Landlords with tenants who are no longer living in the unit can use this form to apply for dispute resolution in order to resolve a residential tenancy dispute.",
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        colId: "form-number",
                        align: "center",
                        sort: "RTB-12L-PT",
                        children: [
                          {
                            type: "p",
                            style: "strong",
                            children: [
                              {
                                type: "a-internal",
                                style: "strong",
                                href: "/under-construction",
                                children: "RTB-12L-PT",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    filter: {
                      "sort-forms-for": ["all", "tenants"],
                      "view-forms-by": ["list"],
                    },
                    cols: [
                      {
                        colId: "form",
                        align: "left",
                        sort:
                          "Tenant Application for Dispute Resolution - Current Tenancy",
                        children: [
                          {
                            type: "p",
                            children: [
                              {
                                type: "a-internal",
                                style: "strong",
                                href: "/under-construction",
                                children:
                                  "Tenant Application for Dispute Resolution - Current Tenancy",
                              },
                            ],
                          },
                          {
                            type: "p",
                            children: [
                              {
                                type: "text",
                                children:
                                  "(Last Updated: Jan-21) (PDF, 1250 KB)",
                              },
                            ],
                          },
                          {
                            type: "more-info",
                            id: "more-info-form-rtb-12t-ct",
                            label: "More",
                            children: [
                              {
                                type: "p",
                                children: [
                                  {
                                    type: "text",
                                    children:
                                      "Tenants who are currently living in the unit where the dispute took place can use this form to apply for dispute resolution in order to resolve a residential tenancy dispute.",
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        colId: "form-number",
                        align: "center",
                        sort: "RTB-12T-CT",
                        children: [
                          {
                            type: "p",
                            style: "strong",
                            children: [
                              {
                                type: "a-internal",
                                style: "strong",
                                href: "/under-construction",
                                children: "RTB-12T-CT",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    filter: {
                      "sort-forms-for": ["all", "tenants"],
                      "view-forms-by": ["list"],
                    },
                    cols: [
                      {
                        colId: "form",
                        align: "left",
                        sort:
                          "Tenant Application for Dispute Resolution - Past Tenancy",
                        children: [
                          {
                            type: "p",
                            children: [
                              {
                                type: "a-internal",
                                style: "strong",
                                href: "/under-construction",
                                children:
                                  "Tenant Application for Dispute Resolution - Past Tenancy",
                              },
                            ],
                          },
                          {
                            type: "p",
                            children: [
                              {
                                type: "text",
                                children:
                                  "(Last Updated: Jan-21) (PDF, 1250 KB)",
                              },
                            ],
                          },
                          {
                            type: "more-info",
                            id: "more-info-form-rtb-12t-pt",
                            label: "More",
                            children: [
                              {
                                type: "p",
                                children: [
                                  {
                                    type: "text",
                                    children:
                                      "Tenants who no longer live in the unit where the dispute started can use this form to apply for dispute resolution in order to resolve a residential tenancy dispute.",
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        colId: "form-number",
                        align: "center",
                        sort: "RTB-12T-PT",
                        children: [
                          {
                            type: "p",
                            style: "strong",
                            children: [
                              {
                                type: "a-internal",
                                style: "strong",
                                href: "/under-construction",
                                children: "RTB-12T-PT",
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
          ],
        },
        {
          view: {
            "view-forms-by": "type",
          },
          body: [
            {
              type: "accordion",
              id: "rtb-forms-accordion-general-forms",
              title: "General Forms",
              children: [],
            },
            {
              type: "accordion",
              id: "rtb-forms-accordion-other-general-forms",
              title: "Other General Forms",
              children: [],
            },
            {
              type: "accordion",
              id: "rtb-forms-accordion-dispute-resolution-forms-standard",
              title: "Dispute Resolution Forms - Standard",
              childTable: {
                id: "rtb-forms-view-by-type",
                data: {
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
                      filter: {
                        "sort-forms-for": ["all", "landlords", "tenants"],
                      },
                      view: {
                        "view-forms-by": ["type"],
                      },
                      cols: [
                        {
                          align: "left",
                          children: [
                            {
                              type: "p",
                              children: [
                                {
                                  type: "a-internal",
                                  style: "strong",
                                  href: "/under-construction",
                                  children:
                                    "Proof of Service Notice of Expedited Hearing",
                                },
                              ],
                            },
                            {
                              type: "p",
                              children: [
                                {
                                  type: "text",
                                  children:
                                    "(Last Updated: May-19) (PDF, 586 B)",
                                },
                              ],
                            },
                            {
                              type: "more-info",
                              id: "more-info-form-rtb-9",
                              label: "More",
                              children: [
                                {
                                  type: "p",
                                  children: [
                                    {
                                      type: "text",
                                      children:
                                        "This document is used to prove service of the Expedited Hearing Proceeding Package.",
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
                                  style: "strong",
                                  href: "/under-construction",
                                  children: "RTB-9",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      filter: {
                        "sort-forms-for": ["all", "landlords"],
                        "view-forms-by": ["type"],
                      },
                      cols: [
                        {
                          align: "left",
                          children: [
                            {
                              type: "p",
                              children: [
                                {
                                  type: "a-internal",
                                  style: "strong",
                                  href: "/under-construction",
                                  children:
                                    "Landlord Application for Dispute Resolution - Current Tenancy",
                                },
                              ],
                            },
                            {
                              type: "p",
                              children: [
                                {
                                  type: "text",
                                  children:
                                    "(Last Updated: Jan-21) (PDF, 978 KB)",
                                },
                              ],
                            },
                            {
                              type: "more-info",
                              id: "more-info-form-rtb-12l-ct",
                              label: "More",
                              children: [
                                {
                                  type: "p",
                                  children: [
                                    {
                                      type: "text",
                                      children:
                                        "Landlords with tenants who are currently living in the unit can use this form to apply for dispute resolution in order to resolve a residential tenancy dispute.",
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
                                  style: "strong",
                                  href: "/under-construction",
                                  children: "RTB-12L-CT",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      filter: {
                        "sort-forms-for": ["all", "landlords"],
                        "view-forms-by": ["type"],
                      },
                      cols: [
                        {
                          align: "left",
                          children: [
                            {
                              type: "p",
                              children: [
                                {
                                  type: "a-internal",
                                  style: "strong",
                                  href: "/under-construction",
                                  children:
                                    "Landlord Application for Dispute Resolution - Past Tenancy",
                                },
                              ],
                            },
                            {
                              type: "p",
                              children: [
                                {
                                  type: "text",
                                  children:
                                    "(Last Updated: Jan-21) (PDF, 976 KB)",
                                },
                              ],
                            },
                            {
                              type: "more-info",
                              id: "more-info-form-rtb-12l-pt",
                              label: "More",
                              children: [
                                {
                                  type: "p",
                                  children: [
                                    {
                                      type: "text",
                                      children:
                                        "Landlords with tenants who are no longer living in the unit can use this form to apply for dispute resolution in order to resolve a residential tenancy dispute.",
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
                                  style: "strong",
                                  href: "/under-construction",
                                  children: "RTB-12L-PT",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      filter: {
                        "sort-forms-for": ["all", "tenants"],
                        "view-forms-by": ["type"],
                      },
                      cols: [
                        {
                          align: "left",
                          children: [
                            {
                              type: "p",
                              children: [
                                {
                                  type: "a-internal",
                                  style: "strong",
                                  href: "/under-construction",
                                  children:
                                    "Tenant Application for Dispute Resolution - Current Tenancy",
                                },
                              ],
                            },
                            {
                              type: "p",
                              children: [
                                {
                                  type: "text",
                                  children:
                                    "(Last Updated: Jan-21) (PDF, 1250 KB)",
                                },
                              ],
                            },
                            {
                              type: "more-info",
                              id: "more-info-form-rtb-12t-ct",
                              label: "More",
                              children: [
                                {
                                  type: "p",
                                  children: [
                                    {
                                      type: "text",
                                      children:
                                        "Tenants who are currently living in the unit where the dispute took place can use this form to apply for dispute resolution in order to resolve a residential tenancy dispute.",
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
                                  style: "strong",
                                  href: "/under-construction",
                                  children: "RTB-12T-CT",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      filter: {
                        "sort-forms-for": ["all", "tenants"],
                        "view-forms-by": ["type"],
                      },
                      cols: [
                        {
                          align: "left",
                          children: [
                            {
                              type: "p",
                              children: [
                                {
                                  type: "a-internal",
                                  style: "strong",
                                  href: "/under-construction",
                                  children:
                                    "Tenant Application for Dispute Resolution - Past Tenancy",
                                },
                              ],
                            },
                            {
                              type: "p",
                              children: [
                                {
                                  type: "text",
                                  children:
                                    "(Last Updated: Jan-21) (PDF, 1250 KB)",
                                },
                              ],
                            },
                            {
                              type: "more-info",
                              id: "more-info-form-rtb-12t-pt",
                              label: "More",
                              children: [
                                {
                                  type: "p",
                                  children: [
                                    {
                                      type: "text",
                                      children:
                                        "Tenants who no longer live in the unit where the dispute started can use this form to apply for dispute resolution in order to resolve a residential tenancy dispute.",
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
                                  style: "strong",
                                  href: "/under-construction",
                                  children: "RTB-12T-PT",
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
            },
            {
              type: "accordion",
              id: "rtb-forms-accordion-dispute-resolution-forms-standard",
              title: "Dispute Resolution Forms - Direct Request",
              children: [],
            },
            {
              type: "accordion",
              id: "rtb-forms-accordion-dispute-resolution-forms-standard",
              title: "Forms to End Tenancy",
              children: [],
            },
          ],
        },
      ],
    },
  },
  {
    type: "br",
  },
];

export { content };
