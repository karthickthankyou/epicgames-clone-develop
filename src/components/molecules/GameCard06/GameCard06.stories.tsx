import { ComponentStory, ComponentMeta } from '@storybook/react'
import * as PriceStory from '@atoms/Price/Price.stories'
import image from '@assets/game.jpg'
import { SbReduxProvider } from '@utils/sb'
import { getRandomDate } from '@utils/index'
import GameCard06 from './GameCard06'

export default {
  title: 'molecules/GameCardWishlist',
  component: GameCard06,
  decorators: [SbReduxProvider],
} as ComponentMeta<typeof GameCard06>

const Template: ComponentStory<typeof GameCard06> = (args) => (
  <GameCard06 {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'Cyberpunk 2077',
  publisherId: 'CD PROJEKT RED',
  price: PriceStory.NoDiscount.args,
  imageUrl: image,
  date: getRandomDate(),
}
Primary.parameters = {}
