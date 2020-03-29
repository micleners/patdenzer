import React from "react"
import { Flex } from "rebass"

import { TransparentCard, SectionHeader, DarkText1 } from "../atoms"
import { below, useMediaQuery } from "../utilities"

export const HeroAbout = () => {
  return (
    <>
      <Flex
        py={[1, 3, 4]}
        my={2}
        bg="darkPurple"
        flexDirection="column"
        flex="1 1 0px"
        sx={{
          height: "auto",
        }}
      >
        <TransparentCard alignSelf="center" m={2} width="auto">
          <SectionHeader lineHeight="1">About Me</SectionHeader>
        </TransparentCard>
        <TransparentCard my={2} mx={[2, 5, "10%"]}>
          <DarkText1>
            If taking a look at my life, you will see the love-filled, somewhat
            turbulent, ever changing and growing path it has taken. Amidst
            quiet, serene pools of water there are also raging rivers, turbulent
            rapids, and fast moving waterfalls. I’m someone who faces life’s
            celebrations, and difficulties, with love, patience, integrity,
            determination and a down-to-earth, optimistic attitude.
          </DarkText1>
        </TransparentCard>
      </Flex>
    </>
  )
}
