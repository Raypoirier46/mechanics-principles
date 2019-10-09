import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import blogStyles from './recent-blog-preview.module.scss'

const RecentPosts = () => {
    const data = useStaticQuery(graphql`
    query{
  allContentfulBlogPost(
    limit: 4,
    sort: {
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
    )
}

export default RecentPosts;
