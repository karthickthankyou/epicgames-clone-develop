import { ComponentStory, ComponentMeta } from '@storybook/react'
import image from '@assets/game.jpg'
import { SbReduxProvider } from '@utils/sb'

import GameCard01, { SkeletonCard01 } from './GameCard01'

export default {
  title: 'molecules/GameCardMain',
  component: GameCard01,
  decorators: [SbReduxProvider],
} as ComponentMeta<typeof GameCard01>

const Template: ComponentStory<typeof GameCard01> = (args) => (
  <div className='max-w-xs'>
    <GameCard01 {...args} />
  </div>
)
const SkeletonTemplate: ComponentStory<typeof SkeletonCard01> = () => (
  <div className='max-w-xs'>
    <SkeletonCard01 />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  game: {
    id: '92',
    title: 'Cyber Punk',
    publisherId: 'Some production company',
    price: 10,
    discount: 10,
    imageUrl: image,
    inCart: true,
    wishlisted: false,
  },
}
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/KPictILHO3aOaGAkpVBBRJ/EpicRefactor?node-id=14%3A131',
  },
}
export const Skeleton = SkeletonTemplate.bind({})
Skeleton.args = {}
Skeleton.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/KPictILHO3aOaGAkpVBBRJ/EpicRefactor?node-id=14%3A131',
  },
}
