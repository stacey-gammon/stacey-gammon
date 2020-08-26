import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./intro.css"

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <div class="container">
        <h2>hello world,</h2>
        <h1>I'm Stacey </h1>
        <br/>

      <p className="introText">
        I'm a software engineer with a passion for creating scalable, efficient, and maintanable solutions.
        I love coding and tech, but also understand software development is about more than just code.
        It's about people, relationships, communication, and business. At the end of the day, if I have
        a challenge in front of me, am surrounded by good people, and have an opportunity to learn, I'm happy!
      </p>

      <p>Reach out and say "hi" at stacey@staceygammon.com</p>

      <p className="quote">
          <i>"Every day I discover more and more beautiful things. It’s enough to drive one mad. I have such a desire to do everything, my head is bursting with it."
          
          <br/>
           ~ Claude Monet</i></p>
           
    </div>
    <div>
    </div>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
