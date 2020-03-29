import React from "react"
import { Link } from "gatsby"

import { HeroSteps } from "../components/templateGettingStarted"
import { Contact } from "../components/templateShared"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Getting Started" />
    <HeroSteps />
    <Contact call="Ready to schedule a call?" />
  </Layout>
)

export default SecondPage
