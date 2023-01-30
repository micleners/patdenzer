import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Box } from "rebass"
import styled from "@emotion/styled"

import Img from "gatsby-image"
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
  WhiteText1,
} from "../atoms"
import { below, useMediaQuery } from "../utilities"
import { theme } from "../utilities"
import iManage from "../../images/iManage.svg"
import iCreate from "../../images/iCreate.svg"
import iAssist from "../../images/iAssist.svg"

export const OldMainService = () => {
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

  const lt600 = useMediaQuery("(max-width: 600px)")
  const lt900 = useMediaQuery("(max-width: 900px)")
  const lt1200 = useMediaQuery("(max-width: 1200px)")
  const lt1600 = useMediaQuery("(max-width: 1600px)")

  const data = useStaticQuery(graphql`
    query {
      lavender: file(relativePath: { eq: "lavenderplant.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pencil: file(relativePath: { eq: "pencil1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const purpleBackground = [
    `linear-gradient(rgba(220, 208, 239, 1), rgba(220, 208, 239, 1))`,
  ].reverse()

  const backgroundFluidImageStack = [
    data.lavender.childImageSharp.fluid,
    // `linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.25))`,
  ].reverse()

  const Service = props => (
    <Flex {...props}>
      <img
        style={{ flex: "1 1 auto", height: props.height, width: "100%" }}
        src={props.service}
      />
    </Flex>
  )

  const Circle = styled(Flex)`
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    text-align: center;
    background-color: ${props => props.theme.colors.purple};
    color: ${props => props.theme.colors.white};

    &:after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
  `

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
            backgroundPosition: lt600 ? "right top" : "right top",
            height: `${lt600 ? "700px" : ""}${
              lt1600 ? "1000px" : ""
            } : "1400px"`,
            height: lt600 ? "700px" : lt1600 ? "1000px" : "1400px",
          }}
        ></BackgroundImage>
        <BackgroundImage
          fluid={purpleBackground}
          style={{
            display: lt600 ? "block" : lt1600 ? "block" : "none",
            height: lt600 ? "700px" : lt1600 ? "300px" : "1400px",
          }}
        ></BackgroundImage>
        <BackgroundImage
          fluid={data.pencil.childImageSharp.fluid}
          style={{
            width: "100%",
            overflow: "auto",
            backgroundPosition: lt600 ? "center" : "center",
            position: "absolute",
            height: "1100px",
            zIndex: 5,
          }}
        >
          <Box
            id="apples"
            sx={{
              height: "1500px",
            }}
          />
        </BackgroundImage>
        <Box
          sx={{
            position: "absolute",
            overflow: "auto",
            width: "100%",
            zIndex: 10,
            borderStyle: "solid",
            borderWidth: `${lt1600 ? "500px" : "700px"} 0 0 ${
              fullWidth >= 0 ? fullWidth : 0
            }px`,
            borderColor: `${theme.colors.lightPurple} transparent transparent transparent`,
          }}
        />
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
        <TransparentCard flex="1 1 auto" alignSelf="center" m={2} width="auto">
          <SectionHeader lineHeight="1">My Services</SectionHeader>
        </TransparentCard>
        <TransparentCard m={2} mt={4} mx={[2, 4, "10%"]}>
          <DarkText1>
            The joy of working with me as your Virtual Assistant is that it
            frees up valuable time for you to focus on those things in your
            business that feed your fire, and eases the stress of trying to “do
            it all.”
          </DarkText1>
        </TransparentCard>
        <Flex
          flexDirection={["column", "row"]}
          alignItems="flex-start"
          flex="1 1 auto"
          mx={[1, 4, "10%"]}
        >
          <Service
            service={iManage}
            maxHeight="480px"
            mt={[3, 4]}
            mr={[0, 3, "2%"]}
          />
          <Service service={iCreate} maxHeight="350px" mt={[5, "25%"]} />
        </Flex>
        <Flex
          flexDirection={["column-reverse", "row"]}
          alignItems="flex-start"
          flex="1 1 auto"
          mx={[1, 4, "10%"]}
        >
          <Circle
            flex={["1 1 auto", "1 1 200px"]}
            mt={[4, 5]}
            mr={[4, 3, "10%", "15%"]}
          >
            <WhiteText1 width={"100%"} fontSize={[3, 1, 2, 3]} p={4}>
              If there’s something you don’t see, just ask! The items I can
              assist you with are so vast and varied it would be difficult to
              list all of them here. There are so many things we can accomplish
              together working as a team for your business success. Let’s talk!
            </WhiteText1>
          </Circle>
          <Service
            service={iAssist}
            maxHeight="365px"
            flex="1 1 200px"
            mt={[3, 5]}
          />
        </Flex>
        <Circle
          mt={[4, 5]}
          mr={[0, "30%", "35%", "40%"]}
          ml={[4, "15%", "20%", "20%"]}
          flex="1 1 auto"
        >
          <WhiteText1
            flex="1 1 auto"
            width={"100%"}
            fontSize={[3, 1, 2, 3]}
            p={4}
          >
            To learn more about working with a Virtual Assistant, click here to
            read the article The Top 10 Things To Know About Professional
            Virtual Assistants on the AssistU website. For any lingering
            questions, there’s also a comprehensive list of frequently asked
            questions also located on the AssistU website here.
          </WhiteText1>
        </Circle>
      </Flex>
    </>
  )
}
