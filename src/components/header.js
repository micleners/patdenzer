import { Link } from "gatsby"
import PropTypes from "prop-types"
import { LogoImage, PurpleText1 } from "../components/atoms"
import { Flex, Text, Box } from "rebass"
import React from "react"

const MenuLink = ({ location, children }) => (
  <PurpleText1
    as={Link}
    color="purple"
    p={2}
    fontWeight="light"
    sx={{
      textDecoration: `none`,
    }}
    to={location}
  >
    {children}
  </PurpleText1>
)
const Header = ({ siteTitle }) => (
  <header>
    <Flex px={2} bg="white" justifyContent="space-between" alignItems="center">
      <Link to="">
        <LogoImage icon="small" height="70px" width="auto" />
      </Link>
      <Flex ml="auto" alignItems="center">
        <MenuLink location="/getting-started">Getting Started</MenuLink>
        <MenuLink location="/services">Services</MenuLink>
        <MenuLink location="/about">About</MenuLink>
      </Flex>
    </Flex>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
