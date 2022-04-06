import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Game } from '@epictypes/index'
import { shuffle } from '@utils/index'
import HomeShowcase from './HomeShowcase'

const sampleHomeGames = [
  {
    title: 'Inside',
    tags: ['Puzzle', 'Adventure', 'Indie'],
    videoId: 'yDm6PAgNohU',
    price: 595,
    id: '555',
    releaseDate: '2016-07-06T18:30:00.000Z',
    description:
      'Hunted and alone, a boy finds himself drawn into the center of a dark project.',
    publisherId: 'playdead',
    homeScreen: 'yDm6PAgNohU',
    discount: 0,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F555.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F555.jpg?alt=media',
  },

  {
    notes: ['HIGHEST_DISCOUNT'],
    price: 2161,
    discount: 90,
    publisherId: '505-games',
    releaseDate: '2019-08-26T18:30:00.000Z',
    description:
      'After a secretive agency in New York is invaded by an otherworldly threat, you become the new Director struggling to regain Control.',
    id: '467',
    tags: ['Action', 'Adventure'],
    title: 'Control',
    homeScreen: 'PT5yMfC9LQM',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F467.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F467.jpg?alt=media',
  },
  {
    discount: 0,
    tags: ['Shooter', 'Horror', 'Action'],
    description:
      'Back 4 Blood is a thrilling cooperative first-person shooter with an intense 4 player co-op narrative campaign, competitive multiplayer as human or Ridden, and frenetic gameplay that keeps you in the action.',
    anticipatedBy: 119,
    price: 2999,
    publisherId: 'warner-bros.-games',
    homeScreen: 'UkP8dOQrIyk',
    releaseDate: '2021-10-11T18:30:00.000Z',
    title: 'Back 4 Blood',
    id: '183',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F183.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F183.jpg?alt=media',
  },
  {
    publisherId: 'cd-projekt-red',
    title: 'Cyberpunk 2077',
    description:
      'Enter the massive open world of Night City, a place that sets new standards in terms of visuals, complexity and depth.',
    releaseDate: '2020-12-09T18:30:00.000Z',
    tags: ['Action', 'RPG', 'Open World', 'Adventure'],
    discount: 0,
    homeScreen: 'Z8_JEaoYcOs',
    id: '201',
    price: 2999,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F201.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F201.jpg?alt=media',
  },
  {
    id: '337',
    homeScreen: 'Mpn-MC2B6Zc',
    price: 4173,
    tags: ['Action', 'Action-Adventure', 'Open World', 'Adventure'],
    description:
      'From legendary game creator Hideo Kojima comes an all-new, genre-defying experience. Sam Bridges must brave a world utterly transformed by the Death Stranding. Carrying the disconnected remnants of our future in his hands, he embarks on a journey to reconnect the shattered world.',
    discount: 0,
    publisherId: '505-games',
    releaseDate: '2020-07-13T18:30:00.000Z',
    title: 'DEATH STRANDING',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F337.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F337.jpg?alt=media',
  },
  {
    publisherId: 'rockstar-games',
    title: 'Red Dead Redemption 2',
    discount: 0,
    price: 3199,
    releaseDate: '2019-11-04T18:30:00.000Z',
    id: '447',
    homeScreen: 'eaW0tYpxyp0',
    tags: ['Action', 'Narration', 'Open World'],
    description:
      'Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, Red Dead Redemption 2 is an epic tale of honor and loyalty at the dawn of the modern age. Includes Red Dead Redemption 2: Story Mode and Red Dead Online.',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F447.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F447.jpg?alt=media',
  },
  {
    publisherId: 'ubisoft',
    discount: 0,
    releaseDate: '2020-10-28T18:30:00.000Z',
    title: 'Watch Dogs: Legion',
    description:
      'In Watch Dogs Legion, you get to build a resistance to take back a near-future London that is facing its downfall.',
    tags: ['Action', 'Open World', 'Adventure'],
    price: 2999,
    homeScreen: 'L20nioDjCxU',
    id: '234',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F234.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F234.jpg?alt=media',
  },
] as unknown as Game[]

export default {
  title: 'organisms/HomeShowcase',
  component: HomeShowcase,
} as ComponentMeta<typeof HomeShowcase>

const Template: ComponentStory<typeof HomeShowcase> = (args) => (
  <HomeShowcase {...args} />
)

export const Few = Template.bind({})
Few.args = {
  games: sampleHomeGames.slice(0, 3),
}
Few.parameters = {}
export const More = Template.bind({})
More.args = {
  games: sampleHomeGames,
}
More.parameters = {}
