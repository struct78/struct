import { SbGatsbyStory, useStoryblokState } from "gatsby-source-storyblok"
import { Layout } from "../components/layout/layout"
import { Page } from "../components/page/page"
import { SEO } from "../components/seo/seo"
import { PageProps } from "gatsby"

type PageTemplateProps = {}

type PageTemplateContextProps = {
  story: SbGatsbyStory
}

const PageTemplate = ({ pageContext }: PageProps<PageTemplateProps, PageTemplateContextProps>) => {
  const { story } = pageContext
  const liveStory = useStoryblokState(story)
  const {
    content: { seoTitle, seoDescription, openGraphImage, openGraphDescription, openGraphTitle },
  }: SbGatsbyStory = liveStory

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

export default PageTemplate
