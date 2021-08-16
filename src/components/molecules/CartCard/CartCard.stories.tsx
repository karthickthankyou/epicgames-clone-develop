import { ComponentStory, ComponentMeta } from '@storybook/react'
import CartCard from './CartCard'
import image from '../../../assets/game.jpg'

export default {
  title: 'molecules/CartCard',
  component: CartCard,
} as ComponentMeta<typeof CartCard>

const Template: ComponentStory<typeof CartCard> = ({ game }) => (
  <CartCard game={game} />
)

export const Primary = Template.bind({})
Primary.args = {
  game: {},
}
Primary.parameters = {}
