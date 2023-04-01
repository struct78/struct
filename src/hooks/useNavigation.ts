import { graphql, useStaticQuery } from "gatsby"

export const useNavigation = () => {
  const { header, footerStartups, footerScaleups, footerCorporates, footerVCs } = useStaticQuery(graphql`
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
      footerStartups: allStoryblokEntry(filter: { field_component: { eq: "navigation" }, slug: { eq: "footer-for-startups" } }) {
        edges {
          node {
            name
            full_slug
            content
          }
        }
      }
      footerScaleups: allStoryblokEntry(filter: { field_component: { eq: "navigation" }, slug: { eq: "footer-for-scaleups" } }) {
        edges {
          node {
            name
            full_slug
            content
          }
        }
      }
      footerCorporates: allStoryblokEntry(filter: { field_component: { eq: "navigation" }, slug: { eq: "footer-for-corporates" } }) {
        edges {
          node {
            name
            full_slug
            content
          }
        }
      }
      footerVCs: allStoryblokEntry(filter: { field_component: { eq: "navigation" }, slug: { eq: "footer-for-vcs" } }) {
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
    footer: {
      startups: {
        name: "For Startups",
        links: footerStartups.edges?.[0]?.node,
      },
      scaleups: {
        name: "For Scaleups",
        links: footerScaleups.edges?.[0]?.node,
      },
      corporates: {
        name: "For Corporates",
        links: footerCorporates.edges?.[0]?.node,
      },
      vcs: {
        name: "For VCs",
        links: footerVCs.edges?.[0]?.node,
      }
    }
  }
}
