import { graphql, useStaticQuery } from "gatsby"

export const useNavigation = () => {
  const { header, footer } = useStaticQuery(graphql`

    query Navigation {
      header: allStoryblokEntry(filter: { field_component: { eq: "navigation" }, slug: { eq: "header" } }) {
        edges {
          node {
            name
            full_slug
            content
          }
        }
      }
      footer: allStoryblokEntry(filter: { field_component: { eq: "navigation" }, slug: { eq: "footer" } }) {
        edges {
          node {
            name
            full_slug
            content
          }
        }
      }
    }
 `)

  return {
    header: header.edges?.[0]?.node,
    footer: footer.edges?.[0]?.node,
  }
}
