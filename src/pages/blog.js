import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby'
import SEO from '../components/seo'

import blogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query{
  allContentfulBlogPost(sort: {
    fields: publishedDate,
      order: DESC
    
  }) {
    edges {
      node {
        publishedDate(formatString:"MMMM Do, YYYY")
        title
        slug
        contentful_id
      }
    }
  }
} 
    `)

    return (
        <Layout>
        <SEO 
          title='Blog'
          description={`All of our articles to help you learn and repair like the pros`}
         />
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post} key={edge.node.contentful_id}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                    })}
            </ol>
        </Layout>
    )
}

export default BlogPage;