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

import Voicemail from "../../images/manage/Voicemail.svg"
import EmailCampaigns from "../../images/manage/EmailCampaign.svg"
import Calendars from "../../images/manage/Calendar.svg"
import WebContent from "../../images/manage/WebContent.svg"
import Email from "../../images/manage/Email.svg"
import SocialMedia from "../../images/manage/SocialMedia.svg"
import Databases from "../../images/manage/Database.svg"

import PowerPoint from "../../images/create/PPT.svg"
import Spreadsheet from "../../images/create/Spreadsheet.svg"
import Policy from "../../images/create/Policy.svg"
import Newsletter from "../../images/create/Newsletter.svg"

import WordProcessing from "../../images/assist/WordProcessing.svg"
import Proofreading from "../../images/assist/proofreading.svg"
import Editing from "../../images/assist/Editing.svg"
import InternetResearch from "../../images/assist/InternetResearch.svg"

export const MainService = () => {
  const Icon = styled.img`
    width: 100%;
    min-width: 100%;
  `

  const Offering = ({ src, title, mr }) => (
    <Flex flexDirection="column" alignItems="center" mr={mr} mt={4}>
      <Box sx={{ width: ["85px", "100px"], maxWidth: ["85px", "100px"] }}>
        <Icon src={src} />
      </Box>
      <PurpleText1 mt={2} textAlign="center" width={["100px", "120px"]}>
        {title}
      </PurpleText1>
    </Flex>
  )

  const manage = [
    { icon: Voicemail, title: "Voicemail" },
    { icon: EmailCampaigns, title: "Email Campaigns" },
    { icon: Calendars, title: "Calendars & Appointments" },
    { icon: WebContent, title: "Website Content" },
  ]

  const create = [
    { icon: PowerPoint, title: "PowerPoint Presentations" },
    { icon: Spreadsheet, title: "Spreadsheets" },
    { icon: Policy, title: "Policy & Procedure Manuals" },
    { icon: Newsletter, title: "Newsletters" },
  ]

  const assist = [
    { icon: WordProcessing, title: "Word Processing" },
    { icon: Proofreading, title: "Proofreading" },
    { icon: Editing, title: "Editing" },
    { icon: InternetResearch, title: "Internet Research" },
  ]

  const FourIconGroup = ({ icons }) => (
    <>
      <Flex
        justifyContent="space-around"
        pb={3}
        sx={{ display: ["none !important", "flex !important"] }}
      >
        <Offering src={icons[0].icon} title={icons[0].title} mr={[2, 3, 5]} />
        <Offering src={icons[1].icon} title={icons[1].title} mr={[2, 3, 5]} />
        <Offering src={icons[2].icon} title={icons[2].title} mr={[2, 3, 5]} />
        <Offering src={icons[3].icon} title={icons[3].title} />
      </Flex>
      <Flex
        justifyContent="space-around"
        sx={{ display: ["flex", "none"] }}
        mx={3}
        pb={3}
      >
        <Offering src={icons[0].icon} title={icons[0].title} mr={[2, 3, 5]} />
        <Offering src={icons[1].icon} title={icons[1].title} />
      </Flex>
      <Flex
        justifyContent="space-around"
        sx={{ display: ["flex", "none"] }}
        mx={3}
        pb={3}
      >
        <Offering src={icons[2].icon} title={icons[2].title} mr={[2, 3, 5]} />
        <Offering src={icons[3].icon} title={icons[3].title} />
      </Flex>
    </>
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
        <TransparentCard m={2} mt={[4, 5, 4]} mx={[2, 4, "10%"]}>
          <DarkText1>
            The joy of working with me as your Virtual Assistant is that it
            frees up valuable time for you to focus on those things in your
            business that feed your fire, and eases the stress of trying to “do
            it all.”
          </DarkText1>
        </TransparentCard>
        <TransparentCard flexDirection="column" m={2} mt={[4, 5, 4]} mx={[2, 4, "10%"]}>
          <HeavyPurpleHeader mx="auto" my={3}>
            I manage...
          </HeavyPurpleHeader>
          <FourIconGroup icons={manage} />
          <Flex justifyContent="space-around" pb={3} mx={[0, 5]}>
            <Offering src={Email} title="Email" mr={[2, 3, 5]} />
            <Offering src={SocialMedia} title="Social Media" mr={[2, 3, 5]} />
            <Offering src={Databases} title="Databases" />
          </Flex>
        </TransparentCard>
        <TransparentCard flexDirection="column" m={2} mt={[4, 5, 4]} mx={[2, 4, "10%"]}>
          <HeavyPurpleHeader mx="auto" my={2}>
            I create...
          </HeavyPurpleHeader>
          <FourIconGroup icons={create} />
        </TransparentCard>
        <TransparentCard flexDirection="column" m={2} mt={[4, 5, 4]} mx={[2, 4, "10%"]}>
          <HeavyPurpleHeader mx="auto" my={3}>
            I assist with...
          </HeavyPurpleHeader>
          <FourIconGroup icons={assist} />
        </TransparentCard>
        <WhiteCard m={2} mt={[4, 5, 4]} mx={[2, 4, "10%"]} bg="purple">
          <WhiteText1>
            If there’s something you don’t see, just ask! The items I can assist
            you with are so vast and varied it would be difficult to list all of
            them here. There are so many things we can accomplish together
            working as a team for your business success. Let’s talk!
          </WhiteText1>
        </WhiteCard>
        <TransparentCard m={2} mt={[4, 5, 4]} mx={[2, 4, "10%"]}>
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
