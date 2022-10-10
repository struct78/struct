import { useStoryblok } from "@storyblok/react"
import { Blok } from "storyblok-react"
import { graphql } from "gatsby"
import { useStoryblokState } from "gatsby-source-storyblok"
import { PageStoryblok } from "../@types/storyblok"
import { Layout } from "../components/layout/layout"
import { Page } from "../components/page/page"
import { SEO } from "../components/seo/seo"

const IndexPage = ({ data }: { data: any }) => {
  const { storyblokEntry } = data
  const {
    content: { seoTitle, seoDescription, openGraphImage, openGraphDescription, openGraphTitle },
  }: Blok<PageStoryblok> = storyblokEntry
  const story = useStoryblokState(storyblokEntry)
  const liveStory = useStoryblok(story.full_slug, { version: "draft" }, {
    resolveRelations: ["navigation.pages"],
  })

  return (
    <Layout>
      <SEO
        title={seoTitle}
        description={seoDescription}
        openGraphTitle={openGraphTitle}
        openGraphDescription={openGraphDescription}
        openGraphImage={openGraphImage?.filename}
      />
      <Page story={liveStory?.full_slug ? liveStory : story} />
    </Layout>
  )
}

export const query = graphql`
  query {
    storyblokEntry(full_slug: { eq: "home" }) {
      content
      name
      full_slug
      uuid
      id
      internalId
      path
    }
  }
`

export default IndexPage
