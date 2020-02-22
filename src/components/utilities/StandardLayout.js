import React from "react"

import { Flex } from "rebass"

export const StandardLayout = props => (
    <Flex
      sx={{
        margin: `0 auto`,
        maxWidth: props.maxWidth || 960,
        padding: props.padding || `0 1.0875rem 1.45rem`,
      }}
      {...props}
    >
      {props.children}
    </Flex>
)
