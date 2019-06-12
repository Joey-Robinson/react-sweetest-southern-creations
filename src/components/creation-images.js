import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CreationImages = () => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              id
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        {data.allImageSharp.edges.map(edge => (
          <Img fluid={edge.node.fluid} />
        ))}
      </div>
    )}
  />
)

export default CreationImages
