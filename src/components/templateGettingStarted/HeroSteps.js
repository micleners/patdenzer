import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Box } from "rebass"

import { css, jsx } from "@emotion/react"
import BgImage from "../molecules/BgImage"
import BackgroundImage from "gatsby-background-image"
import { HomePurpleIcon, HomeLogo } from "../molecules"
import {
  TransparentCard,
  SectionHeader,
  DarkText2,
  DarkText1,
  BlueText2,
  PurpleText1,
} from "../atoms"
import { below, useMediaQuery } from "../utilities"

export const HeroSteps = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "lavenderfield.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const backgroundFluidImageStack = [
    data.placeholderImage.childImageSharp.fluid,
    `linear-gradient(rgba(255, 255, 255, 0.5), rgba(74, 43, 126, 0.5))`,
  ].reverse()

  const Step = props => {
    const { margin, call, length, title, children } = props
    return (
      <TransparentCard
        m={[2, 2, 3]}
        alignItems="center"
        flexDirection="column"
        flex={["1 1 auto", "1 1 0px"]}
        // alignSelf="stretch"
        {...props}
      >
        <BlueText2 mb={margin ? margin : [1, 2, 3]}>{call}</BlueText2>
        <DarkText2 mb={margin ? margin : [1, 2, 3]}>{length}</DarkText2>
        <PurpleText1 mb={margin ? margin : [1, 2, 3]} fontWeight="body">
          {title}
        </PurpleText1>
        <DarkText1 mb={margin ? margin : [1, 2, 3]}>{children}</DarkText1>
      </TransparentCard>
    )
  }

  return (
    <>
      <BackgroundImage
        fluid={backgroundFluidImageStack}
        style={{ overflow: "auto", height: "auto" }}
      >
        <Flex
          m={[1, 3, 4]}
          pb={[1, 3, 4]}
          my={2}
          flexDirection="column"
          flex="1 1 0px"
          sx={{
            height: "auto",
          }}
        >
          <TransparentCard alignSelf="center" m={2} width="auto">
            <SectionHeader lineHeight="1">My Interview Process</SectionHeader>
          </TransparentCard>
          <TransparentCard m={2}>
            <DarkText1>
              I’ve developed a three-part interview process. The depth of my
              interview process will help us both see if working together is a
              perfect fit. I’ll learn about you and you’ll learn about me. With
              the solid information gained through our discussions, we’ll make
              the best decision about our partnership and the virtual assistant
              services I bring to you and your business.
            </DarkText1>
          </TransparentCard>
          <Flex alignItems="flex-start" flexDirection={["column", "row"]}>
            <Step
              call="First Call"
              length="15-20 minutes"
              title="Getting to Know You"
            >
              We won’t talk business here; it’s two people meeting for the first
              time getting to know each other.
            </Step>
            <Step
              call="Second Call"
              length="60-90 minutes"
              title="Nuts and Bolts"
            >
              <Box mb={[1, 2, 3]}>
                Having decided to take the next step, we’ll talk about your
                business, top priorities, and what kind of assistance you need.
              </Box>
              <Box>
                We’ll also discuss how my practice works, fee structure, and
                payment policies.
              </Box>
            </Step>
            <Step call="Third Call" length="60-90 minutes" title="Deeper Dive">
              <Box mb={3}>
                We’ll dive into the more personal details of our working
                relationship, including equality in the partnership, boundaries,
                standards, communication, expectations, fees and commitment to
                the collaborative partnership.
              </Box>
              <Box>
                Here is where we’ll dig deep and really discover if we’re
                compatible.
              </Box>
            </Step>
          </Flex>
        </Flex>
      </BackgroundImage>
    </>
  )
}
