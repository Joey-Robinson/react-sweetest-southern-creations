import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ctabanner from "../static/ssc046banner.jpg"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="home">
      <div className="home--greeting">
        <h1>Welcome!</h1>
        <p>
          Sweetest Southern Creations is a locally owned and operated business.
          It's founder, Allysha Bonsall, is a stay at home mother who has a deep
          passion for arts & crafts. While not being a mother, She focuses on
          making beautiful and memorable apparel. Allysha absolutely loves
          seeing peoples ideas and passions come to life in her crafts. Allysha
          also continues to improve her trade daily through heavy research and
          continuous creation. We truly hope you love what we do as much as we
          do. We are truly blessed to be help you create that next special item
          for that special occasion, special memory, or just as a keepsake. :)
        </p>
      </div>
      <div className="home--cta">
        <h1>Who we are</h1>
        <p>
          We are a business that focuses on bringing your ideas and visions to
          life. We use PixScan, which allows us to take a drawing, letter, or
          other special possession and turn it into an amazing item for you to
          cherish and use as you see fit. This includes hats, shirts, cups, doll
          stitchings, and posters. It also includes decals and signs. All
          products we use are from other local businesses, as we believe in the
          continued support of local companies and businesses.
        </p>
        <div className="home--cta__image">
          <a href={ctabanner} target="_blank" rel="noopener noreferrer">
            <img src={ctabanner} alt="Baby" />
          </a>
        </div>
      </div>
      <div className="home--purchasing">
        <h1>Purchase</h1>
        <p>
          Ordering is a breeze!{" "}
          <a href="mailto:sweeetestsoutherncreations@gmail.com">
            Contact us through email
          </a>{" "}
          or &nbsp;
          <a
            href="https://facebook.com/sweetestsoutherncreations/"
            target="_blank"
            rel="noopener noreferrer"
          >
            on our Facebook page.
          </a>{" "}
          You can view some of our work{" "}
          <Link to="/creations/">on the Creations page</Link> or on our other
          social media platforms. We try our hardest to get all orders out as
          quickly as possible! We do local pick up and shipping options and buy
          all of our materials locally. We look forward to working with y’all.
          Rush orders are available with a small fee.{" "}
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
