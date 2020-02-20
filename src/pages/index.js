import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Styles } from "../components/styles"
import { Hero } from "../components/templateHome"
import { HomePurpleIcon } from "../components/molecules"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero></Hero>
    <Styles></Styles>
  </Layout>
)

export default IndexPage
