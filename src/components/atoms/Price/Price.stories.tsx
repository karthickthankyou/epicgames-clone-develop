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

export const ComingSoon = Template.bind({})
ComingSoon.args = {
  comingSoon: true,
}
ComingSoon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/KPictILHO3aOaGAkpVBBRJ/EpicRefactor?node-id=14%3A131',
  },
}

export const NoDiscount = Template.bind({})
NoDiscount.args = {
  price: 10,
  discount: 0,
}
NoDiscount.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/KPictILHO3aOaGAkpVBBRJ/EpicRefactor?node-id=14%3A131',
  },
}

export const Discount = Template.bind({})
Discount.args = {
  price: 10,
  discount: 10,
}
Discount.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/KPictILHO3aOaGAkpVBBRJ/EpicRefactor?node-id=14%3A131',
  },
}

export const Free = Template.bind({})
Free.args = {
  price: 0,
}
Free.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/KPictILHO3aOaGAkpVBBRJ/EpicRefactor?node-id=14%3A131',
  },
}
