import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Styles } from "../components/styles"
import { Hero, LookNoFurther, PatDenzer, AssistMyClients } from "../components/templateHome"
import { HomePurpleIcon } from "../components/molecules"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <LookNoFurther/>
    <PatDenzer />
    <AssistMyClients />
    <Styles></Styles>
  </Layout>
)

export default IndexPage
