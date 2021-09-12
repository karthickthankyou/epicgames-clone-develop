import { ComponentStory, ComponentMeta } from '@storybook/react'
import { sampleGame } from '@epictypes/static'
import MaskedShowcaseCard from './MaskedShowcaseCard'

export default {
  title: 'molecules/MaskedShowcaseCard',
  component: MaskedShowcaseCard,
} as ComponentMeta<typeof MaskedShowcaseCard>

const Template: ComponentStory<typeof MaskedShowcaseCard> = () => (
  // @ts-ignore
  <MaskedShowcaseCard game={sampleGame} comment='hello' />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
