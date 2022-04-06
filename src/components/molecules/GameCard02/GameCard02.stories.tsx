import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import image from '@assets/game.jpg'
import GameCard02 from './GameCard02'

export default {
  title: 'molecules/GameCardSub',
  component: GameCard02,
} as ComponentMeta<typeof GameCard02>

const Template: ComponentStory<typeof GameCard02> = (args) => (
  <div className='max-w-xs'>
    <GameCard02 {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'Battleground 2009',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis pariatur molestiae voluptatem, exercitationem consequatur quibusdam placeat tempore dolore ex aliquid tempora perspiciatis deleniti soluta ipsam.',
  imageUrl: image,
  price: 10,
}

export const Free = Template.bind({})
Free.args = {
  title: 'Battleground 2009',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis pariatur molestiae voluptatem, exercitationem consequatur quibusdam placeat tempore dolore ex aliquid tempora perspiciatis deleniti soluta ipsam.',
  imageUrl: image,
  price: 0,
}
