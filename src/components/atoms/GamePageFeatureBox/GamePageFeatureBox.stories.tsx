import { ComponentStory, ComponentMeta } from '@storybook/react'
import GamePageFeatureBox from './GamePageFeatureBox'

export default {
  title: 'components/atoms/GamePageFeatureBox',
  component: GamePageFeatureBox,
} as ComponentMeta<typeof GamePageFeatureBox>

const Template: ComponentStory<typeof GamePageFeatureBox> = () => (
  <GamePageFeatureBox title='string' value='string' />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
