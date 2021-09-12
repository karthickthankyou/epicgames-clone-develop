import { ComponentStory, ComponentMeta } from '@storybook/react'
import image from '@assets/game.jpg'
import { SbReduxProvider } from '@utils/sb'
import GameCard01 from './GameCard01'

export default {
  title: 'molecules/GameCard01',
  component: GameCard01,
  decorators: [SbReduxProvider],
} as ComponentMeta<typeof GameCard01>

const Template: ComponentStory<typeof GameCard01> = ({ game }) => (
  <div className='mt-20'>
    <GameCard01 game={game} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  game: {
    id: '92',
    gameTitle: 'Cyber Punk',
    productionCompany: 'Some production company',
    priceInfo: {},
    price: 10,
    discount: 10,
    displayImage: image,
    inCart: true,
    wishlisted: true,
  },
}
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/KPictILHO3aOaGAkpVBBRJ/EpicRefactor?node-id=14%3A131',
  },
}
