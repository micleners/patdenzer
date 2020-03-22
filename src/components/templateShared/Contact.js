import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Box } from "rebass"
import { Textarea, Input } from "@rebass/forms"
import { css, jsx } from "@emotion/core"
import BgImage from "../molecules/BgImage"
import BackgroundImage from "gatsby-background-image"
import { HomePurpleIcon, HomeLogo } from "../molecules"
import { WhiteCard, DarkText1, WhiteText1, PurpleText1 } from "../atoms"
import { below, useMediaQuery } from "../utilities"

export const Contact = ({ call }) => {
  return (
    <>
      <Flex bg="yellow"
          p={[1, 3, 4]} flexDirection="column">
        <PurpleText1 fontSize={[4, 5, 6]} mx="auto" my={[3, 4]}>
          {call}
        </PurpleText1>
        <Flex alignItems="flex-start" mb={3} flexDirection={["column", "row"]}>
          <WhiteCard
            flex={["0 0 0", "1 1 300px"]}
            m={[2, 2, 4]}
            alignItems="center"
            flexDirection="column"
            alignSelf="stretch"
          >
            <DarkText1 pb={4}>The best way to reach me is via email.</DarkText1>
            <DarkText1>
              Or, please feel free to complete the form. Either way, I’ll get
              back to you as soon as I can!
            </DarkText1>
          </WhiteCard>
          <WhiteCard
            m={[2, 2, 4]}
            flex={["0 0 0", "3 1 600px"]}
            alignItems="center"
            flexDirection="column"
            alignSelf="stretch"
          >
            <Flex flexDirection="row" width="100%">
              <Input
                sx={{
                  border: "none",
                  borderRadius: "10px",
                }}
                mr={3}
                p={2}
                fontSize={[1, 2, 3]}
                flex="1 1 0px"
                fontWeight="light"
                backgroundColor="grey"
                id="name"
                name="name"
                type="name"
                placeholder="NAME"
              />
              <Input
                sx={{
                  border: "none",
                  borderRadius: "10px",
                }}
                ml={3}
                p={2}
                fontSize={[1, 2, 3]}
                flex="1 1 0px"
                fontWeight="light"
                backgroundColor="grey"
                id="email"
                name="email"
                type="email"
                placeholder="EMAIL ADDRESS"
              />
            </Flex>
            <Textarea
              sx={{
                border: "none",
                borderRadius: "10px",
              }}
              mt={3}
              p={2}
              fontSize={[1, 2, 3]}
              flex="1 1 0px"
              height={"100px"}
              minHeight={"100px"}
              fontWeight="light"
              backgroundColor="grey"
              id="message"
              name="message"
              type="message"
              placeholder="MESSAGE"
            />
            <WhiteText1
              mt={3}
              py={2}
              px={3}
              ml="auto"
              mr={0}
              bg="purple"
              color="white"
              sx={{ borderRadius: "10px" }}
            >
              SUBMIT
            </WhiteText1>
          </WhiteCard>
        </Flex>
      </Flex>
    </>
  )
}
