import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Hero,
  LookNoFurther,
  PatDenzer,
  AssistMyClients,
  TestimonialAmy,
} from "../components/templateHome"
import {
  Contact
} from "../components/templateShared"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <LookNoFurther />
    <PatDenzer />
    <AssistMyClients />
    <TestimonialAmy />

    <Contact call="Ready to talk?"/>
  </Layout>
)

export default IndexPage
