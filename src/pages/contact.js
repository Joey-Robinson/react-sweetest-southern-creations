import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaFacebook } from "react-icons/fa/index.esm"
import { FaInstagram } from "react-icons/fa/index.esm"
import { FaPinterest } from "react-icons/fa/index.esm"
import { FaGooglePlusG } from "react-icons/fa/index.esm"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <section className="contact">
      <h1>Get in touch!</h1>
      <div className="contact--fb">
        <a href="">
          Facebook - <FaFacebook aria-label="Facebook" />
        </a>
      </div>
      <div className="contact--ig">
        <a href="">
          Instagram - <FaInstagram aria-label="Instagram" />
        </a>
      </div>
      <div className="contact--pint">
        <a href="">
          Pinterest - <FaPinterest aria-label="Pinterest" />
        </a>
      </div>
      <div className="contact--email">
        <a href="">
          Email - <FaGooglePlusG aria-label="Gmail" />
        </a>
      </div>
    </section>
  </Layout>
)

export default Contact
