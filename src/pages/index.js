import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Styles } from "../components/styles"
import {
  Hero,
  LookNoFurther,
  PatDenzer,
  AssistMyClients,
  TestimonialAmy,
} from "../components/templateHome"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <LookNoFurther />
    <PatDenzer />
    <AssistMyClients />
    <TestimonialAmy />
  </Layout>
)

export default IndexPage
