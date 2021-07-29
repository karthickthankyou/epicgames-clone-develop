import { ComponentStory, ComponentMeta } from '@storybook/react'
import GameCard02Section from './GameCard02Section'

export default {
  title: 'organisms/GameCard02Section',
  component: GameCard02Section,
} as ComponentMeta<typeof GameCard02Section>

const Template: ComponentStory<typeof GameCard02Section> = () => (
  <GameCard02Section />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
