import React from 'react'
import { Layout } from '../components/layout/layout'
import { SEO } from '../components/seo/seo'

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      Page not found
    </Layout>
  )
}

export default NotFoundPage
