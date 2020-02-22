import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Flex, Box, Text, Image } from "rebass"
import { SectionHeader, PurpleText1 } from "../atoms"
import { HomeYellowIcon } from "../molecules"
import { theme, StandardLayout } from "../utilities"

export const AccomplishThisBy = props => {
  const TextBlock = ({ children }) => (
    <Box p={[2, 3, 4]} pt={0}>
      <PurpleText1 lineHeight="1.5" color="darkPurple" fontWeight="light">
        {children}
      </PurpleText1>
    </Box>
  )
  return (
    <Flex
      bg="overlay"
      p={[2, 3, 4]}
      my={5}
      flexDirection="column"
      sx={{ borderRadius: "10px" }}
    >
      <SectionHeader
        color="darkPurple"
        textAlign={["center", "center", "left"]}
        fontWeight="light"
        py={[3, 3, 0]}
      >
        I accomplish this by...
      </SectionHeader>
      <Box
        mx={3}
        sx={{
          display: "grid",
          gridGap: 4,
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        <TextBlock>
          …forming long-term, mutually trusting, and collaborative relationships
          with clients to creatively assist with their day-to-day administrative
          and/or personal responsibilities.
        </TextBlock>
        <TextBlock>
          …working collaboratively with clients in their business, to find those
          places that prevent them from focusing their energy on what they love
          to do.
        </TextBlock>
        <TextBlock>
          …passionately bringing my professional experience, authenticity and
          values with my clients success in mind.
        </TextBlock>
        <TextBlock>
          …holding my clients’ best interests at heart to diligently and
          perceptively support their needs.
        </TextBlock>
      </Box>
    </Flex>
  )
}
