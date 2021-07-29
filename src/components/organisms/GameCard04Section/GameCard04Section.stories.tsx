import { ComponentStory, ComponentMeta } from '@storybook/react'
import GameCard04Section from './GameCard04Section'

export default {
  title: 'organisms/GameCard04Section',
  component: GameCard04Section,
} as ComponentMeta<typeof GameCard04Section>

const Template: ComponentStory<typeof GameCard04Section> = () => (
  <GameCard04Section />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
