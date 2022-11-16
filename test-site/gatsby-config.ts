import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `strong-strap test site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: [
          '/scratch/',
          '/posts/theme-testing/',
          '/posts/mdx-testing/',
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png",
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            }
          },
        ],
        mdxOptions: {
          remarkPlugins: [
            [require('gatsby-remark-vscode').remarkPlugin, {
              // theme: `Cobalt2`,
              // extensions: [`theme-cobalt2`],
            }]
          ]
        }
      }
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          transformOptions: {
            fit: "cover",
            cropFocus: "centre",
          }
        }
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `mcgurkin`
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-sitemap",
  ]
};

export default config;
