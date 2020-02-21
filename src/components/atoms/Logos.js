import PropTypes from "prop-types"
import React from 'react';
import { Flex, Text, Image } from "rebass"

import { PurpleText1 } from "../atoms/Texts"

import BigLogo from "../../images/big-logo.svg"
import SmallLogo from "../../images/small-logo.svg"

const icons = {
  big: BigLogo,
  small: SmallLogo,
}

export const LogoImage = props => (
    <Image
      m={3}
      src={icons[props.icon || "big"]}
      alt={`${props.icon || "big"} icon`}
      width="400px"
    />
)