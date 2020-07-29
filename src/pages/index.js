import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"


const IndexPage = () => (
  <Layout>
    <SEO title="Start" />
    <PageHeader title="webart" subtext="portfolio" subtitle="Artur Pokrywka"/>
  </Layout>
);

export default IndexPage
