import React from "react"
import Slider from "react-slick"
import { Flex, Box } from "rebass"
import styled from "@emotion/styled"
import Img from "gatsby-image"

import BackgroundImage from "gatsby-background-image"
import { below } from "../utilities"
import { useStaticQuery, graphql } from "gatsby"
import { WhiteCard, SectionHeader, DarkText2 } from "../atoms"
import Back from "../../assets/back.svg"
import Next from "../../assets/next.svg"

export const AboutTestimonial = () => {
  const data = useStaticQuery(graphql`
    query {
      testimonialBackground: file(relativePath: { eq: "desktop.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const backgroundFluidImageStack = [
    data.testimonialBackground.childImageSharp.fluid,
    `linear-gradient(rgba(255, 255, 255, 0), rgba(74, 43, 126, 0))`,
  ].reverse()

  return (
    <>
      <Box width="100%" height="100px" bg="darkPurple" />
      <BackgroundImage
        fluid={backgroundFluidImageStack}
        style={{ overflow: "auto", height: "auto" }}
      >
        <Flex
          flexDirection="column"
          pl={[3, 5, "10%", "15%"]}
          pt={[4, 4, 5]}
          pb={["175px", "180px", "250px"]}
          width="60%"
        >
          <DarkText2 fontSize={[1, 1, 2]} fontWeight="light">
            "Pat is the most thoughtful person I know and the true backbone of
            my business. Her efficiency, wisdom and attention to detail is
            invaluable. I trust her implicitly and always welcome her input. Pat
            treats my business as if it’s her own and every day I am grateful to
            have her as my VA."
          </DarkText2>
          <DarkText2 fontSize={[1, 1, 2]} fontWeight="strong" pt={5}>
            Nancy Levin
          </DarkText2>
          <DarkText2 fontSize={[0, 0, 1]} fontWeight="light">
            Master Coach, Bestselling Author, Radio Host, Speaker and Teacher
          </DarkText2>
        </Flex>
      </BackgroundImage>
      <Box width="100%" height="100px" bg="blue" />
    </>
  )
}
