import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import GameCard03 from './GameCard03'
import image from '../../../assets/game.jpg'

export default {
  title: 'molecules/GameCard03',
  component: GameCard03,
} as ComponentMeta<typeof GameCard03>

const Template: ComponentStory<typeof GameCard03> = ({
  gameTitle,
  priceInfo,
  displayImage,
  inCart,
  wishlisted,
}) => (
  <GameCard03
    gameTitle={gameTitle}
    priceInfo={priceInfo}
    displayImage={displayImage}
    inCart={inCart}
    wishlisted={wishlisted}
  />
)

export const Primary = Template.bind({})
Primary.args = {
  gameTitle: 'Cyber Punk',
  priceInfo: {
    price: 10,
  },
  displayImage: image,
  inCart: true,
  wishlisted: true,
}
Primary.parameters = {}
