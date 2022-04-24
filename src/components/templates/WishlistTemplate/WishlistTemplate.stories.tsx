import { ComponentStory, ComponentMeta } from '@storybook/react'
import { sampleWishlistGames, sampleWishlistIds } from '@utils/data'
import WishlistTemplate from './WishlistTemplate'

export default {
  title: 'templates/WishlistTemplate',
  component: WishlistTemplate,
} as ComponentMeta<typeof WishlistTemplate>

const Template: ComponentStory<typeof WishlistTemplate> = (args) => (
  <WishlistTemplate {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  wishlist: sampleWishlistGames,
  wishlistIds: sampleWishlistIds,
}
Primary.parameters = {}
export const NoGames = Template.bind({})
NoGames.args = {
  wishlist: [],
  wishlistIds: [],
}
