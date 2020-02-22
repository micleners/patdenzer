import { Link } from "gatsby"
import PropTypes from "prop-types"
import { LogoImage, PurpleText1 } from "../components/atoms"
import { Flex, Text, Box } from "rebass"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <Flex px={2} bg="white" justifyContent="space-between" alignItems="center">
      <LogoImage icon="small" height="70px" width="auto" />
      <Flex ml="auto" alignItems="center">
        <PurpleText1 color="darkPurple" p={2} fontWeight="bold">
          Rebass
        </PurpleText1>
        <Link
          sx={{
            textDecoration: `none`,
          }}
          to="#!"
        >
          Profile
        </Link>
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
