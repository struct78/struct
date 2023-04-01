import { config } from "dotenv"

config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteTitle = "Building happy engineering teams 😊 STRUCT"
const siteDescription = "We help build happy and successful engineering teams for start-ups, scale-ups, and corporations"
const siteAuthor = "David Johnson"
const siteUrl = "https://struct.com.au"
const siteImage = ""
const siteKeywords = ["Elastic CTO", "Fractional CTO", "Virtual CTO", "Software Engineering", "Continuous Delivery"]

export default {
  siteMetadata: {
    title: siteTitle,
    description: siteDescription,
    author: siteAuthor,
    url: siteUrl,
    keywords: siteKeywords,
    image: siteImage,
  },
  plugins: [
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: process.env.GATSBY_STORYBLOK_TOKEN,
        homeSlug: "home",
        version: "draft",
        localAssets: true,
        resolveRelations: ["navigation.pages"]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-plugin-react-axe",
      options: {
        showInProduction: false,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteTitle,
        short_name: siteTitle,
        description: siteDescription,
        start_url: "/",
        icon: "static/icon.svg",
        icon_options: {
          purpose: "maskable",
        },
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-tailwindcss",
    "gatsby-plugin-postcss",
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: { analyzerMode: "static" },
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        custom: [
          {
            name: ["Eloque Black", "Eloque Regular", "Eloque Thin"],
            file: "styles.css",
          },
        ],
      }
    }
  ],
}
