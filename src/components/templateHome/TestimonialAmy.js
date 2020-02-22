import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Flex, Box, Text, Image } from "rebass"
import { SectionHeader } from "../atoms"
import BgImage from "../molecules/BgImage"
import { HomeYellowIcon } from "../molecules"
import { theme, StandardLayout } from "../utilities"
import { AccomplishThisBy } from "../organisms"

export const TestimonialAmy = props => {
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
      <Box
        sx={{
          backgroundImage: `linear-gradient(
      170deg,
      ${theme.colors.darkPurple},
      ${theme.colors.darkPurple} 60%,
      ${theme.colors.white} 60%,
      ${theme.colors.white} 60%
    )`,
          height: "200px",
        //   position: "absolute",
        }}
      ></Box>
      <BgImage
        bci="linear-gradient(
            170deg,
            #4A2B7E,
            #4A2B7E 20%,
            #FFFFFF 20%,
            #FFFFFF 40%,
            #FFFFFF 60%,
            #FFFFFF 60%
        )"
        fluid={data.placeholderImage.childImageSharp.fluid}
      >
        <Text>
          Pat joined my business to help me in a variety of ways. I was planning
          a product launch and knew I would need support with the entire
          process. While that product no longer exists, Pat made herself so
          valuable to my business that I found all kinds of other deliciousness
          to have her support me with. She has managed my business moving states
          twice, my invoicing, my payroll, most of my vendors and payment
          processing, as well as a large variety of other tasks. Working with
          Pat as my assistant has been wonderful because I have experienced
          great communication, proactive and anticipatory input, openness,
          collaboration, and new ideas and approaches to my work. There has not
          been anything she is interested in doing that she has not been willing
          to tackle. And, I know that whatever I give her, it will come back
          better than I could have anticipated with high attention to detail. I
          feel confident that Pat could support anyone who genuinely cares about
          how she engages her audience, serves her clients, and shows up in the
          world. I thank God for her every day.
        </Text>
      </BgImage>
    </>
  )
}
