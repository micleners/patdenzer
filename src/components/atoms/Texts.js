import React from "react"
import styled from "@emotion/styled"
import { Text } from "rebass"

// ## Home List/Services List
// font-size: 36px; (2)
// line-height: 41px; (1.15em)
// color: #4A2B7E; (darkPurple)
//
// ## Services Overlay Text
// color: #FFFFFF; (white)

export const HomeList = props => (
  <Text fontSize="2" lineHeight="1.15" color="purple" {...props}>
    {props.children}
  </Text>
)

export const ServicesText = props => (
  <HomeList color="white" {...props}>
    {props.children}
  </HomeList>
)

// ## Section Text
// font-size: 48px; (4)
// line-height: 65px; (1.35em)
// text-align: right;
// letter-spacing: 0.02em;
// color: #4A2B7E; (darkPurple)
//
// ## Home List (White)
// color: #FFFFFF; (white)

export const SectionText = props => (
  <Text
    fontSize="4"
    letterSpacing="0.02em"
    lineHeight="1.35"
    color="darkPurple"
    {...props}
  >
    {props.children}
  </Text>
)

export const WhiteList = props => (
  <SectionText color="white">{props.children}</SectionText>
)

// ## Overlay Text / Contact Message Text
// font-size: 36px; (2)
// line-height: 60px; (1.5em to 1.67em)
// letter-spacing: 0.01em;
// color: #4A2B7E; (darkPurple)
//
// ## Contact Form Text
// color: #929292; (greyText)
//
// ## Steps Text / Nancy Testimonial Text
// line-height: 65px; (1.8)
// color: #000000; (black)

export const OverlayText = props => (
  <Text
    fontSize="2"
    letterSpacing="0.01em"
    lineHeight="1.5"
    color="darkPurple"
    {...props}
  >
    {props.children}
  </Text>
)

export const ContactText = props => (
  <OverlayText color="greyText" {...props}>
    {props.children}
  </OverlayText>
)

export const StepsText = props => (
  <OverlayText color="black" lineHeight="1.8" {...props}>
    {props.children}
  </OverlayText>
)

// ## Amy Testimonial Text
// font-size: 34px; (1)
// line-height: 50px; (1.5em)
// letter-spacing: 0.01em;
// color: #000000; (black)
//
// ## About Slider Text
// line-height: 50px; (1.9em)

export const AmyText = props => (
  <Text
    fontSize="1"
    letterSpacing="0.01em"
    lineHeight="1.5"
    color="black"
    {...props}
  >
    {props.children}
  </Text>
)

export const SliderText = props => (
  <AmyText lineHeight="1.9" {...props}>
    {props.children}
  </AmyText>
)

// ## Call Duration Text
// font-size: 30px; (0)
// line-height: 50px; (1.67em)
// letter-spacing: 0.01em;
// color: #000000; (black)

export const CallText = props => (
  <Text
    fontSize="0"
    letterSpacing="0.01em"
    lineHeight="1.67"
    color="blue"
    {...props}
  >
    {props.children}
  </Text>
)
