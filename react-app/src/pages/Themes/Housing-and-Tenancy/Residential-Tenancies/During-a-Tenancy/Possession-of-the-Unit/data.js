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
    type: "br",
  },
  {
    type: "radio-button-group",
    id: "dispute-resolution",
    title: "I'm a...",
    defaultContent: [
      {
        type: "p",
        children: [
          {
            type: "on-this-page",
            title: "On this Page",
            children: [
              {
                id: "default-overview",
                label: "Overview",
              },
              {
                id: "default-your-rights",
                label: "Your Rights",
              },
              {
                id: "default-locks",
                label: "Locks",
              },
              {
                id: "default-enforcing-possession",
                label: "Enforcing Possession",
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
        ],
      },
      {
        type: "h2",
        id: "default-overview",
        children: "Overview",
      },
      {
        type: "p",
        children: [
          {
            type: "text",
            children:
              "Possession in residential tenancies refers to the right of a landlord or a tenant to use and enjoy the property.",
          },
        ],
      },
      {
        type: "p",
        children: [
          {
            type: "text",
            children:
              "A tenancy agreement protects the rights and responsibilities of landlords and tenants – if either party doesn’t respect the rights of the other, they may lose some of their rights. ",
          },
          {
            type: "a-internal",
            href: "/under-construction",
            children: "Dispute resolution",
          },
          {
            type: "text",
            children:
              " may be required if either party doesn’t meet their responsibilities or negatively affects the rights of the other.",
          },
        ],
      },
      {
        type: "br",
      },
      {
        type: "h2",
        id: "default-your-rights",
        children: "Your Rights",
      },
      {
        type: "tabbed-content",
        children: [
          {
            label: "Tenant Rights",
            body: [
              {
                type: "p",
                children: [
                  {
                    type: "text",
                    children:
                      "Possession for tenants means the right to exclusive, or sole possession and quiet enjoyment – reasonable privacy and freedom from unreasonable disturbance or significant interference with their use of the rental property. The landlord can’t restrict the tenant’s quiet enjoyment – they must:",
                  },
                ],
              },
              {
                type: "p",
                children: [
                  {
                    type: "text",
                    children: "Provide all essential services",
                  },
                ],
              },
              {
                type: "p",
                children: [
                  {
                    type: "text",
                    children:
                      "- Keep the rental unit and all non-essential services / facilities in a state of good repair",
                  },
                ],
              },
              {
                type: "p",
                children: [
                  {
                    type: "text",
                    children:
                      "- Quickly deal with problems and noise issues that interfere with the tenant’s quiet enjoyment",
                  },
                ],
              },
              {
                type: "p",
                children: [
                  {
                    type: "text",
                    children:
                      "- At the tenant’s request, change the locks at the beginning of tenancy (or provide new keys to the tenant if the locks must be changed during the tenancy)",
                  },
                ],
              },
              {
                type: "p",
                children: [
                  {
                    type: "text",
                    children:
                      "- Not enter the areas of the property that the agreement says are for the exclusive use of the tenant, except under certain conditions",
                  },
                ],
              },
            ],
          },
          {
            label: "Landlord Rights",
            body: [
              {
                type: "p",
                children: [
                  {
                    type: "p",
                    children: [
                      {
                        type: "text",
                        children:
                          "A landlord does not require notice to enter any common areas that are shared with others tenants like hallways, courtyards and laundry facilities. However, proper notice is required if a landlord wants to enter a rental unit.",
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
                        children: "See the process required for landlords",
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
        type: "h2",
        id: "default-locks",
        children: "Locks",
      },
      {
        type: "p",
        children: [
          {
            type: "text",
            children:
              "The landlord must give each tenant a key to the rental unit (and building, if applicable) at no cost. The landlord should keep a copy of all keys for emergency access.",
          },
        ],
      },
      {
        type: "p",
        children: [
          {
            type: "text",
            children:
              "The landlord must change the rental unit locks or other access system if a tenant makes the request at the beginning of a new tenancy and if the locks weren’t changed at the end of the last tenancy. The landlord must pay for these costs.",
          },
        ],
      },
      {
        type: "p",
        children: [
          {
            type: "text",
            children:
              "A tenant can’t change locks on their rental unit without the landlord’s written permission. If there’s a problem, tenants can use the dispute resolution process through the Residential Tenancy Branch to get an order to change the locks.",
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
            children: "Apply for permission to change the locks",
          },
        ],
      },
      {
        type: "p",
        children: [
          {
            type: "text",
            children:
              "Tenants should note that if they change the locks without permission:",
          },
        ],
      },
      {
        type: "p",
        children: [
          {
            type: "text",
            children:
              "1. If they’re not home during an emergency, emergency personnel or the landlord may remove the door to access the unit making the tenant responsible for any related repairs or costs needed to put the door back in place.",
          },
        ],
      },
      {
        type: "p",
        children: [
          {
            type: "text",
            children:
              "2. The landlord can give written notice requiring the tenant to change the locks back within a specific, but reasonable, period of time. In some cases, the tenant may just need to give the landlord keys to the new locks – this only works if the lock isn’t keyed to a master key. If the tenant doesn’t do so, the landlord can apply for dispute resolution.",
          },
        ],
      },
      {
        type: "br",
      },
      {
        type: "h2",
        id: "default-enforcing-possession",
        children: "Enforcing Possession",
      },
      {
        type: "p",
        children: [
          {
            type: "text",
            children:
              "The landlord must serve a proper notice to end a tenancy if there’s cause for doing so – like not paying rent on time or causing damage or interference with the landlord’s rights. If the notice is not disputed, the landlord must follow the legal process to have the tenant removed from the property. If not, the process may have to be restarted and the tenant can seek compensation.",
          },
        ],
      },
      {
        type: "p",
        children: [
          {
            type: "text",
            children: "A tenant ",
          },
          {
            type: "a-internal",
            href: "/under-construction",
            children: "can apply for dispute resolution",
          },
          {
            type: "text",
            children:
              " to request an Order of Possession if the landlord locks them out, refuses to give them the keys to the property, or otherwise prevents their lawful access.",
          },
        ],
      },
    ],
    children: [
      {
        id: "tenant",
        label: "Tenant",
        body: [
          {
            type: "p",
            children: [
              {
                type: "on-this-page",
                title: "On this Page",
                children: [
                  {
                    id: "tenant-rights",
                    label: "Tenant Rights",
                  },
                  {
                    id: "tenant-locks",
                    label: "Locks",
                  },
                  {
                    id: "tenant-enforcing-possession",
                    label: "Enforcing Possession",
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
            ],
          },
          {
            type: "h2",
            id: "tenant-rights",
            children: "Tenant Rights",
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "Possession for tenants means the right to exclusive, or sole possession and quiet enjoyment – reasonable privacy and freedom from unreasonable disturbance or significant interference with their use of the rental property. The landlord can’t restrict the tenant’s quiet enjoyment – they must:",
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children: "Provide all essential services",
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "- Keep the rental unit and all non-essential services / facilities in a state of good repair",
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "- Quickly deal with problems and noise issues that interfere with the tenant’s quiet enjoyment",
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "- At the tenant’s request, change the locks at the beginning of tenancy (or provide new keys to the tenant if the locks must be changed during the tenancy)",
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "- Not enter the areas of the property that the agreement says are for the exclusive use of the tenant, except under certain conditions",
              },
            ],
          },
          {
            type: "br",
          },
          {
            type: "h2",
            id: "tenant-locks",
            children: "Locks",
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "A tenant can’t change locks on their rental unit without the landlord’s written permission. If there’s a problem, tenants can use the dispute resolution process through the Residential Tenancy Branch to get an order to change the locks.",
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
                children: "Apply for permission to change the locks",
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "Tenants should note that if they change the locks without permission:",
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "1. If they’re not home during an emergency, emergency personnel or the landlord may remove the door to access the unit making the tenant responsible for any related repairs or costs needed to put the door back in place.",
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "2. The landlord can give written notice requiring the tenant to change the locks back within a specific, but reasonable, period of time. In some cases, the tenant may just need to give the landlord keys to the new locks – this only works if the lock isn’t keyed to a master key. If the tenant doesn’t do so, the landlord can apply for dispute resolution.",
              },
            ],
          },
          {
            type: "br",
          },
          {
            type: "h2",
            id: "tenant-enforcing-possession",
            children: "Enforcing Possession",
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children: "A tenant ",
              },
              {
                type: "a-internal",
                href: "/under-construction",
                children: "can apply for dispute resolution",
              },
              {
                type: "text",
                children:
                  " to request an Order of Possession if the landlord locks them out, refuses to give them the keys to the property, or otherwise prevents their lawful access.",
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
            type: "p",
            children: [
              {
                type: "on-this-page",
                title: "On this Page",
                children: [
                  {
                    id: "landlord-rights",
                    label: "Landlord Rights",
                  },
                  {
                    id: "landlord-locks",
                    label: "Locks",
                  },
                  {
                    id: "landlord-enforcing-possession",
                    label: "Enforcing Possession",
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
            ],
          },
          {
            type: "h2",
            id: "landlord-rights",
            children: "Landlord Rights",
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "A landlord does not require notice to enter any common areas that are shared with others tenants like hallways, courtyards and laundry facilities. However, proper notice is required if a landlord wants to enter a rental unit.",
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
                children: "See the process required for landlords",
              },
            ],
          },
          {
            type: "br",
          },
          {
            type: "h2",
            id: "landlord-locks",
            children: "Locks",
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "The landlord must give each tenant a key to the rental unit (and building, if applicable) at no cost. The landlord should keep a copy of all keys for emergency access.",
              },
            ],
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "The landlord must change the rental unit locks or other access system if a tenant makes the request at the beginning of a new tenancy and if the locks weren’t changed at the end of the last tenancy. The landlord must pay for these costs.",
              },
            ],
          },
          {
            type: "br",
          },
          {
            type: "h2",
            id: "landlord-enforcing-possession",
            children: "Enforcing Possession",
          },
          {
            type: "p",
            children: [
              {
                type: "text",
                children:
                  "The landlord must serve a proper notice to end a tenancy if there’s cause for doing so – like not paying rent on time or causing damage or interference with the landlord’s rights. If the notice is not disputed, the landlord must follow the legal process to have the tenant removed from the property. If not, the process may have to be restarted and the tenant can seek compensation.",
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
            title: "Serving Notice",
            description:
              "Find out what needs to happen in situations where tenants must be notified. For example, when a landlord wants to enter a rental unit, end a tenancy, discontinue services or schedule a showing.",
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
