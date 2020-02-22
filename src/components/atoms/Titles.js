import React from "react"
import styled from "@emotion/styled"
import { Text } from "rebass"

export const MenuHeader = props => (
  <Text
    fontSize={[2, 2, 2]}
    letterSpacing="0.01em"
    lineHeight="1.5"
    color="purple"
    {...props}
  >
    {props.children}
  </Text>
)

export const PageHeader = props => (
  <Text
    as="h1"
    fontSize={[5, 6, 6]}
    letterSpacing="0.01em"
    lineHeight="1.35"
    color="darkPurple"
    {...props}
  >
    {props.children}
  </Text>
)

export const SectionHeader = props => (
  <Text
    as="h2"
    fontSize={[4, 5, 5]}
    letterSpacing="0.01em"
    lineHeight="1.35"
    fontWeight="light"
    color="darkPurple"
    {...props}
  >
    {props.children}
  </Text>
)

export const WhiteSectionHeader = props => (
  <Text
    as="h2"
    fontSize={[4, 5, 5]}
    letterSpacing="0.01em"
    lineHeight="1.35"
    color="white"
    {...props}
  >
    {props.children}
  </Text>
)

export const HeavyPurpleHeader = props => (
  <Text
    fontWeight="600"
    fontSize={[3, 4, 4]}
    lineHeight="1.15"
    color="purple"
    {...props}
  >
    {props.children}
  </Text>
)
