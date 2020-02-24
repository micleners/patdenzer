import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Flex } from "rebass"
import { theme } from "../utilities"
import styled from "@emotion/styled"

import { below } from "../utilities"

const Parent = styled(Flex)`
  position: relative;
  background-color: ${({ bc }) => bc};
  background-image: ${({ bci }) => bci};
  backgroundimage: linear-gradient(
    170deg,
    ${props => props.theme.colors.darkPurple},
    ${props => props.theme.colors.darkPurple} 20%,
    ${props => props.theme.colors.white} 20%,
    ${props => props.theme.colors.white} 40%,
    ${props => props.theme.colors.white} 60%,
    ${props => props.theme.colors.white} 60%
  );
  z-index: 1;
`

const FakeBgImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ height }) => height};
  ${below[600]`
    display: none;
  `}

  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: "object-fit: cover !important; object-position: 0% 0% !important;";
    z-index: 0;
  }

  @media screen and (max-width: 600px) {
    height: ${({ mobileHeight }) => mobileHeight};
  }
  z-index: 0;
`

const Content = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`

const BgImage = props => (
  <Parent theme={theme} bc={props.overlayColor} {...props}>
    <FakeBgImage
      fluid={props.fluid}
      title={props.title}
      height={props.height}
      mobileHeight={props.mobileHeight}
    />
    <Content className={props.className}>{props.children}</Content>
  </Parent>
)

BgImage.propTypes = {
  fluid: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string,
  mobileHeight: PropTypes.string,
  overlayColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
}

BgImage.defaultProps = {
  height: null,
  mobileHeight: null,
  overlayColor: "transparent",
  children: null,
  className: null,
}

export default BgImage
