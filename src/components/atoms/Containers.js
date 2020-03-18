import React from "react"
import { Flex } from "rebass"

export const TransparentCard = props => (
  <Flex
    backgroundColor="overlay"
    p={[3, 3, 4]}
    sx={{
      borderRadius: 20,
    }}
    {...props}
  >
    {props.children}
  </Flex>
)

export const WhiteCard = props => (
  <Flex
    backgroundColor="white"
    p={[3, 3, 4]}
    sx={{
      borderRadius: 20,
    }}
    {...props}
  >
    {props.children}
  </Flex>
)
