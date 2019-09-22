import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby'
import Head from '../components/head';

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
      }
    }
  }
}
    #    {allMarkdownRemark {
    #         edges {
    #             node {
    #                 frontmatter {
    #                 Title
    #                 date
    #                 },
    #                 fields {
    #                     slug
    #                 }
    #             }
    #         }
    #         }
    #    }
  
    `)

    return (
        <Layout>
        <Head title='Blog' />
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {/* {data.allMarkdownRemark.edges.map((edge) => { */}
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
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