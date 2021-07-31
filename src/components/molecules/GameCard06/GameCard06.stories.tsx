import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import GameCard06 from './GameCard06'
import * as PriceStory from '../../atoms/Price/Price.stories'
import image from '../../../assets/game.jpg'

export default {
  title: 'molecules/GameCard06',
  component: GameCard06,
} as ComponentMeta<typeof GameCard06>

const Template: ComponentStory<typeof GameCard06> = ({
  gameTitle,
  productionCompany,
  price,
  displayImage,
  date,
  review,
}) => (
  <GameCard06
    gameTitle={gameTitle}
    productionCompany={productionCompany}
    price={price}
    displayImage={displayImage}
    date={date}
    review={review}
  />
)

export const Primary = Template.bind({})
Primary.args = {
  gameTitle: 'Cyberpunk 2077',
  productionCompany: 'CD PROJEKT RED',
  price: PriceStory.Primary.args,
  displayImage: image,
  date: '2021-06-10T08:30:00Z',
  review:
    'An open world you can get lost in and continue finding new things to do. An open world you can get lost in and continue finding new things to do',
}
Primary.parameters = {}
