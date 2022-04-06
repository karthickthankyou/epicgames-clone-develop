import { ComponentStory, ComponentMeta } from '@storybook/react'
import CartCard from './CartCard'

export default {
  title: 'molecules/CartCard',
  component: CartCard,
} as ComponentMeta<typeof CartCard>

const Template: ComponentStory<typeof CartCard> = (args) => (
  <CartCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  game: {
    imageUrl:
      'https://res.cloudinary.com/thankyou/image/upload/v1640355637/nike/revolt-164_6wVEHfI-unsplash_rb5kjn.jpg',
    title: 'Cyber punk',
    price: 10,
    discount: 10,
  },
}
