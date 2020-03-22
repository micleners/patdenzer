import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Box } from "rebass"

import { css, jsx } from "@emotion/core"
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
import { theme } from "../utilities"
import Services1 from "../../images/services1.svg"
import Services2 from "../../images/services2.svg"
import Services3 from "../../images/services3.svg"

export const MainService = () => {
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
    } catch (e) {}
  })

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "lavenderplant.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const backgroundFluidImageStack = [
    data.placeholderImage.childImageSharp.fluid,
    // `linear-gradient(rgba(255, 255, 255, 0.5), rgba(74, 43, 126, 0.5))`,
  ].reverse()

  const Step = props => {
    const { margin, call, length, title, children } = props
    return (
      <TransparentCard
        m={[2, 2, 3]}
        alignItems="center"
        flexDirection="column"
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

  const Service = props => <Flex as="img" {...props} src={props.service} />

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          left: "0px",
          top: "0px",
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        <BackgroundImage
          fluid={backgroundFluidImageStack}
          style={{
            overflow: "auto",
            zIndex: 10,
          }}
        >
          <Box height="750px" />
        </BackgroundImage>
        <Box
          sx={{
            width: "0",
            zIndex: 10,
            borderStyle: "solid",
            borderWidth: `300px 0 0 ${fullWidth >= 0 ? fullWidth : 0}px`,
            borderColor: `${theme.colors.purple} transparent transparent transparent`,
          }}
        ></Box>
      </Box>

      <Flex
        m={[1, 3, 4]}
        my={2}
        flexDirection="column"
        flex="1 1 0px"
        sx={{
          height: "auto",
          zIndex: 100,
        }}
      >
        <TransparentCard alignSelf="center" m={2} width="auto">
          <SectionHeader lineHeight="1">My Services</SectionHeader>
        </TransparentCard>
        <TransparentCard m={2}>
          <DarkText1>
            The joy of working with me as your Virtual Assistant is that it
            frees up valuable time for you to focus on those things in your
            business that feed your fire, and eases the stress of trying to “do
            it all.”
          </DarkText1>
        </TransparentCard>
        <Flex flexDirection={["column", "row"]}>
          <Service service={Services1} />
          <Service service={Services2} />
        </Flex>
        <Service service={Services3} />
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
              standards, communication, expectations, fees and commitment to the
              collaborative partnership.
            </Box>
            <Box>
              Here is where we’ll dig deep and really discover if we’re
              compatible.
            </Box>
          </Step>
        </Flex>
      </Flex>
    </>
  )
}
