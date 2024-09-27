const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  console.log("Starting createPages")

  const result = await graphql(`
    {
      allContentfulCoffeeBlog {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) {
    console.error("GraphQL query errors:", result.errors)
    throw result.errors
  }

  const posts = result.data.allContentfulCoffeeBlog.nodes

  console.log(`Found ${posts.length} blog posts`)

  posts.forEach((post) => {
    console.log(`Creating page for slug: ${post.slug}`)
    createPage({
      path: `/blog/${post.slug}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: post.slug,
      },
    })
  })

  console.log("Finished createPages")
}