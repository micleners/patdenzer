import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Flex, Box, Text, Image } from "rebass"
import { SectionHeader } from "../atoms"
import { HomeYellowIcon } from "../molecules"
import { theme, StandardLayout } from "../utilities"
import { AccomplishThisBy } from "../organisms"

export const AssistMyClients = props => (
  <Box
    sx={{
      backgroundImage: `linear-gradient(
      170deg,
      ${theme.colors.blue},
      ${theme.colors.blue} 20%,
      ${theme.colors.blue} 40%,
      ${theme.colors.purple} 40%,
      ${theme.colors.purple} 60%,
      ${theme.colors.darkPurple} 60%,
      ${theme.colors.darkPurple} 80%,
      ${theme.colors.white} 80%
    )`,
    }}
  >
    <StandardLayout flexDirection="column" pb="200px">
      <SectionHeader
        m={4}
        pt={4}
        mx="auto"
        color="white"
        textAlign={["center", "center", "left"]}
        fontWeight="light"
      >
        I assist my clients with
      </SectionHeader>
      <Flex
        flexDirection={["column", "row"]}
        justifyContent="space-between"
        alignItems="center"
      >
        <HomeYellowIcon icon="passion" text="Passion"></HomeYellowIcon>
        <HomeYellowIcon icon="experience" text="Experience"></HomeYellowIcon>
        <HomeYellowIcon
          icon="authenticity"
          text="Authenticity"
        ></HomeYellowIcon>
        <HomeYellowIcon
          icon="collaboration"
          text="Collaboration"
        ></HomeYellowIcon>
      </Flex>
      <AccomplishThisBy></AccomplishThisBy>
    </StandardLayout>
  </Box>
)
