import { ComponentStory, ComponentMeta } from '@storybook/react'
import GamePage from './GamePage'

export default {
  title: 'pages/GamePage',
  component: GamePage,
} as ComponentMeta<typeof GamePage>

const Template: ComponentStory<typeof GamePage> = () => <GamePage />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
