import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import GameCard01Section from './GameCard01Section'

export default {
  title: 'organisms/GameCard01Section',
  component: GameCard01Section,
} as ComponentMeta<typeof GameCard01Section>

const Template: ComponentStory<typeof GameCard01Section> = ({
  heading,
  buttonText,
}) => <GameCard01Section heading={heading} buttonText={buttonText} />

export const Primary = Template.bind({})
Primary.args = {
  heading: 'Most Popular',
  buttonText: 'view more',
}
Primary.parameters = {}
