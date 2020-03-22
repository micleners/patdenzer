import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { MainService } from "../components/templateServices"

const SecondPage = () => (
  <Layout>
    <SEO title="Services" />
    <MainService />
  </Layout>
)

export default SecondPage
