import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CreationImages from "../components/creation-images"

const Creations = () => (
  <Layout>
    <SEO title="Creations" />
    <section className="creations">
      <CreationImages />
    </section>
  </Layout>
)

export default Creations
