import React from "react"
import { Link } from "gatsby"

import { Box } from "rebass"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  HeroAbout,
  AboutSlider,
  AboutSlideAlt,
  AboutAccolades,
} from "../components/templateAbout"

const About = () => (
  <Layout>
    <SEO title="About" />
    <HeroAbout />
    <AboutSlider />
    <AboutSlideAlt />
    <AboutAccolades />
  </Layout>
)

export default About
