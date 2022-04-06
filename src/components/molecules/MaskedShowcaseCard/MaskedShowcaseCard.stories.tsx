import { ComponentStory, ComponentMeta } from '@storybook/react'
import { sampleGame } from '@epictypes/static'
import MaskedShowcaseCard from './MaskedShowcaseCard'

export default {
  title: 'molecules/MaskedShowcaseCard',
  component: MaskedShowcaseCard,
} as ComponentMeta<typeof MaskedShowcaseCard>

const Template: ComponentStory<typeof MaskedShowcaseCard> = (args) => (
  // @ts-ignore
  <MaskedShowcaseCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  id: '002',
  keyUnit: '127K',
  comment: 'current players',
}
Primary.parameters = {}
