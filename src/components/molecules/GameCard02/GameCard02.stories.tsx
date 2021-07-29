import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import GameCard02 from './GameCard02'

import image from '../../../assets/game.jpg'

export default {
  title: 'molecules/GameCard02',
  component: GameCard02,
} as ComponentMeta<typeof GameCard02>

const Template: ComponentStory<typeof GameCard02> = ({
  gameTitle,
  description,
  displayImage,
  productionCompany,
  priceInfo,
}) => (
  <GameCard02
    gameTitle={gameTitle}
    description={description}
    displayImage={displayImage}
    productionCompany={productionCompany}
    priceInfo={priceInfo}
  />
)

export const Primary = Template.bind({})
Primary.args = {
  gameTitle: 'Battleground 2009',
  productionCompany: 'Some company',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis pariatur molestiae voluptatem, exercitationem consequatur quibusdam placeat tempore dolore ex aliquid tempora perspiciatis deleniti soluta ipsam.',
  displayImage: image,
  priceInfo: {
    price: 10,
  },
}
Primary.parameters = {}
