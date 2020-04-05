import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { MainService } from "../components/templateServices"
import { Contact } from "../components/templateShared"

const SecondPage = () => (
  <Layout>
    <SEO title="Services" />
    <MainService />
    <Contact call="Questions?"/>
  </Layout>
)

export default SecondPage
