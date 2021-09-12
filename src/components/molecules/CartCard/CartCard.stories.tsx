import { ComponentStory, ComponentMeta } from '@storybook/react'
import CartCard from './CartCard'

export default {
  title: 'molecules/CartCard',
  component: CartCard,
} as ComponentMeta<typeof CartCard>

const Template: ComponentStory<typeof CartCard> = ({ game }) => (
  <CartCard game={game} />
)

export const Primary = Template.bind({})
Primary.args = {
  game: {
    price: 10,
    discount: 10,
  },
}
Primary.parameters = {}
