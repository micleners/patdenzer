import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import { Flex, Box } from "rebass"
import styled from "@emotion/styled"
import Img from "gatsby-image"

import { below, theme, useMediaQuery } from "../utilities"
import { useStaticQuery, graphql } from "gatsby"
import { WhiteCard, SectionHeader, DarkText1 } from "../atoms"

import acc1Verification from "../../images/acc1-verification.gif"
import acc2Click from "../../images/acc2-click-to-verify.gif"
import acc3Volunteer from "../../images/acc3-volunteer-of-year.gif"
import acc4Supportive from "../../images/acc4-most-supportive.png"
import acc5 from "../../images/2023_winner_volunteer_h.png"
import acc6 from "../../images/2023_winner_volunteer_v.png"

export const AboutAccolades = () => {
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

  const lt900 = useMediaQuery("(max-width: 900px)")

  const Acc1Verification = () => (
    <img src={acc1Verification} style={{ width: "123px" }} />
  )
  const Acc2Click = () => <img src={acc2Click} style={{ width: "123px" }} />
  const Acc3Volunteer = () => (
    <img src={acc3Volunteer} style={{ width: "139px" }} />
  )
  const Acc4Supportive = () => (
    <img src={acc4Supportive} style={{ width: "140px" }} />
  )
  const Acc5 = () => <img src={acc5} style={{ width: "200px" }} />

  return (
    <Box>
      <Box
        sx={{
          display: lt900 ? "none" : "block",
          position: "absolute",
          width: "0",
          height: "0",
          borderStyle: "solid",
          borderWidth: `${fullWidth / 5.67}px ${
            fullWidth >= 0 ? fullWidth : 0
          }px 0 0`,
          borderColor: `${theme.colors.lightPurple} transparent transparent transparent`,
        }}
      ></Box>

      <Flex
      mt={[4, 0, 0]}
        pt={lt900 ? "3" : "100px"}
        ml={[2]}
        mr={[2, 3, 5]}
        alignItems="flex-end"
        justifyContent="flex-end"
        flexWrap="wrap"
      >
        <Flex mr={[2, 2, 3]}>
          <Acc1Verification />
        </Flex>
        <Flex mr={[2, 2, 3]}>
          <Acc5 />
        </Flex>
      </Flex>
      <Flex
        py={5}
        ml={[2]}
        mr={[2, 3, 5]}
        alignItems="flex-end"
        justifyContent="flex-end"
        flexWrap="wrap"
      >
        <Flex
          mt={2}
          width={["100%", "auto"]}
          alignItems={["flex-start", "flex-end"]}
          justifyContent={["space-around", "space-between"]}
        >
          <Flex mr={[2, 2, 3]}>
            <Acc2Click />
          </Flex>
        </Flex>
        <Flex
          mt={[4, 2]}
          width={["100%", "auto"]}
          alignItems={["flex-start", "flex-end"]}
          justifyContent={["space-around", "space-between"]}
        >
          <Flex mr={[2, 2, 3]}>
            <Acc3Volunteer />
          </Flex>
          <Flex mr={[2, 2, 3]}>
            <Acc4Supportive />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
