import React from "react"
import { Flex, Image } from "rebass"

import { PurpleText1 } from "../atoms/Texts"

import HlBogged from "../../images/hl-bogged.svg"
import HlGrowth from "../../images/hl-growth.svg"
import HlOutOfSync from "../../images/hl-out-of-sync.svg"
import HlOverwhelmed from "../../images/hl-overwhelmed.svg"

const icons = {
  bogged: HlBogged,
  growth: HlGrowth,
  sync: HlOutOfSync,
  overwhelmed: HlOverwhelmed,
}

export const HomePurpleIcon = props => (
  <Flex
    flexDirection="row"
    alignItems="center"
    my={[1, 4, 4]}
    // width={[1, 1 / 2, "auto"]}
  >
    <Image
      mr={3}
      src={icons[props.icon]}
      alt={`${props.icon} icon`}
      minWidth={["50px", "75px", "75px"]}
      maxWidth={["50px", "75px", "75px"]}
    />
    <PurpleText1
      p={["1", "2", "2"]}
      width={["auto", "200px", "200px"]}
      backgroundColor="rgba(235, 235, 237, 0.5)"
    >
      {props.text}
    </PurpleText1>
  </Flex>
)
