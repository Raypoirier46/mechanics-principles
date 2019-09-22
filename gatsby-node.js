const path = require('path')

//Don't need thid when using a CMS
// module.exports.onCreateNode = ({ node, actions }) => {
//     const { createNodeField } = actions

//     if(node.internal.type === 'MarkdownRemark') {
//         const slug = path.basename(node.fileAbsolutePath, '.md')

//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }
// }

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    // const blogPostTemplate = path.resolve(`./src/templates/blog-posts.js`)
    //it did not like when i used a const for the path
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
    // the query for markdown files
    // {
    //     allMarkdownRemark {
    //         edges {
    //           node {
    //             fields {
    //               slug
    //             }
    //           }
    //         }
    //       }
    // }
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