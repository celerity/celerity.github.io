module.exports = {
  title: "Celerity",
  tagline: "High-level C++ for Accelerator Clusters",
  url: "https://celerity.github.io",
  baseUrl: "/",
  organizationName: "celerity",
  projectName: "celerity.github.io",
  deploymentBranch: "deploy",
  trailingSlash: true,
  scripts: [],
  favicon: "img/favicon.ico",
  customFields: {
    repoUrl: "https://github.com/celerity/celerity-runtime"
  },
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          path: "./celerity-runtime/docs",
          sidebarPath: "sidebars.json"
        },
        blog: {},
        theme: {
          customCss: ["src/css/customTheme.css", "src/css/api_docs.css"]
        }
      }
    ]
  ],
  plugins: [],
  themeConfig: {
    navbar: {
      title: "Celerity",
      logo: {
        src: "img/celerity_icon.png"
      },
      items: [
        {
          to: "docs/getting-started",
          label: "Docs",
          position: "left",
          // Show link as active for all docs pages except API docs
          activeBaseRegex: "/docs(?!/api)"
        },
        {
          to: "docs/api/namespaces",
          label: "API",
          position: "left",
          activeBasePath: "/docs/api"
        },
        {
          to: "/research",
          label: "Research",
          position: "right"
        },
        {
          to: "/contribute",
          label: "Contribute",
          position: "right"
        },
        {
          href: "https://github.com/celerity/celerity-runtime",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    image: "img/celerity_og_image.png",
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/getting-started"
            },
            {
              label: "Installation",
              to: "docs/installation"
            },
            {
              label: "Issues & Limitations",
              to: "docs/issues-and-limitations"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Celerity Discord",
              to: "https://discord.gg/k8vWTPB"
            },
            {
              label: "Stack Overflow",
              to: "https://stackoverflow.com/questions/tagged/celerity-hpc"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "Research",
              to: "research"
            },
            {
              label: "Contribute",
              to: "contribute"
            },
            {
              label: "GitHub",
              to: "https://github.com/celerity/celerity-runtime"
            }
          ]
        }
      ],
      copyright:
        `Copyright © ${new Date().getFullYear()} Distributed and Parallel Systems Group, University of Innsbruck.<br/>` +
        "SYCL and the SYCL logo are trademarks of the Khronos Group Inc.",
      logo: {
        src: "img/celerity_logo_monochrome.svg",
        srcDark: "img/celerity_logo_dark_monochrome.svg"
      }
    },
    algolia: {
      appId: "XBORHFUOA7",
      apiKey: "b30e6987826441c7179e251fe3efa23b",
      indexName: "celerity"
    }
  }
};
