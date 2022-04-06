import { ComponentStory, ComponentMeta } from '@storybook/react'
import { getImageUrl, getDates } from '@utils/index'
import GameCard04Section from './GameCard04Section'

export default {
  title: 'organisms/GameCard04Section',
  component: GameCard04Section,
} as ComponentMeta<typeof GameCard04Section>

const Template: ComponentStory<typeof GameCard04Section> = (args) => (
  <GameCard04Section {...args} />
)

const { date, nextWeek } = getDates()
export const OneFreeOneMystery = Template.bind({})
OneFreeOneMystery.args = {
  freeGames: [
    {
      id: '460',
      date,
      imageUrl: getImageUrl('460').imageUrl,
      title: 'Cardpocalypse',
    },
  ],
  mysteryGame: [{ date: nextWeek }],
}
OneFreeOneMystery.parameters = {}
export const TwoFreeOneMystery = Template.bind({})
TwoFreeOneMystery.args = {
  freeGames: [
    {
      id: '306',
      date,
      imageUrl: getImageUrl('306').imageUrl,
      title: '3 out of 10, EP 3: "Pivot Like A Champion"',
    },
    {
      id: '460',
      date,
      imageUrl: getImageUrl('460').imageUrl,
      title: 'Cardpocalypse',
    },
  ],
  mysteryGame: [{ date: nextWeek }],
}
TwoFreeOneMystery.parameters = {}
export const ThreeFreeTwoMystery = Template.bind({})
ThreeFreeTwoMystery.args = {
  freeGames: [
    {
      id: '306',
      date,
      imageUrl: getImageUrl('306').imageUrl,
      title: '3 out of 10, EP 3: "Pivot Like A Champion"',
    },
    {
      id: '460',
      date,
      imageUrl: getImageUrl('460').imageUrl,
      title: 'Cardpocalypse',
    },
    {
      id: '290',
      date,
      imageUrl: getImageUrl('290').imageUrl,
      title: 'Diabotical',
    },
  ],
  mysteryGame: [{ date: nextWeek }, { date: nextWeek }],
}
ThreeFreeTwoMystery.parameters = {}
