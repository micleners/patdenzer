import React from "react"
import styled from "@emotion/styled"
import { Card } from "rebass"

export const TransparentCard = props => (
  <Card
    backgroundColor="overlay"
    p={[1, 3, 4]}
    sx={{
      borderRadius: 20,
    }}
    {...props}
  >
    {props.children}
  </Card>
)

export const WhiteCard = props => (
  <Card
    backgroundColor="white"
    p={[1, 3, 4]}
    sx={{
      borderRadius: 20,
    }}
    {...props}
  >
    {props.children}
  </Card>
)
