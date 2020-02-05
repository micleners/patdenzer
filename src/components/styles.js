import React from "react"
import styled from "@emotion/styled"
import { Box } from "rebass"
import {
  HomeList,
  ServicesText,
  SectionText,
  WhiteList,
  OverlayText,
  ContactText,
  StepsText,
  AmyText,
  SliderText,
  CallText,
} from "./atoms"

export const Styles = props => (
  <>
    <HomeList>Home Hero List</HomeList>
    <SectionText>Homepage sections text</SectionText>
    <WhiteList>Homepage text below yellow icons</WhiteList>
    <OverlayText>Text on homepage overlaying blue and purple</OverlayText>
    <ServicesText>Services text over white circles</ServicesText>
    <ContactText>Text in contact form overlay</ContactText>
    <StepsText>I’ve developed a three-part interview process. The depth of my interview process will help us both see if working together is a perfect fit. I’ll learn about you and you’ll learn about me. With the solid information gained through our discussions, we’ll make the best decision about our partnership and the virtual assistant services I bring to you and your business.</StepsText>
    <AmyText>Amy's testimonial text</AmyText>
    <SliderText>Text inside slide</SliderText>
    <CallText>Text on call duration</CallText>
  </>
)
