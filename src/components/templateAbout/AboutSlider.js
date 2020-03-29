import React from "react"
import Slider from "react-slick"
import { Flex } from "rebass"

import { useStaticQuery, graphql } from "gatsby"
import { WhiteCard, SectionHeader, DarkText1 } from "../atoms"

export const AboutSlider = () => {
  const data = useStaticQuery(graphql`
    query {
      lavender: file(relativePath: { eq: "lavenderplant.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pencil: file(relativePath: { eq: "pencil1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }

  return (
    <Slider {...settings}>
      <div>
        <Flex bg="yellow" py={4} minHeight="400px">
          <WhiteCard my={2} mx={[2, 5, "10%"]}>
            <DarkText1>
              If taking a look at my life, you will see the love-filled,
              somewhat turbulent, ever changing and growing path it has taken.
              Amidst quiet, serene pools of water there are also raging rivers,
              turbulent rapids, and fast moving waterfalls. I’m someone who
              faces life’s celebrations, and difficulties, with love, patience,
              integrity, determination and a down-to-earth, optimistic attitude.
            </DarkText1>
          </WhiteCard>
        </Flex>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  )
}
