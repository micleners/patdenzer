import React from "react"
import styled from "@emotion/styled"
import { Text } from "rebass"

export const GreyText1 = props => (
  <Text
    fontSize={[1, 2, 3]}
    letterSpacing="0.01em"
    lineHeight="1.5"
    color="greyText"
    {...props}
  >
    {props.children}
  </Text>
)

export const DarkText1 = props => (
  <Text
    fontSize={[1, 2, 3]}
    letterSpacing="0.01em"
    lineHeight="1.35"
    fontWeight="light"
    color="black"
    {...props}
  >
    {props.children}
  </Text>
)

export const PurpleText1 = props => (
  <Text
    fontSize={[1, 2, 3]}
    lineHeight="1.15"
    color="darkPurple"
    fontWeight="light"
    {...props}
  >
    {props.children}
  </Text>
)

export const WhiteText1 = props => (
  <Text fontSize={[1, 2, 3]} lineHeight="1.15" color="white" {...props}>
    {props.children}
  </Text>
)

export const DarkText2 = props => (
  <Text
    fontSize={[0, 1, 2]}
    letterSpacing="0.01em"
    lineHeight="1.35"
    fontWeight="light"
    color="black"
    {...props}
  >
    {props.children}
  </Text>
)

export const BlueText2 = props => (
  <Text
    fontSize={[0, 1, 2]}
    letterSpacing="0.01em"
    lineHeight="1.67"
    color="blue"
    {...props}
  >
    {props.children}
  </Text>
)
