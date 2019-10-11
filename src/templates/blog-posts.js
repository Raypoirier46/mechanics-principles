import React from 'react';
import { graphql, Link } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import SEO from '../components/seo'

import Layout from '../components/layout'

export const query = graphql`
query($slug: String!) {
  contentfulBlogPost(slug: {eq: $slug}) {
    title
    description
    publishedDate(formatString: "MMMM Do, YYYY")
    body {
      json
    }
  }
}`


const BlogPost = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return (
        <img alt={alt} src={url} />
        )
      }
    }
  }
    return (
        <Layout>
        <SEO 
          title={props.data.contentfulBlogPost.title}
          description={props.data.contentfulBlogPost.description}
        />
          <p>
            <Link to='/blog'>Go Back</Link>
          </p>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
          <p>
            <Link to='/blog'>
              Go Back
            </Link>
          </p>
        </Layout>
    )
};

export default BlogPost;