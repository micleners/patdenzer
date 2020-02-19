import React from "react"
import styled from "@emotion/styled"
import { Box, Card } from "rebass"
import {
  PurpleText1,
  WhiteText1,
  GreyText1,
  DarkText1,
  DarkText2,
  BlueText2,
  TransparentCard,
  BigLogoImage,
} from "./atoms"
import { HomePurpleIcon } from "./molecules"
import { Hero } from "./templateHome"

export const Styles = props => (
  <>
    <HomePurpleIcon icon="growth" text="Is your buisness growing?" />
    <HomePurpleIcon icon="bogged" text="Are you bogged down by details?" />
    <HomePurpleIcon icon="overwhelmed" text="Are you feeling overwhelmed?" />
    <HomePurpleIcon icon="sync" text="Are you feeling out of sync?" />

    <Box backgroundColor="darkPurple">
      <BigLogoImage />
    </Box>

    <Hero></Hero>

    <PurpleText1>Home Hero List</PurpleText1>
    <WhiteText1>Services text over white circles</WhiteText1>
    <GreyText1>Text in contact form overlay</GreyText1>
    <TransparentCard>
      <DarkText1>
        I’ve developed a three-part interview process. The depth of my interview
        process will help us both see if working together is a perfect fit. I’ll
        learn about you and you’ll learn about me. With the solid information
        gained through our discussions, we’ll make the best decision about our
        partnership and the virtual assistant services I bring to you and your
        business.
      </DarkText1>
    </TransparentCard>

    <DarkText2>Amy's testimonial text</DarkText2>
    {/* <SliderText>Text inside slide</SliderText> */}
    <BlueText2>Text on call duration</BlueText2>
  </>
)
