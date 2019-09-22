import React from 'react'
import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
    return (
        <Layout>
        <Head title="Contact" />
            <h1>Contact</h1>
            <p>The best way to contact me is by twitter <a href='https://twitter.com/raymond_poirier' target='blank'>@raymond_poirier</a></p>
        </Layout>
    )
}

export default ContactPage;