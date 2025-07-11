module.exports = {
  masterSidebar: [
    "home",
    {
      type: "category",
      label: "Introduction",
      collapsed: false,
      items: [
        "what-is-a-validator",
        "what-is-an-rpc-node",
        "faq",
        "backwards-compatibility",
      ],
    },
    {
      type: "category",
      label: "Command Line Tools",
      items: [
        {
          type: "autogenerated",
          dirName: "cli",
        },
      ],
    },
    {
      type: "category",
      label: "Architecture",
      items: [
        "architecture",
        {
          type: "category",
          label: "Clusters",
          items: [
            {
              type: "autogenerated",
              dirName: "clusters",
            },
          ],
        },
        {
          type: "category",
          label: "Consensus",
          items: [
            {
              type: "autogenerated",
              dirName: "consensus",
            },
          ],
        },
        {
          type: "category",
          label: "Runtime",
          items: [
            {
              type: "autogenerated",
              dirName: "runtime",
            },
          ],
        },
        {
          type: "category",
          label: "Validators",
          items: [
            {
              type: "autogenerated",
              dirName: "validator",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Operating a Validator",
      items: [
        {
          type: "autogenerated",
          dirName: "operations",
        },
      ],
    },
    "references/RPCEndpoints",
    "GetdevnetBTG"
    // {
    //   type: "category",
    //   label: "RPC Endpoints",
    //   link: {
    //     type: "doc",
    //     id: "references/RPCEndpoints",
    //   },
    //   items: [
    //     {
    //       type: "autogenerated",
    //       dirName: "references",
    //     },
    //   ],
    // },
  ],
  proposalsSidebar: [
    {
      type: "category",
      label: "System Design Proposals",
      collapsed: false,
      items: [
        "proposals",
        {
          type: "category",
          label: "Accepted Proposals",
          collapsed: true,
          link: {
            type: "doc",
            id: "proposals/accepted-design-proposals",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "proposals",
            },
          ],
        },
        {
          type: "category",
          label: "Implemented Proposals",
          collapsed: true,
          link: {
            type: "doc",
            id: "implemented-proposals/index",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "implemented-proposals",
            },
          ],
        },
      ],
    },
  ],
  ApiSidebar:[
    {
      type: "category",
      label: "Openverse RPC Methods",
      collapsed: false,
      link: {
        type: "doc",
        id: "Documentation",
      },
      items: [
        "api",
        {
          type: "category",
          label: "HTTP Methods",
          collapsed: true,
          link: {
            type: "doc",
            id: "Openverse-RPC-HTTP-Methods",
          },
          items: [
            // "-RPC-HTTP-Methods",
            {
              type: "autogenerated",
              dirName: "api",
            },
          ],
        },
        {
          type: "category",
          label: "Websocket Methods",
          collapsed: true,
          link: {
            type: "doc",
            id: "Websocket-Methods",
          },
          items: [
            {
              type: "autogenerated",
              dirName: "WebsocketMethods",
            },
          ],
        },
      ],
    },
  ],
  CookbookSidebar:[
    {
      type: "category",
      label: "Development",
      collapsed: false,
      link: {
        type: "doc",
        id: "cookbook",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "cookDevelopment",
        },
      ],
    },
    {
      type: "category",
      label: "Wallets",
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "Wallets",
        },
      ],
    },
    {
      type: "category",
      label: "Transactions",
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "Transactions",
        },
      ],
    },
    {
      type: "category",
      label: "Accounts",
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "accounts",
        },
      ],
    },
    {
      type: "category",
      label: "Writing Programs",
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "writingProarams",
        },
      ],
    },
    {
      type: "category",
      label: "Tokens",
      collapsed: false,
      items: [
        {
          type: "autogenerated",
          dirName: "tokens",
        },
      ],
    },
  ]
};