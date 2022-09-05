import { Link } from "gatsby"
import PropTypes from "prop-types"
import { LogoImage, PurpleText1 } from "../components/atoms"
import { Flex, Text, Box } from "rebass"
import styled from "@emotion/styled"
import { theme } from "./utilities"
import React, { useState } from "react"
import { Burger } from "./atoms"

const MenuLink = props => (
  <PurpleText1
    as={Link}
    color="purple"
    p={2}
    fontWeight="body"
    sx={{
      textDecoration: `none`,
    }}
    to={props.location}
    {...props}
  >
    {props.children}
  </PurpleText1>
)
const Header = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const SlidingMenu = styled(Flex)`
    background: ${theme.colors.white};
    position: absolute;
    right: 0;
    top: 50px;
    z-index: 50;
    /* transform: translateY(calc(-140%)); */
    /* transform: ${({ open }) =>
      open ? "translateY(0)" : "translateY(-140%)"}; */
    display: ${({ open }) => (open ? "flex" : "none")};
  `

  const StickyHeader = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
  `

  return (
    <StickyHeader>
      <Flex
        px={2}
        bg="white"
        justifyContent="space-between"
        alignItems="center"
      >
        <SlidingMenu flexDirection="column" open={isMenuOpen}>
          <MenuLink
            location="/getting-started"
            p={3}
            pb={1}
            fontSize={[2, 2, 3]}
          >
            Getting Started
          </MenuLink>
          <MenuLink location="/services" p={3} pb={1} fontSize={[2, 2, 3]}>
            Services
          </MenuLink>
          <MenuLink location="/about" p={3} fontSize={[2, 2, 3]}>
            About
          </MenuLink>
        </SlidingMenu>
        <Link to="/">
          <LogoImage icon="small" height="50px" width="150px" mt="5px" />
        </Link>
        <Flex ml="auto" alignItems="center" display={["none", "flex"]}>
          <MenuLink location="/getting-started" display={["none", "flex"]}>
            Getting Started
          </MenuLink>
          <MenuLink location="/services" display={["none", "flex"]}>
            Services
          </MenuLink>
          <MenuLink location="/about" display={["none", "flex"]}>
            About
          </MenuLink>
        </Flex>
        <Box display={["flex", "none"]}>
          <Burger onClick={open => setIsMenuOpen(!isMenuOpen)}>
            <div />
            <div />
            <div />
          </Burger>
        </Box>
      </Flex>
    </StickyHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
