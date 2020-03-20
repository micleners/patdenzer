import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Flex, Box } from "rebass"

import { css, jsx } from "@emotion/core"
import BgImage from "../molecules/BgImage"
import BackgroundImage from "gatsby-background-image"
import { HomePurpleIcon, HomeLogo } from "../molecules"
import { below, useMediaQuery } from "../utilities"

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
  let isRowBased = false;
  useEffect(() => {
    try {
      isRowBased = useMediaQuery("(max-width: 600px)")
    } catch (e) {}
  })

  return (
    <>
      <BackgroundImage
        fluid={data.placeholderImage.childImageSharp.fluid}
        height="600px"
        fadeIn={false}
        preserveStackingContext={true}
        style={{ display: isRowBased ? "none" : "" }}
      >
        <Flex
          flexDirection={["column-reverse", "row", "row"]}
          justifyContent="space-between"
          alignItems="stretch"
          height="600px"
          p={["0", "0 0 0 2%"]}
          m="0 0 0 0"
          maxWidth="auto"
        >
          <Flex
            flexDirection="column"
            alignItems="space-between"
            my={["3", "0"]}
          >
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
          />
        </Flex>
      </BackgroundImage>

      <Box sx={{ display: isRowBased ? "" : "none" }}>
        <Flex
          flexDirection={["column-reverse", "row", "row"]}
          justifyContent="space-between"
          alignItems="stretch"
          p={["0", "0 0 0 2%"]}
          m="0 0 0 0"
          maxWidth="auto"
        >
          <Flex
            flexDirection="column"
            alignItems="space-between"
            my={["3", "0"]}
          >
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
          />
        </Flex>
      </Box>
    </>
  )
}
