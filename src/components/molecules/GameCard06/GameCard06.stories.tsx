import { ComponentStory, ComponentMeta } from '@storybook/react'
import { defaultAsyncGame } from 'src/types/static'
import * as PriceStory from '../../atoms/Price/Price.stories'
import image from '../../../assets/game.jpg'
// import { SbReduxProvider } from '../../../utils/sb'
import GameCard06 from './GameCard06'

export default {
  title: 'molecules/GameCard06',
  component: GameCard06,
  // decorators: [SbReduxProvider],
} as ComponentMeta<typeof GameCard06>

const Template: ComponentStory<typeof GameCard06> = ({ game }) => (
  <div className='grid grid-cols-1 gap-2 sm:grid-cols-2'>
    <GameCard06 game={game} />
    <GameCard06 game={game} />
    <GameCard06 game={game} />
    <GameCard06 game={game} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  game: defaultAsyncGame.data || undefined,
}
Primary.parameters = {}
