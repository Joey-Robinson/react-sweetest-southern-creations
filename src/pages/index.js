import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="home">
      <div className="home--greeting">
        <h1>Welcome!</h1>
      </div>
    </section>
  </Layout>
)

export default IndexPage
