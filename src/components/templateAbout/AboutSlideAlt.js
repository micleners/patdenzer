import React from "react"
import Slider from "react-slick"
import { Flex, Box } from "rebass"
import styled from "@emotion/styled"
import Img from "gatsby-image"

import { below } from "../utilities"
import { useStaticQuery, graphql } from "gatsby"
import { WhiteCard, SectionHeader, DarkText1 } from "../atoms"

export const AboutSlideAlt = () => {
  const data = useStaticQuery(graphql`
    query {
      drop: file(relativePath: { eq: "about-drop.png" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      flower: file(relativePath: { eq: "about-flower.png" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      sand: file(relativePath: { eq: "about-sand.png" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      waterfall: file(relativePath: { eq: "about-waterfall.png" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const Slide = props => (
    <Flex
      py={3}
      px={[2, 5]}
      bg={props.bg}
      flexDirection="column"
      alignItems="center"
    >
      <Img
        fixed={props.image}
        style={{
          width: "250px",
          minWidth: "250px",
        }}
      />
      <WhiteCard mb={2}>
        <DarkText1>{props.text}</DarkText1>
      </WhiteCard>
    </Flex>
  )

  return (
    <Box display={["block", "block", "none"]}>
      <Slide
        bg="yellow"
        image={data.waterfall.childImageSharp.fixed}
        text="I am passionate about what I do to assist my clients. If taking a look at my life, you will see the love-filled, somewhat turbulent, ever changing and growing path it has taken. Amidst quiet, serene pools of water there are also raging rivers, turbulent rapids, and fast moving waterfalls. I’m someone who faces life’s celebrations, and difficulties, with love, patience, integrity, determination and a down-to-earth, optimistic attitude."
      />
      <Slide
        bg="blue"
        image={data.sand.childImageSharp.fixed}
        text="Throughout my life I’ve found that every person is a unique individual and has his or her own distinctive set of skills, talents, values and gifts. I’m no different. Over the last 35+ years I’ve held a variety of administrative positions in the corporate arena, educational field, and performing arts. I have developed quite a unique skill set which I bring to my clients."
      />
      <Slide
        bg="yellow"
        image={data.flower.childImageSharp.fixed}
        text="In 2013, I desired something more for my life. I craved a deeper level of fulfillment and meaning in my career and to work with clients who brought inspiration and tools to help others achieve their unlimited potential. Having made the decision to take my skills from years as an administrative assistant to the next level, I attended the Virtual Mentoring Program at AssistU, the gold standard for Virtual Assistant training and mentoring. I graduated in January of 2014 and am now fulfilling my life dream of owning my own business. Today I bring my own gifts and talents to others and support clients in bringing their gifts to the world."
      />
      <Slide
        bg="blue"
        image={data.drop.childImageSharp.fixed}
        text="I’ve “grown up ” with technology, from the mag card word processors of yesterday to the technology of today. My skills are continuously evolving and I continue to learn on a daily basis. I’m constantly amazed by our technological world and how it can bring us together with the touch of a button. Even more, I love the connections I’ve been able to form through this wondrous virtual community."
      />
    </Box>
  )
}
