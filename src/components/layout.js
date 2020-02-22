import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { useStaticQuery, graphql } from "gatsby"

import { theme } from "./utilities"
import Header from "./header"

import { Text } from "rebass"
import { Styles } from "./styles"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={theme => css`
          html,
          body {
            font-family: ${theme.fonts.text};
            color: ${theme.colors.darkPurple};
            margin: 0;
          }
        `}
      />
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
