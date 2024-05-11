const math = require("remark-math");
const katex = require("rehype-katex");
module.exports = {
  title: "Openos Validator",
  tagline:
    "Openos is an open source project implementing a new, high-performance, permissionless blockchain.",
  url: "https://docs.openos.info",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "openos-labs", // Usually your GitHub org/user name.
  projectName: "openos", // Usually your repo name.
  onBrokenLinks: "throw",
  stylesheets: [
    {
      href: "/katex/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    // localesNotBuilding: ["ko", "pt", "vi", "zh", "ja"],
    localeConfigs: {
      en: {
        label: "English",
      },
  
    },
  },
  themeConfig: {
    prism: {
      additionalLanguages: ["rust"],
    },
    navbar: {
      logo: {
        alt: "Openos Logo",
        src: "img/logo-horizontal.png",
        srcDark: "img/logo-horizontal-dark.png",
      },
      items: [
        {
          to: "cli",
          label: "CLI",
          position: "left",
        },
        {
          to: "architecture",
          label: "Architecture",
          position: "left",
        },
        {
          to: "operations",
          label: "Operating a Validator",
          position: "left",
        },
        {
          label: "More",
          position: "left",
          items: [
            { label: "Proposals", to: "proposals" }
          ],
        },
        {
          type: "localeDropdown",
          position: "right",
        },
       
        {
          href: "https://github.com/openlab-openos/OpenOS.Prod",
          // label: "GitHub",
          className: "header-link-icon header-github-link",
          "aria-label": "GitHub repository",
          position: "right",
        },
      ],
    },
    algolia: {
      // This API key is "search-only" and safe to be published
      apiKey: "011e01358301f5023b02da5db6af7f4d",
      appId: "FQ12ISJR4B",
      indexName: "solana",
      contextualSearch: true,
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Developers »",
              href: "/",
            },
            {
              label: "Running a Validator",
              to: "operations",
            },
            {
              label: "Command Line",
              to: "cli",
            },
            {
              label: "Architecture",
              to: "architecture",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Forum »",
              href: "/",
            },
            {
              label: "GitHub »",
              href: "https://github.com/",
            },
            {
              label: "Telegram »",
              href: "/",
            },
           
          ],
        },
      
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Openos Labs`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "src",
          breadcrumbs: true,
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        // Google Analytics are only active in prod
        // gtag: {
        // this GA code is safe to be published
        // trackingID: "",
        // anonymizeIP: true,
        // },
      },
    ],
  ],
};
