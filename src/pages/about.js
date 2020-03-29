import React from "react"
import { Link } from "gatsby"

import { Box } from "rebass"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { HeroAbout, AboutSlider } from "../components/templateAbout"

const About = () => (
  <Layout>
    <SEO title="About" />
    <HeroAbout />
    <Box width="100%" padding={5}>
      <AboutSlider />
    </Box>
  </Layout>
)

export default About
