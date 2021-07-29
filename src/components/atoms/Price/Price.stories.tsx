import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Price from './Price'

export default {
  title: 'atoms/Price',
  component: Price,
} as ComponentMeta<typeof Price>

const Template: ComponentStory<typeof Price> = ({
  price,
  discount,
  comingSoon,
}) => <Price price={price} discount={discount} comingSoon={comingSoon} />

export const Primary = Template.bind({})
Primary.args = {
  price: 10,
  discount: 0,
  comingSoon: true,
}
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/KPictILHO3aOaGAkpVBBRJ/EpicRefactor?node-id=14%3A131',
  },
}
