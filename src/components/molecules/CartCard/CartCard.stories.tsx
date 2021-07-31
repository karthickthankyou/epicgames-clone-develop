import { ComponentStory, ComponentMeta } from '@storybook/react'
import CartCard from './CartCard'
import image from '../../../assets/game.jpg'

export default {
  title: 'molecules/CartCard',
  component: CartCard,
} as ComponentMeta<typeof CartCard>

const Template: ComponentStory<typeof CartCard> = ({ displayImage }) => (
  <CartCard displayImage={displayImage} />
)

export const Primary = Template.bind({})
Primary.args = {
  displayImage: image,
}
Primary.parameters = {}
