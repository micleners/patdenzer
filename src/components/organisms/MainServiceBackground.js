import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box } from "rebass"

import BackgroundImage from "gatsby-background-image"
import { theme, useMediaQuery } from "../utilities"

export const MainServiceBackground = () => {
  const [fullWidth, setFullWidth] = useState()

  useEffect(() => {
    try {
      setFullWidth(window ? window.innerWidth : 1000)
      const handleResize = () => setFullWidth(window ? window.innerWidth : 1000)
      if (window) {
        window.addEventListener("resize", handleResize)
        return () => {
          window.removeEventListener("resize", handleResize)
        }
      }
    } catch (e) {}
  })

  const lt600 = useMediaQuery("(max-width: 600px)")
  const lt900 = useMediaQuery("(max-width: 900px)")
  const lt1200 = useMediaQuery("(max-width: 1200px)")
  const lt1600 = useMediaQuery("(max-width: 1600px)")

  const data = useStaticQuery(graphql`
    query {
      lavender: file(relativePath: { eq: "lavenderplant.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pencil: file(relativePath: { eq: "pencil1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const backgroundFluidImageStack = [
    data.lavender.childImageSharp.fluid,
    // `linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.25))`,
  ].reverse()

  const purpleBackground = [
    `linear-gradient(rgba(220, 208, 239, 1), rgba(220, 208, 239, 1))`,
  ].reverse()
  return (
    <Box
      sx={{
        position: "absolute",
        left: "0px",
        top: "0px",
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      <BackgroundImage
        fluid={backgroundFluidImageStack}
        style={{
          backgroundPosition: lt600 ? "right top" : "right top",
          height: `${lt600 ? "700px" : ""}${lt1600 ? "1000px" : ""} : "1400px"`,
          height: lt600 ? "700px" : lt1600 ? "1000px" : "1400px",
        }}
      ></BackgroundImage>
      <BackgroundImage
        fluid={purpleBackground}
        style={{
          display: lt600 ? "block" : lt1600 ? "block" : "none",
          height: lt600 ? "700px" : lt1600 ? "300px" : "1400px",
        }}
      ></BackgroundImage>
      <BackgroundImage
        fluid={data.pencil.childImageSharp.fluid}
        style={{
          width: "100%",
          overflow: "auto",
          backgroundPosition: lt600 ? "center" : "center",
          position: "absolute",
          height: "1100px",
          zIndex: 5,
        }}
      >
        <Box
          id="apples"
          sx={{
            height: "1500px",
          }}
        />
      </BackgroundImage>
      <Box
        sx={{
          position: "absolute",
          overflow: "auto",
          width: "100%",
          zIndex: 10,
          borderStyle: "solid",
          borderWidth: `${lt1600 ? "500px" : "700px"} 0 0 ${
            fullWidth >= 0 ? fullWidth : 0
          }px`,
          borderColor: `${theme.colors.lightPurple} transparent transparent transparent`,
        }}
      />
    </Box>
  )
}
