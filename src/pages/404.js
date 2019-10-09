import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFound = () => {
    return (
        <Layout>
        <SEO 
            title='404'
            description={`You got lost`}
        />
            <h1>Page not found</h1>
            <p><Link to="/">Go to Home Page</Link></p>
        </Layout>
    )
}

export default NotFound;