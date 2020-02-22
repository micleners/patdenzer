import React from "react"
import { Flex, Image } from "rebass"

import { PurpleText1, WhiteText1 } from "../atoms/Texts"

import HlBogged from "../../images/hl-bogged.svg"
import HlGrowth from "../../images/hl-growth.svg"
import HlOutOfSync from "../../images/hl-out-of-sync.svg"
import HlOverwhelmed from "../../images/hl-overwhelmed.svg"

import HbPassion from "../../images/hb_passion.svg"
import HbExperience from "../../images/hb_experience.svg"
import HbAuthenticity from "../../images/hb_authenticity.svg"
import HbCollaboration from "../../images/hb_collaboration.svg"

const icons = {
  bogged: HlBogged,
  growth: HlGrowth,
  sync: HlOutOfSync,
  overwhelmed: HlOverwhelmed,
  passion: HbPassion,
  experience: HbExperience,
  authenticity: HbAuthenticity,
  collaboration: HbCollaboration,
}

export const HomePurpleIcon = props => (
  <Flex flexDirection="row" alignItems="center" my={[1, 4, 4]}>
    <Image
      mr={3}
      src={icons[props.icon]}
      alt={`${props.icon} icon`}
      minWidth={["50px", "75px", "75px"]}
      maxWidth={["50px", "75px", "75px"]}
    />
    <PurpleText1
      alignSelf="center"
      justifySelf="center"
      p={["1", "2", "2"]}
      mb={1}
      width={["auto", "200px", "200px"]}
      backgroundColor="rgba(235, 235, 237, 0.5)"
    >
      {props.text}
    </PurpleText1>
  </Flex>
)

export const HomeYellowIcon = props => (
  <Flex flexDirection="column" alignItems="center" m={[3, 5, 5]} width="100px">
    <Image
      src={icons[props.icon]}
      alt={`${props.icon} icon`}
      minWidth={["75px", "75px", "75px"]}
      maxWidth={["75px", "75px", "75px"]}
    />
    <WhiteText1
      alignSelf="center"
      justifySelf="center"
      p={["2", "2", "2"]}
      mt={2}
      fontSize={["3", "2", "3"]}
    >
      {props.text}
    </WhiteText1>
  </Flex>
)
