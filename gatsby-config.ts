import { config } from "dotenv"

config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteTitle = "The Fractional CTO | Empowering and engaging software teams"
const siteDescription = "We help build happy and successful engineering teams for startups, scaleups, and corporates"
const siteAuthor = "David Johnson"
const siteUrl = "https://struct.com.au"
const siteImage = ""
const siteKeywords = ["Virtual CTO", "Software Engineering", "Continuous Delivery"]

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
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteTitle,
        short_name: siteTitle,
        description: siteDescription,
        start_url: "/",
        icon: "static/icons/apple-touch-icon.png",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-tailwindcss",
    "gatsby-plugin-postcss",
    "gatsby-plugin-emotion",
    "gatsby-plugin-loadable-components-ssr",
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
