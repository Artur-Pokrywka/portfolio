import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import AboutMe from "../components/about"


const IndexPage = (props) => (
  <Layout>
    <SEO title="Start" />
    
    <PageHeader title="webart" subtext="portfolio" subtitle="Artur Pokrywka"/>
    <AboutMe />
  </Layout>
);


export default IndexPage

