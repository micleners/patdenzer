import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Flex, Box } from "rebass"

import { styled } from "@emotion/styled"
import BgImage from "../molecules/BgImage"
import { StandardLayout } from "../utilities/StandardLayout"
import { HomePurpleIcon, HomeLogo } from "../molecules"

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "home-header-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <BgImage
        fluid={data.placeholderImage.childImageSharp.fluid}
        title="astronaut"
        height="600px"
        flexDirection="row"
      >
        {/* <StandardLayout> */}
        <StandardLayout

          padding="0 0 0 2%"
        >
          <Flex flexDirection={["row", "row", "column"]}>
            <HomePurpleIcon icon="growth" text="Is your business growing?" />
            <HomePurpleIcon
              icon="bogged"
              text="Are you bogged down by details?"
            />
            <HomePurpleIcon
              icon="overwhelmed"
              text="Are you feeling overwhelmed?"
            />
            <HomePurpleIcon icon="sync" text="Are you feeling out of sync?" />
            <HomeLogo />
          </Flex>
        </StandardLayout>
      </BgImage>
    </>
  )
}
