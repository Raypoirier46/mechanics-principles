import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = () => {
    return (
        <Layout>
        <SEO 
            title='About'
            description={`About this website and it's creator`}
        />
            <h1>About The Website</h1>
            <p>This website was created for the aspiring mechanic and the DIY guy who wanted to take their
            skills to the next level. I created this site help them learn the PRINCIPLES that can be applied to anything
            they repair. It can be a car, a motorcycle, a lawnmower, a bulldozer or combine harvester. These principles
            remain constant so you can work on anything you want. You can read why every mechanic needs principles 
            <Link to="/principles"> here.</Link>
            </p>
            <br />
            <h1>About Me</h1>
            <p>
                So why should you listen to me?<br />
                <br />
                I'm a profesional <Link to="http://www.red-seal.ca/trades/.1gr.3_t.2ch-eng.html">Agricultural Equipment Technician</Link> of 6 years but I have been around machines and
                fixing them my whole life.
            </p>
            <p>
                I grew up on a grain farm and have worked on tractors, combine harvesters, semi trucks, self-propelled
                sprayers and of course cars and other vehicles.
            </p>
            <p>
                After working as a mechanic profesionally for a few year, I have learned the principles and fundamentals of
                how things work and how to fix them. While the manufacturers and equipment may change, the principles do not.
            </p>
            <p>
            While I may not have the years of experience the older mechanics have, but I do possess some skills they do not, such as
            computer skills and building websites. I still have so much to learn but I want to share my knowledge of the fundamentals
            and principles that I have learned by this website.
            </p>
            <p>
                I hope I can help you on your path.
            </p>
        </Layout>
    )
}

export default AboutPage;