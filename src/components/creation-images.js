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
              fixed {
                src
              }
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ul className="creations--list">
        {data.allImageSharp.edges.map(edge => (
          <li key={edge.node.id}>
            <a href={edge.node.fixed.src}>
              <Img fluid={edge.node.fluid} />
            </a>
          </li>
        ))}
      </ul>
    )}
  />
)

export default CreationImages
