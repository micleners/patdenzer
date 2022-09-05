import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Box, Image } from "rebass"
import Img from "gatsby-image"
import { css, jsx } from "@emotion/core"

import styled from "@emotion/styled"
import { PurpleText1, SectionHeader } from "../atoms"
import { StandardLayout, below } from "../utilities"

export const PatCurtis = props => {
  const data = useStaticQuery(graphql`
    query {
      patImage: file(relativePath: { eq: "pat_headshot.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const HeadShotLarge = styled(Img)`
    height: 100%;
    min-width: 500px;

    ${below[1000]`
        min-width: 350px;
    `}

    ${below[900]`
      display: none;
    `}
  `

  const HeadShotSmall = styled(Img)`
    display: none;
    ${below[900]`
      display: inline;
      align-self: center;
      height: 100%;
      min-width: 250px;
      width: 250px;
    `}
  `

  return (
    <Flex bg="yellow" flexDirection={["column", "column", "row"]}>
      <HeadShotLarge
        fluid={data.patImage.childImageSharp.fluid}
        title={props.title}
        mobileHeight={props.mobileHeight}
      />
      <Flex
        flexDirection="column"
        mr="auto"
        maxWidth="960px"
        justifyContent="center"
        p="0 1.0875rem 1.45rem"
      >
        <SectionHeader m={"4"} color="darkPurple" textAlign={["center", "center", "left"]} fontWeight="light">
          Hello, I’m Pat Curtis
        </SectionHeader>
        <HeadShotSmall fluid={data.patImage.childImageSharp.fluid} />
        <PurpleText1
          m={"4"}
          mt={["4", "4", "0"]}
          mb={["3", "3", "4"]}
          color="darkPurple"
          lineHeight="1.5"
          alignText="right"
          css={css`
            ${below[1000]`
              font-size: 1.2em;
            `}
          `}
        >
          As a virtual assistant, I relieve the day-to-day stress and details of
          my clients business operations that are drawing them away from their
          life work and help them reconnect with their flow. They gain time for
          what they love and together we bring your business and life back in
          sync.
        </PurpleText1>
      </Flex>
    </Flex>
  )
}
