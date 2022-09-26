const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const pageTemplate = path.resolve('src/templates/page.tsx')

  const { data } = await graphql(
    `query {
      allStoryblokEntry(filter: { field_component: { eq: "page" }}) {
        edges {
          node {
            id
            internalId
            name
            slug
            full_slug
            content
            field_title_string
          }
        }
      }
    }`
  )

  data.allStoryblokEntry.edges.forEach(edge => {
    const full_slug = edge.node.full_slug
    const isHome = full_slug === 'home'

    actions.createPage({
      path: isHome ? '/' : full_slug,
      component: pageTemplate,
      context: {
        story: edge.node,
      }
    })

    if (isHome) {
      actions.createPage({
        path: full_slug,
        component: pageTemplate,
        context: {
          story: edge.node,
        }
      })
    }
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    }
  })
}
