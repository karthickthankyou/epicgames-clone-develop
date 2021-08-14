import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import GameCard01 from './GameCard01'
import image from '../../../assets/game.jpg'

export default {
  title: 'molecules/GameCard01',
  component: GameCard01,
} as ComponentMeta<typeof GameCard01>

const Template: ComponentStory<typeof GameCard01> = ({
  title,
  productionCompany,
  price,
  discount,
  displayImage,
  inCart,
  wishlisted,
}) => (
  <div className='mt-20'>
    <GameCard01
      title={title}
      productionCompany={productionCompany}
      price={price}
      discount={discount}
      displayImage={displayImage}
      inCart={inCart}
      wishlisted={wishlisted}
    />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  gameTitle: 'Cyber Punk',
  productionCompany: 'Some production company',
  priceInfo: {},
  price: 10,
  discount: 10,
  displayImage: image,
  inCart: true,
  wishlisted: true,
}
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/KPictILHO3aOaGAkpVBBRJ/EpicRefactor?node-id=14%3A131',
  },
}
