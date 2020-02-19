import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Text, Box } from "rebass"

import { styled } from "@emotion/styled"

export const HomeHero = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "home-header-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Box sx={{ position: `relative`, zIndex: "0" }}>
      <Img
        style={{ position: `absolute`, width: "100%", top: "0", height: "300px" }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
      <Text zIndex="100">apples</Text>
    </Box>
  )
}
