import { FC } from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export type MetaItem = {
  name: string
  content: string
}

export type SEOProps = {
  title?: string
  description?: string
  url?: string
  author?: string
  keywords?: string[]
  meta?: MetaItem[]
  image?: string
  openGraphTitle?: string
  openGraphImage?: string
  openGraphDescription?: string
}

export const SEO: FC<SEOProps> = (props) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          image
        }
      }
    }
  `)

  const { siteMetadata } = data.site

  const {
    title,
    description,
    url,
    author,
    meta = [],
    keywords = [],
    image,
  } = siteMetadata

  const siteTitle = props.title || title
  const siteDescription = props.description || description
  const siteUrl = props.url || url
  const siteAuthor = props.author || author
  const siteImage = props.image || image
  const openGraphTitle = props.openGraphTitle || siteTitle
  const openGraphDescription = props.openGraphDescription || title
  const openGraphImage = siteImage || siteDescription
  const siteKeywords = [...keywords, props.keywords].join(',')
  const metaData = [
    {
      name: 'canonical',
      content: siteUrl,
    },
    {
      name: 'description',
      content: siteDescription,
    },
    {
      name: 'image',
      content: siteImage,
    },
    {
      name: 'og:url',
      content: siteUrl,
    },
    {
      name: 'og:title',
      content: openGraphTitle,
    },
    {
      name: 'og:description',
      content: siteDescription,
    },
    {
      name: 'og:image',
      content: openGraphImage,
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:creator',
      content: siteAuthor,
    },
    {
      name: 'twitter:title',
      content: openGraphTitle,
    },
    {
      name: 'twitter:description',
      content: openGraphDescription,
    },
    {
      name: 'twitter:image',
      content: openGraphImage,
    },
    {
      name: 'keywords',
      content: siteKeywords,
    },
  ].concat(meta)

  const linkData = [
    {
      rel: 'shortcut icon',
      href: 'favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: 'icons/apple-touch-icon.png',
    },
  ]

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={siteTitle}
      meta={metaData}
      link={linkData}
    />
  )
}
