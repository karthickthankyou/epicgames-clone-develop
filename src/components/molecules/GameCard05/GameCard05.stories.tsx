import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { getDates } from '@organisms/GameCard04Section/GameCard04Section'
import GameCard05 from './GameCard05'

export default {
  title: 'molecules/GamePageCard',
  component: GameCard05,
} as ComponentMeta<typeof GameCard05>

const Template: ComponentStory<typeof GameCard05> = (args) => (
  <div className='max-w-sm'>
    <GameCard05 {...args} />
  </div>
)

const { date, nextWeek } = getDates()

export const Primary = Template.bind({})
Primary.args = {
  game: {
    id: '099',
    developer: 'Karthick Ragavendran',
    publisherId: 'Oxygen Studios',
    title: 'Superposition',
    price: 399,
    discount: 33,

    releaseDate: date,
    imageUrl:
      'https://res.cloudinary.com/thankyou/image/upload/v1621430541/sample.jpg',
  },
}
Primary.parameters = {}

export const Purchased = Template.bind({})
Purchased.args = {
  game: {
    id: '099',
    developer: 'Karthick Ragavendran',
    publisherId: 'Oxygen Studios',
    title: 'Superposition',
    price: 399,
    discount: 33,
    purchased: true,

    releaseDate: date,
    imageUrl:
      'https://res.cloudinary.com/thankyou/image/upload/v1621430541/sample.jpg',
  },
}
Purchased.parameters = {}

export const Wishlisted = Template.bind({})
Wishlisted.args = {
  game: {
    id: '099',
    developer: 'Karthick Ragavendran',
    publisherId: 'Oxygen Studios',
    title: 'Superposition',
    price: 399,
    discount: 33,
    wishlisted: true,

    releaseDate: date,
    imageUrl:
      'https://res.cloudinary.com/thankyou/image/upload/v1621430541/sample.jpg',
  },
}
Wishlisted.parameters = {}
export const AddedToCart = Template.bind({})
AddedToCart.args = {
  game: {
    id: '099',
    developer: 'Karthick Ragavendran',
    publisherId: 'Oxygen Studios',
    title: 'Superposition',
    price: 399,
    discount: 33,
    inCart: true,

    releaseDate: date,
    imageUrl:
      'https://res.cloudinary.com/thankyou/image/upload/v1621430541/sample.jpg',
  },
}
AddedToCart.parameters = {}
