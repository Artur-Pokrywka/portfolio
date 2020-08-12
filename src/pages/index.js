import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import AboutMe from "../components/about"
import TechStack from "../components/tech-stack"
import Timeline from "../components/my-timeline"


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

