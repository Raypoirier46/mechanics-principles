const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const res = await graphql(`
         query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)
res.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
        component: path.resolve(`./src/templates/blog-posts.js`),
        path: `/blog/${edge.node.slug}`,
        context: {
            slug: edge.node.slug
        }
    })
})
}