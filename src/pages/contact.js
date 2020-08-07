import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ContactSection from "../components/Contact-section"

const Contact = () => (
  <Layout>
    <SEO title="Kontakt" />
    <ContactSection phone="511 172 330" mail="pokrywkaart@gmail.com"/>
  </Layout>
);

export default Contact