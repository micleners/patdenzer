import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {HeroAbout } from "../components/templateAbout"

const About = () => (
  <Layout>
    <SEO title="About" />
    <HeroAbout/>
  </Layout>
)

export default About
