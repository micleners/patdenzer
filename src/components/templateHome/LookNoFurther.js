import React, { useEffect, useState } from "react"
import { Flex, Box } from "rebass"
import { PurpleText1, SectionHeader } from "../atoms"
import { theme } from "../utilities"

export const LookNoFurther = props => {
  const [fullWidth, setFullWidth] = useState()
  const [width, setWidth] = useState()

  useEffect(() => {
    try {
      setWidth((window ? window.innerWidth : 1000) - 300)
      const handleResize = () =>
        setWidth((window ? window.innerWidth : 1000) - 300)
      if (window) {
        console.log(width)
        window.addEventListener("resize", handleResize)
        return () => {
          window.removeEventListener("resize", handleResize)
        }
      }
    } catch (e) {
      console.log(e)
    }
  })

  useEffect(() => {
    try {
      setFullWidth(window ? window.innerWidth : 1000)
      const handleResize = () => setFullWidth(window ? window.innerWidth : 1000)
      if (window) {
        window.addEventListener("resize", handleResize)
        console.log(fullWidth)
        return () => {
          window.removeEventListener("resize", handleResize)
        }
      }
    } catch (e) {
      console.log(e)
    }
  })

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          width: "0",
          height: "0",
          borderStyle: "solid",
          borderWidth: [
            `100px ${fullWidth >= 0 ? fullWidth : 0}px 0 0`,
            `200px ${width}px 0 0`,
            `200px ${width}px 0 0`,
          ],
          borderColor: `${theme.colors.purple} transparent transparent transparent`,
        }}
      ></Box>
      <Box mt={5}>
        <Flex
          flexDirection="column"
          maxWidth="960px"
          m="auto"
          alignItems="center"
        >
          <SectionHeader
            textAlign="right"
            m={"4"}
            pt={[4, 0, 0]}
            ml={"auto"}
            color="darkPurple"
          >
            Then look no further.
          </SectionHeader>
          <PurpleText1
            m={"4"}
            mb={5}
            mt={3}
            color="darkPurple"
            lineHeight="1.5"
          >
            When things feel off-center, out of sync, and overwhelming, you need
            someone to help you re-connect in your business and life, with what
            you are passionate about and love, by assisting with the day-to-day
            administrative tasks that may have you bogged down. My virtual
            assistant services can assist you with this and help to regain flow
            for you and your business!
          </PurpleText1>
        </Flex>
      </Box>
    </>
  )
}
