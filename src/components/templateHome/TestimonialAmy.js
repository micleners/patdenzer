import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Box, Text, Image } from "rebass"
import BackgroundImage from "gatsby-background-image"
import { theme } from "../utilities"
import { DarkText2 } from "../atoms"

export const TestimonialAmy = props => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "amy_testimonial.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const backgroundFluidImageStack = [
    `linear-gradient(#F4F4F6, #F4F4F6 50%, #E6E7E7 100%)`,
    data.placeholderImage.childImageSharp.fluid,
  ].reverse()

  const [fullWidth, setFullWidth] = useState()

  useEffect(() => {
    try {
      setFullWidth(window ? window.innerWidth : 1000)
      const handleResize = () => setFullWidth(window ? window.innerWidth : 1000)
      if (window) {
        window.addEventListener("resize", handleResize)
        return () => {
          window.removeEventListener("resize", handleResize)
        }
      }
    } catch (e) {
    }
  })

  return (
    <BackgroundImage
      fluid={backgroundFluidImageStack}
      style={{ backgroundPosition: "bottom", backgroundSize: "contain" }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "0",
          height: "0",
          borderStyle: "solid",
          borderWidth: `${fullWidth / 5.67}px ${
            fullWidth >= 0 ? fullWidth : 0
          }px 0 0`,
          borderColor: `${theme.colors.darkPurple} transparent transparent transparent`,
        }}
      ></Box>
      <Flex
        sx={{ paddingTop: `${fullWidth / 5.5}px` }}
        flexDirection="column"
        pr={[3, 5]}
        pl={[3, 5]}
        pb={["175px", "180px", "250px"]}
      >
        <DarkText2 fontSize={[1, 1, 2]} fontWeight="light">
          "Pat joined my business to help me in a variety of ways. I was
          planning a product launch and knew I would need support with the
          entire process. While that product no longer exists, Pat made herself
          so valuable to my business that I found all kinds of other
          deliciousness to have her support me with. She has managed my business
          moving states twice, my invoicing, my payroll, most of my vendors and
          payment processing, as well as a large variety of other tasks. Working
          with Pat as my assistant has been wonderful because I have experienced
          great communication, proactive and anticipatory input, openness,
          collaboration, and new ideas and approaches to my work. There has not
          been anything she is interested in doing that she has not been willing
          to tackle. And, I know that whatever I give her, it will come back
          better than I could have anticipated with high attention to detail. I
          feel confident that Pat could support anyone who genuinely cares about
          how she engages her audience, serves her clients, and shows up in the
          world. I thank God for her every day."
        </DarkText2>
        <DarkText2 fontSize={[1, 1, 2]} fontWeight="strong" pt={5}>
          Amy Kazor
        </DarkText2>
        <DarkText2 fontSize={[0, 0, 1]} fontWeight="light">
          CMVA, www.amykazor.com
        </DarkText2>
      </Flex>
    </BackgroundImage>
  )
}
