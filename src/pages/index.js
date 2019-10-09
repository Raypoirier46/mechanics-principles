import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo';
import RecentPost from '../components/recent-blog-preview/recent-blog-preview'
import { Link } from 'gatsby';

const IndexPage = () => {
    return(
            <Layout>
            <SEO 
                title='Home'
                description={`Mechanic Principles of the professionals to help you repair anything in your life`}
             />
                <h1>Learn the Principles to take your mechanical skills to the next level</h1>
                <p>We share the principles that the pros follow to repair anything they work on.
                    It doesn't matter if it's a car, motorcycle or bulldozer, the Principles are always
                    the same. Read more about the website <Link to="/about">here</Link>
                </p>
                <h3>Read the most recent posts</h3>
                <RecentPost />
            </Layout>
    )
}

export default IndexPage;
