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
  AboutTestimonial,
} from "../components/templateAbout"
import { Contact } from "../components/templateShared"

const About = () => (
  <Layout>
    <SEO title="About" />
    <HeroAbout />
    <AboutSlider />
    <AboutSlideAlt />
    <AboutAccolades />
    <AboutTestimonial />
    <Contact call="Let’s Talk." />
  </Layout>
)

export default About
