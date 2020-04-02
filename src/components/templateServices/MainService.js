import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Box } from "rebass"
import styled from "@emotion/styled"

import { MainServiceBackground } from "../organisms"
import {
  TransparentCard,
  SectionHeader,
  DarkText1,
  HeavyPurpleHeader,
  WhiteText1,
  WhiteCard,
  PurpleText1,
} from "../atoms"
import Voicemail from "../../images/iManage/voicemail.svg"
import EmailCampaigns from "../../images/iManage/email_campaign.svg"
import Calendars from "../../images/iManage/calendars_appointments.svg"
import WebContent from "../../images/iManage/web_content.svg"
import Email from "../../images/iManage/email.svg"
import SocialMedia from "../../images/iManage/social_media.svg"
import Databases from "../../images/iManage/database.svg"

export const MainService = () => {
  const Icon = styled.img`
    width: 100%;
    min-width: 100%;
  `

  const Offering = ({ src, title, mr }) => (
    <Flex flexDirection="column" alignItems="center" mr={mr} mt={4}>
      <Box sx={{ width: ["70px", "100px"], maxWidth: ["70px", "100px"] }}>
        <Icon src={src} />
      </Box>
      <PurpleText1 mt={2} textAlign="center" width={["100px", "120px"]}>
        {title}
      </PurpleText1>
    </Flex>
  )

  return (
    <>
      <MainServiceBackground />
      <Flex
        m={[1, 3, 4]}
        my={2}
        flexDirection="column"
        flex="1 1 0px"
        sx={{
          height: "auto",
          zIndex: 100,
        }}
      >
        <TransparentCard flex="1 1 auto" alignSelf="center" m={2} width="auto">
          <SectionHeader lineHeight="1">My Services</SectionHeader>
        </TransparentCard>
        <TransparentCard m={2} mt={4} mx={[2, 4, "10%"]}>
          <DarkText1>
            The joy of working with me as your Virtual Assistant is that it
            frees up valuable time for you to focus on those things in your
            business that feed your fire, and eases the stress of trying to “do
            it all.”
          </DarkText1>
        </TransparentCard>
        <TransparentCard flexDirection="column" m={2} mt={4} mx={[2, 4, "10%"]}>
          <HeavyPurpleHeader mx="auto" my={3}>
            I manage...
          </HeavyPurpleHeader>
          <Flex
            justifyContent="space-around"
            sx={{ display: ["none !important", "flex !important"] }}
          >
            <Offering src={Voicemail} title="Voicemail" mr={[2, 5]} />
            <Offering
              src={EmailCampaigns}
              title="Email Campaigns"
              mr={[2, 5]}
            />
            <Offering
              src={Calendars}
              title="Calendars & Appointments"
              mr={[2, 5]}
            />
            <Offering src={WebContent} title="Website Content" />
          </Flex>
          <Flex
            justifyContent="space-around"
            sx={{ display: ["flex", "none"] }}
            mx={5}
          >
            <Offering src={Voicemail} title="Voicemail" mr={[5]} />
            <Offering src={EmailCampaigns} title="Email Campaigns" />
          </Flex>
          <Flex
            justifyContent="space-around"
            sx={{ display: ["flex", "none"] }}
            mx={5}
          >
            <Offering
              src={Calendars}
              title="Calendars & Appointments"
              mr={[5]}
            />
            <Offering src={WebContent} title="Website Content" />
          </Flex>
          <Flex justifyContent="space-around" mx={[0, 5]}>
            <Offering src={Email} title="Email" mr={[2, 5]} />
            <Offering src={SocialMedia} title="Social Media" mr={[2, 5]} />
            <Offering src={Databases} title="Databases" />
          </Flex>
        </TransparentCard>
        <TransparentCard m={2} mt={4} mx={[2, 4, "10%"]}>
          <HeavyPurpleHeader mx="auto" my={3}>
            I create...
          </HeavyPurpleHeader>
        </TransparentCard>
        <TransparentCard m={2} mt={4} mx={[2, 4, "10%"]}>
          <HeavyPurpleHeader mx="auto" my={3}>
            I assist with...
          </HeavyPurpleHeader>
        </TransparentCard>
        <WhiteCard m={2} mt={4} mx={[2, 4, "10%"]} bg="purple">
          <WhiteText1>
            If there’s something you don’t see, just ask! The items I can assist
            you with are so vast and varied it would be difficult to list all of
            them here. There are so many things we can accomplish together
            working as a team for your business success. Let’s talk!
          </WhiteText1>
        </WhiteCard>
        <TransparentCard m={2} mt={4} mx={[2, 4, "10%"]}>
          <DarkText1>
            To learn more about working with a Virtual Assistant, click here to
            read the article The Top 10 Things To Know About Professional
            Virtual Assistants on the AssistU website. For any lingering
            questions, there’s also a comprehensive list of frequently asked
            questions also located on the AssistU website here.
          </DarkText1>
        </TransparentCard>
      </Flex>
    </>
  )
}
