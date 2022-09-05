import PropTypes from "prop-types"
import React from 'react';
import { Flex, Text, Image } from "rebass"

import { PurpleText1 } from "../atoms/Texts"

import BigLogo from "../../images/new_logo.svg"
import SmallLogo from "../../images/new_logo_header.svg"

const icons = {
  big: BigLogo,
  small: SmallLogo,
}

export const LogoImage = props => (
    <Image
      src={icons[props.icon || "big"]}
      alt={`${props.icon || "big"} icon`}
      width={["300px", "100%", "100%"]}
      height="auto"
      {...props}
    />
)