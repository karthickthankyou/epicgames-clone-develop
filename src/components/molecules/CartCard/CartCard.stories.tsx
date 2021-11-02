import { ComponentStory, ComponentMeta } from '@storybook/react'
import { defaultAsyncGame } from 'src/types/static'
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
  game: defaultAsyncGame.data || undefined,
}
Primary.parameters = {}
