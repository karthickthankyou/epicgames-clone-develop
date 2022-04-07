import { ComponentStory, ComponentMeta } from '@storybook/react'
import { sampleGames } from '@utils/data'
import GameCard02Section from './GameCard02Section'

export default {
  title: 'organisms/GameCard02Section',
  component: GameCard02Section,
} as ComponentMeta<typeof GameCard02Section>

const Template: ComponentStory<typeof GameCard02Section> = (args) => (
  <GameCard02Section {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  games: sampleGames.slice(0, 6),
}
Primary.parameters = {}
