import React from "react"
import { Link } from "gatsby"

import { HeroSteps } from "../components/templateGettingStarted"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Getting Started" />
    <HeroSteps />
  </Layout>
)

export default SecondPage
