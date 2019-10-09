import React from 'react'
import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactPage = () => {
    return (
        <Layout>
        <SEO 
            title="Contact"
            description={`Contact us to make suggestions and offer feedback`}
         />
            <h1>Contact</h1>
            <p>Have any ideas or suggestions on future posts?</p>
            <p>We'd love to hear from you!</p>
            <p>We are also looking for writer's with mechanical experience or mechanic's with writing experience.
            Let us know if you're interested!</p>
            <p>Send us an <a href='mailto:ray_poirier@hotmail.com'>email!</a></p>
        </Layout>
    )
}

export default ContactPage;