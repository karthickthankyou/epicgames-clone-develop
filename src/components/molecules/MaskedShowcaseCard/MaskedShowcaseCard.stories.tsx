import { ComponentStory, ComponentMeta } from '@storybook/react'
import { sampleGame } from '../../../types/static'
import MaskedShowcaseCard from './MaskedShowcaseCard'

export default {
  title: 'molecules/MaskedShowcaseCard',
  component: MaskedShowcaseCard,
} as ComponentMeta<typeof MaskedShowcaseCard>

const Template: ComponentStory<typeof MaskedShowcaseCard> = () => (
  <MaskedShowcaseCard game={sampleGame} keyUnit='title' comment='hello' />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
