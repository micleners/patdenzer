import React from "react"
import { Flex,Image } from "rebass"
import BigLogo from "../../images/new_logo.svg"

export const HomeLogo = props => (
  <Flex backgroundColor="darkPurple" {...props}>
    <Image
      src={BigLogo}
      alt="big logo"
      width={["300px", "100%", "100%"]}
      height="auto"
      mb="auto"
      mx="auto"
    />
  </Flex>
)
