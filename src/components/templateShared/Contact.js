import React from "react"
import { Flex, Box } from "rebass"
import { Textarea, Input } from "@rebass/forms"
import { WhiteCard, DarkText1, WhiteText1, PurpleText1 } from "../atoms"

export const Contact = ({ call }) => {
  return (
    <form>
      <Flex
        as="form"
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        bg="yellow"
        p={[1, 3, 4]}
        flexDirection="column"
        alignItems="center"
      >
        <PurpleText1
          fontSize={[4, 5, 6]}
          mx="auto"
          my={[3, 4]}
          textAlign="center"
        >
          {call}
        </PurpleText1>
        <Flex alignItems="flex-start" mb={3} flexDirection={["column", "row"]}>
          <WhiteCard
            flex={["1 1 auto", "1 1 300px"]}
            m={[2, 2, 4]}
            alignItems="flex-start"
            flexDirection="column"
            alignSelf="stretch"
          >
            <DarkText1 pb={4}>The best way to reach me is via email.</DarkText1>
            <DarkText1 pb={4}>
              If you prefer, please feel free to complete the form.
            </DarkText1>
            <DarkText1>
              I look forward to connecting.
            </DarkText1>
          </WhiteCard>
          <WhiteCard
            m={[2, 2, 4]}
            flex={["1 1 auto", "3 1 600px"]}
            alignItems="center"
            flexDirection="column"
            alignSelf="stretch"
          >
            <Flex flexDirection="row" flex="1 1 autopx" width="100%">
              <Box
                as="input"
                sx={{
                  border: "none",
                  borderRadius: "10px",
                }}
                mr={3}
                p={2}
                fontSize={[1, 2, 3]}
                fontWeight="light"
                backgroundColor="grey"
                id="name"
                name="name"
                type="name"
                placeholder="Name"
              />
              <Input
                sx={{
                  border: "none",
                  borderRadius: "10px",
                }}
                ml={3}
                p={2}
                fontSize={[1, 2, 3]}
                fontWeight="light"
                backgroundColor="grey"
                id="email"
                name="email"
                type="email"
                placeholder="E-mail Address"
              />
            </Flex>
            <Textarea
              sx={{
                border: "none",
                borderRadius: "10px",
                fontFamily: "Arial, System-ui, sans-serif",
              }}
              mt={3}
              p={2}
              fontSize={[1, 2, 3]}
              minHeight={"100px"}
              fontWeight="light"
              backgroundColor="grey"
              id="message"
              name="message"
              type="message"
              placeholder="Message"
            />
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <WhiteText1
              as="button"
              mt={3}
              py={2}
              px={3}
              ml="auto"
              mr={0}
              bg="purple"
              type="submit"
              color="white"
              sx={{ borderRadius: "10px" }}
            >
              SUBMIT
            </WhiteText1>
          </WhiteCard>
        </Flex>
      </Flex>
    </form>
  )
}
