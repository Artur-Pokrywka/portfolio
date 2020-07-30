import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ContactData from "../components/contact-data"

const Contact = () => (
  <Layout>
    <SEO title="Kontakt" />
    <ContactData phone="511 172 330" mail="pokrywkaart@gmail.com"/>
  </Layout>
);

export default Contact