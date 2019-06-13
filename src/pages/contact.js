import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaFacebook } from "react-icons/fa/index.esm"
import { FaInstagram } from "react-icons/fa/index.esm"
import { FaPinterest } from "react-icons/fa/index.esm"
import { FaGoogle } from "react-icons/fa/index.esm"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <section className="contact">
      <h1>Get in touch!</h1>
      <div className="contact--fb">
        <a
          href="https://facebook.com/sweetestsoutherncreations/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaFacebook aria-label="Facebook" />
        </a>
      </div>
      <div className="contact--ig">
        <a
          href="https://www.instagram.com/sweetestsoutherncreations/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaInstagram aria-label="Instagram" />
        </a>
      </div>
      <div className="contact--pint">
        <a
          href="https://www.pinterest.com/sweetestsoutherncreations/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaPinterest aria-label="Pinterest" />
        </a>
      </div>
      <div className="contact--email">
        <a
          href="mailto:sweetestsoutherncreations@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGoogle aria-label="Gmail" />
        </a>
      </div>
    </section>
  </Layout>
)

export default Contact
