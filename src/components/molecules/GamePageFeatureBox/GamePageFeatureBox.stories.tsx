import { ComponentStory, ComponentMeta } from '@storybook/react'
import GamePageFeatureBox from './GamePageFeatureBox'

export default {
  title: 'molecules/GamePageFeatureBox',
  component: GamePageFeatureBox,
} as ComponentMeta<typeof GamePageFeatureBox>

const Template: ComponentStory<typeof GamePageFeatureBox> = (args) => (
  <GamePageFeatureBox {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'Key',
  value: 'Value',
}
Primary.parameters = {}
