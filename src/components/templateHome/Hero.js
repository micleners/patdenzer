import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Flex, Box } from "rebass"

import BgImage from "../molecules/BgImage"
import { HomePurpleIcon, HomeLogo } from "../molecules"

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "home-header-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
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
      >
        <Flex
          flexDirection={["column-reverse", "row", "row"]}
          justifyContent="space-between"
          alignItems="center"
          height="100%"
          p={["0", "0 0 0 2%"]}
          m="0 0 0 0"
          maxWidth="auto"
        >
          <Flex flexDirection="column" alignItems="space-between" my={["3", "0"]}>
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
          </Flex>
          <HomeLogo
            width={["100%", "300px", "300px"]}
            boxSizing="border-box"
            p={3}
            height={["auto", "100%"]}
          />
        </Flex>
      </BgImage>
    </>
  )
}
