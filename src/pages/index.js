import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import PageHeader from "../components/Page-header"
import AboutMe from "../components/About"
import TechStack from "../components/Tech-stack"
import Timeline from "../components/Timeline"


const IndexPage = () => (
  <Layout>
    <SEO title="Start" />  
    <PageHeader title="webart" subtext="portfolio" subtitle="Artur Pokrywka"/>
    <AboutMe />
    <TechStack />
    <Timeline />
  </Layout>
);


export default IndexPage

