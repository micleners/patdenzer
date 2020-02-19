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
  <Flex flexDirection="row" alignItems="center" my={5}>
    <Image
      mr={3}
      src={icons[props.icon]}
      alt={`${props.icon} icon`}
      width={["50px", "75px"]}
    />
    <PurpleText1 pb={["1", "2", "2"]} width="200px">
      {props.text}
    </PurpleText1>
  </Flex>
)
