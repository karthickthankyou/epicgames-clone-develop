import { Game, GameStatus } from '@epictypes/index'
import { getDates } from '@utils/index'

export const sampleSimpleGames = [
  {
    title: 'Back 4 Blood',
    id: '183',
    price: 2999,
  },
  {
    title: 'The Architect: Paris',
    id: '043',
    price: 429,
  },

  {
    title: 'Riders Republic',
    id: '135',
    price: 2999,
  },
  {
    title: "Luna's Fishing Garden",
    id: '002',
    price: 279,
  },

  {
    title: 'Beasts of Maravilla Island',
    id: '003',
    price: 239,
  },
  {
    title: 'Open Country',
    id: '007',
    price: 829,
  },
  {
    title: 'WE ARE FOOTBALL',
    id: '005',
    price: 1580,
  },
  {
    title: 'Chicory: A Colorful Tale',
    id: '004',
    price: 469,
  },
  {
    title: 'Genshin Impact',
    id: '010',
    price: 0,
  },
  {
    title: 'Backbone',
    id: '012',
    price: 589,
  },
  {
    title: 'Chivalry 2',
    id: '013',
    price: 939,
  },
  {
    title: 'Edge Of Eternity',
    id: '011',
    price: 0,
  },
  {
    title: 'Slipways',
    id: '015',
    price: 399,
  },
  {
    title: 'Necromunda: Hired Gun',
    id: '018',
    price: 1599,
  },
  {
    title: 'Going Medieval',
    id: '016',
    price: 589,
  },
  {
    title: 'Stonefly',
    id: '017',
    price: 529,
  },
  {
    title: 'Timelie - Game of the Year Edition',
    id: '020',
    price: 429,
  },
  {
    title: 'The Longest Road on Earth',
    id: '021',
    price: 239,
  },
  {
    title: 'GRAVEN',
    id: '023',
    price: 699,
  },
  {
    title: 'Truck Driver',
    id: '022',
    price: 709,
  },
  {
    title: 'Tennis Manager 2021',
    id: '025',
    price: 1059,
  },
  {
    title: 'BIOMUTANT',
    id: '024',
    price: 1889,
  },
  {
    title: 'Knockout City™',
    id: '019',
    price: 1499,
  },
  {
    title: 'Wanna Survive',
    id: '027',
    price: 349,
  },
]

export const sampleSimilarGames = [
  {
    id: '475',
    tags: ['Action', 'Narration'],
    price: 899,
    discount: 0,
    publisherId: 'quantic-dream',
    title: 'Heavy Rain',
    releaseDate: '2019-06-23T18:30:00.000Z',
    similarity: 0.3682642493,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F475.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F475.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    id: '472',
    tags: ['Action', 'Narration'],
    price: 899,
    discount: 75,
    publisherId: 'quantic-dream',
    title: 'Beyond: Two Souls',
    releaseDate: '2019-07-21T18:30:00.000Z',
    similarity: 0.3164696904,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F472.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F472.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    id: '554',
    tags: ['Exploration', 'Adventure'],
    price: 595,
    discount: 25,
    publisherId: '505-games',
    title: 'ABZU',
    releaseDate: '2016-08-01T18:30:00.000Z',
    similarity: 0.0514440084,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F554.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F554.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    id: '445',
    tags: ['Puzzle', 'First Person'],
    price: 595,
    discount: 50,
    publisherId: 'pillow-castle',
    title: 'Superliminal',
    releaseDate: '2019-11-11T18:30:00.000Z',
    similarity: 0.0448611782,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F445.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F445.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    id: '327',
    tags: ['Action', 'Adventure', 'Platformer'],
    price: 458,
    discount: 0,
    publisherId: 'team17-digital-ltd.',
    title: 'Ageless',
    releaseDate: '2020-07-27T18:30:00.000Z',
    similarity: 0.0427193277,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F327.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F327.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    id: '137',
    tags: ['City Builder', 'Strategy', 'Indie'],
    price: 589,
    discount: 0,
    publisherId: 'mode-7',
    title: 'The Colonists',
    releaseDate: '2020-09-14T18:30:00.000Z',
    similarity: 0.0409310946,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F137.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F137.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    id: '196',
    tags: ['Puzzle', 'Indie'],
    price: 599,
    discount: 0,
    publisherId: 'focus-home-interactive',
    title: 'Shady Part of Me',
    releaseDate: '2020-12-09T18:30:00.000Z',
    similarity: 0.0383911387,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F196.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F196.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    id: '006',
    tags: ['Simulation', 'Strategy'],
    price: 699,
    discount: 0,
    publisherId: 'handy-games-gmbh',
    title: 'Little Big Workshop',
    releaseDate: '2019-10-16T18:30:00.000Z',
    similarity: 0.0352441151,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F006.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F006.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    id: '092',
    tags: ['Action', 'RPG', 'Action-Adventure', 'Adventure'],
    price: 3999,
    discount: 66,
    publisherId: 'square-enix',
    title: 'KINGDOM HEARTS HD 2.8 Final Chapter Prologue',
    releaseDate: '2021-03-29T18:30:00.000Z',
    similarity: 0.0190478935,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F092.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F092.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    id: '003',
    tags: ['Casual', 'Adventure', 'Indie'],
    price: 239,
    discount: 0,
    publisherId: 'whitethorn-digital',
    title: 'Beasts of Maravilla Island',
    releaseDate: '2021-06-11T18:30:00.000Z',
    similarity: 0,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F003.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F003.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
]

export const sampleGame = {
  price: 1899,
  title: 'Detroit: Become Human',
  publisherId: 'quantic-dream',
  id: '427',
  tags: ['Action', 'Narration'],
  releaseDate: '2019-12-11T18:30:00.000Z',
  discount: 0,
  developer: 'Quantic Dream',
  languages: '',
  longDesc: [
    'FREEDOM HAS A PRICE',
    'Detroit 2038. Technology has evolved to a point where human like androids are everywhere. They speak, move and behave like human beings, but they are only machines serving humans.',
    'Play three distinct androids and see a world at the brink of chaos – perhaps our future - through their eyes. Your very decisions will dramatically alter how the game’s intense, branching narrative plays out. ',
    'You will face moral dilemmas and decide who lives or dies. With thousands of choices and dozens of possible endings, how will you affect the future of Detroit and humanity’s destiny?',
  ],
  description: '',
  spec: {
    recommended: '',
    minimum: '',
  },
  items: [
    {
      id: 475,
      s: 0.3682642493,
    },
    {
      id: 472,
      s: 0.3164696904,
    },
    {
      id: 554,
      s: 0.0514440084,
    },
    {
      id: 445,
      s: 0.0448611782,
    },
    {
      id: 327,
      s: 0.0427193277,
    },
    {
      id: 137,
      s: 0.0409310946,
    },
    {
      id: 196,
      s: 0.0383911387,
    },
    {
      id: 6,
      s: 0.0352441151,
    },
    {
      s: 0.0190478935,
      id: 92,
    },
    {
      id: 3,
      s: 0,
    },
    {
      id: 239,
      s: 0,
    },
    {
      s: 0,
      id: 264,
    },
    {
      id: 340,
      s: 0,
    },
    {
      s: 0,
      id: 388,
    },
    {
      id: 2,
      s: 0,
    },
    {
      s: 0,
      id: 5,
    },
    {
      id: 0,
      s: 0,
    },
    {
      s: 0,
      id: 1,
    },
    {
      s: 0,
      id: 4,
    },
    {
      s: 0,
      id: 9,
    },
    {
      id: 7,
      s: 0,
    },
    {
      id: 8,
      s: 0,
    },
    {
      s: 0,
      id: 11,
    },
    {
      id: 14,
      s: 0,
    },
    {
      s: 0,
      id: 10,
    },
    {
      s: 0,
      id: 15,
    },
    {
      s: 0,
      id: 17,
    },
    {
      id: 16,
      s: 0,
    },
    {
      s: 0,
      id: 12,
    },
    {
      s: 0,
      id: 13,
    },
  ],
  platform: ['Windows'],
  imageUrl:
    'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F427.jpg?alt=media',
  subImageUrl:
    'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F427.jpg?alt=media',
  wishlisted: false,
  inCart: false,
  purchased: false,
}

export const sampleGames = [
  {
    title: 'Viscerafest',
    rating: 51,
    discount: 50,
    id: '030',
    publisherId: '1c-entertainment',
    platform: ['Windows'],
    tags: ['Action', 'Shooter'],
    releaseDate: '2021-05-19T18:30:00.000Z',
    price: 489,
    objectID: 'cadf2caf2bf23_dashboard_generated_id',
    _highlightResult: {
      title: {
        value: 'Viscerafest',
        matchLevel: 'none',
        matchedWords: [],
      },
    },
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F030.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F030.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: 'Just Die Already',
    rating: 63,
    discount: 0,
    id: '029',
    publisherId: 'curve-digital',
    platform: ['Windows'],
    tags: ['Open World', 'Comedy', 'Adventure'],
    releaseDate: '2021-05-19T18:30:00.000Z',
    notes: 'RECENTLY_UPDATED',
    price: 459,
    objectID: 'c58c722a83217_dashboard_generated_id',
    _highlightResult: {
      title: {
        value: 'Just Die Already',
        matchLevel: 'none',
        matchedWords: [],
      },
    },
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F029.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F029.jpg?alt=media',
    wishlisted: true,
    inCart: false,
    purchased: false,
  },
  {
    title: 'Grindstone',
    rating: 78,
    discount: 0,
    id: '031',
    publisherId: 'capybara-games',
    platform: ['Windows'],
    tags: ['Puzzle', 'Indie'],
    releaseDate: '2021-05-19T18:30:00.000Z',
    price: 469,
    objectID: '98c82526c5bc9_dashboard_generated_id',
    _highlightResult: {
      title: {
        value: 'Grindstone',
        matchLevel: 'none',
        matchedWords: [],
      },
    },
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F031.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F031.jpg?alt=media',
    wishlisted: true,
    inCart: false,
    purchased: false,
  },
  {
    title: 'Suzerain',
    rating: 71,
    discount: 0,
    id: '034',
    publisherId: 'fellow-traveller',
    platform: ['Windows', 'Mac OS'],
    tags: ['Adventure', 'Indie'],
    releaseDate: '2021-05-19T18:30:00.000Z',
    price: 349,
    objectID: '1b94cf47d4bb6d_dashboard_generated_id',
    _highlightResult: {
      title: {
        value: 'Suzerain',
        matchLevel: 'none',
        matchedWords: [],
      },
    },
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F034.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F034.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: 'Mayhem in Single Valley',
    rating: 42,
    discount: 0,
    id: '028',
    publisherId: 'tinybuild',
    platform: ['Windows'],
    tags: ['Action', 'Adventure', 'Indie'],
    releaseDate: '2021-05-19T18:30:00.000Z',
    price: 349,
    objectID: '1547cd662906a8_dashboard_generated_id',
    _highlightResult: {
      title: {
        value: 'Mayhem in Single Valley',
        matchLevel: 'none',
        matchedWords: [],
      },
    },
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F028.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F028.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: "Aerial_Knight's Never Yield",
    rating: 54,
    discount: 0,
    id: '035',
    publisherId: 'headup',
    platform: ['Windows'],
    tags: ['Action', 'Indie'],
    releaseDate: '2021-05-18T18:30:00.000Z',
    price: 459,
    objectID: 'fadbf32bba746_dashboard_generated_id',
    _highlightResult: {
      title: {
        value: "Aerial_Knight's Never Yield",
        matchLevel: 'none',
        matchedWords: [],
      },
    },
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F035.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F035.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: 'Days Gone',
    rating: 88,
    discount: 0,
    id: '037',
    publisherId: 'sony-interactive-entertainment',
    platform: ['Windows'],
    tags: ['Action', 'Survival', 'Open World'],
    releaseDate: '2021-05-18T18:30:00.000Z',
    price: 2999,
    objectID: '1415697b682f73_dashboard_generated_id',
    _highlightResult: {
      title: {
        value: 'Days Gone',
        matchLevel: 'none',
        matchedWords: [],
      },
    },
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F037.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F037.jpg?alt=media',
    wishlisted: false,
    inCart: true,
    purchased: false,
  },
  {
    title: 'Siege Survival - Gloria Victis',
    rating: 68,
    discount: 0,
    id: '036',
    publisherId: 'ravenscourt',
    platform: ['Windows'],
    tags: ['Simulation', 'Survival'],
    releaseDate: '2021-05-17T18:30:00.000Z',
    price: 569,
    objectID: '1ce7611165d5a7_dashboard_generated_id',
    _highlightResult: {
      title: {
        value: 'Siege Survival - Gloria Victis',
        matchLevel: 'none',
        matchedWords: [],
      },
    },
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F036.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F036.jpg?alt=media',
    wishlisted: false,
    inCart: true,
    purchased: false,
  },
  {
    title: 'Realpolitiks 2',
    rating: 83,
    discount: 0,
    id: '042',
    publisherId: '1c-entertainment',
    platform: ['Windows', 'Mac OS'],
    tags: ['Strategy', 'Indie'],
    releaseDate: '2021-05-12T18:30:00.000Z',
    price: 899,
    objectID: '98fef6dae6627_dashboard_generated_id',
    _highlightResult: {
      title: {
        value: 'Realpolitiks 2',
        matchLevel: 'none',
        matchedWords: [],
      },
    },
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F042.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F042.jpg?alt=media',
    wishlisted: false,
    inCart: true,
    purchased: false,
  },
  {
    title: 'Hundred Days - Winemaking Simulator',
    rating: 83,
    discount: 0,
    id: '041',
    publisherId: 'broken-arms-games',
    platform: ['Windows', 'Mac OS'],
    tags: ['Simulation', 'Strategy', 'Indie'],
    releaseDate: '2021-05-12T18:30:00.000Z',
    price: 589,
    objectID: '1fb77c767239cb_dashboard_generated_id',
    _highlightResult: {
      title: {
        value: 'Hundred Days - Winemaking Simulator',
        matchLevel: 'none',
        matchedWords: [],
      },
    },
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F041.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F041.jpg?alt=media',
    wishlisted: false,
    inCart: true,
    purchased: false,
  },
  {
    title: "The Lion's Song",
    rating: 64,
    discount: 0,
    id: '040',
    publisherId: "mi'pu'mi-games",
    platform: ['Windows'],
    tags: ['Narration', 'Adventure'],
    releaseDate: '2021-05-12T18:30:00.000Z',
    price: 189,
    objectID: '1441de5c6e0042_dashboard_generated_id',
    _highlightResult: {
      title: {
        value: "The Lion's Song",
        matchLevel: 'none',
        matchedWords: [],
      },
    },
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F040.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F040.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: 'Sockventure',
    rating: 50,
    discount: 0,
    id: '044',
    publisherId: 'versus-evil',
    platform: ['Windows'],
    tags: ['Action', 'Action-Adventure', 'Adventure', 'Indie'],
    releaseDate: '2021-05-10T18:30:00.000Z',
    price: 589,
    objectID: 'c0d19f9d22338_dashboard_generated_id',
    _highlightResult: {
      title: {
        value: 'Sockventure',
        matchLevel: 'none',
        matchedWords: [],
      },
    },
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F044.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F044.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: 'The Hand of Merlin',
    rating: 86,
    discount: 0,
    id: '045',
    publisherId: 'versus-evil',
    platform: ['Windows'],
    tags: ['RPG', 'Rogue-Lite', 'Strategy', 'Indie'],
    releaseDate: '2021-05-10T18:30:00.000Z',
    price: 939,
    objectID: '4ba3e99c3c0c7_dashboard_generated_id',
    _highlightResult: {
      title: {
        value: 'The Hand of Merlin',
        matchLevel: 'none',
        matchedWords: [],
      },
    },
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F045.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F045.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: 'Hood: Outlaws & Legends',
    rating: 55,
    discount: 0,
    id: '047',
    publisherId: 'focus-home-interactive',
    platform: ['Windows'],
    tags: ['Action', 'Stealth', 'Adventure'],
    releaseDate: '2021-05-09T18:30:00.000Z',
    price: 1199,
    objectID: '1b0003bdb5dcc8_dashboard_generated_id',
    _highlightResult: {
      title: {
        value: 'Hood: Outlaws & Legends',
        matchLevel: 'none',
        matchedWords: [],
      },
    },
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F047.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F047.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: 'Skate City',
    rating: 56,
    discount: 10,
    id: '049',
    publisherId: 'snowman',
    platform: ['Windows'],
    tags: ['Action', 'Indie'],
    releaseDate: '2021-05-05T18:30:00.000Z',
    price: 349,
    objectID: '116a3e5702d83b_dashboard_generated_id',
    _highlightResult: {
      title: {
        value: 'Skate City',
        matchLevel: 'none',
        matchedWords: [],
      },
    },
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F049.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F049.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: 'R-Type Final 2',
    rating: 66,
    discount: 0,
    id: '051',
    publisherId: 'nis-america-inc.',
    platform: ['Windows'],
    tags: ['Shooter'],
    releaseDate: '2021-04-29T18:30:00.000Z',
    price: 899,
    objectID: 'a17f668a3b38f_dashboard_generated_id',
    _highlightResult: {
      title: {
        value: 'R-Type Final 2',
        matchLevel: 'none',
        matchedWords: [],
      },
    },
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F051.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F051.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: "Lumberjack's Dynasty",
    rating: 68,
    discount: 0,
    id: '054',
    publisherId: 'toplitz-productions',
    platform: ['Windows'],
    tags: ['Simulation', 'RPG', 'Adventure'],
    releaseDate: '2021-04-29T18:30:00.000Z',
    price: 589,
    objectID: '4ac8c781673fb_dashboard_generated_id',
    _highlightResult: {
      title: {
        value: "Lumberjack's Dynasty",
        matchLevel: 'none',
        matchedWords: [],
      },
    },
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F054.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F054.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: 'The Uncertain: Last Quiet Day',
    rating: 67,
    discount: 0,
    id: '053',
    publisherId: 'meta-publishing',
    platform: ['Windows'],
    tags: ['Adventure', 'First Person'],
    releaseDate: '2021-04-28T18:30:00.000Z',
    price: 349,
    objectID: 'f5fd7067f41e8_dashboard_generated_id',
    _highlightResult: {
      title: {
        value: 'The Uncertain: Last Quiet Day',
        matchLevel: 'none',
        matchedWords: [],
      },
    },
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F053.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F053.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: 'Legend of Keepers',
    rating: 62,
    discount: 0,
    id: '052',
    publisherId: 'goblinz-publishing',
    platform: ['Windows', 'Mac OS'],
    tags: ['RPG', 'Strategy', 'Indie'],
    releaseDate: '2021-04-28T18:30:00.000Z',
    price: 469,
    objectID: 'def575290df38_dashboard_generated_id',
    _highlightResult: {
      title: {
        value: 'Legend of Keepers',
        matchLevel: 'none',
        matchedWords: [],
      },
    },
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F052.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F052.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: "The Signifier: Director's Cut",
    rating: 86,
    discount: 0,
    id: '062',
    publisherId: 'raw-fury',
    platform: ['Windows', 'Mac OS'],
    tags: ['Adventure', 'Indie'],
    releaseDate: '2021-04-21T18:30:00.000Z',
    price: 469,
    objectID: '1fc54f45efb95_dashboard_generated_id',
    _highlightResult: {
      title: {
        value: "The Signifier: Director's Cut",
        matchLevel: 'none',
        matchedWords: [],
      },
    },
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F062.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F062.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: 'MotoGP™21',
    rating: 60,
    discount: 0,
    id: '060',
    publisherId: 'milestone-s.r.l.',
    platform: ['Windows'],
    tags: ['Simulation', 'Racing'],
    releaseDate: '2021-04-21T18:30:00.000Z',
    price: 1099,
    objectID: '1d0cef65fe53a3_dashboard_generated_id',
    _highlightResult: {
      title: {
        value: 'MotoGP™21',
        matchLevel: 'none',
        matchedWords: [],
      },
    },
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F060.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F060.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: 'Core',
    rating: 50,
    discount: 0,
    id: '073',
    publisherId: 'manticore-games',
    platform: ['Windows'],
    tags: ['Action', 'RPG', 'Shooter'],
    releaseDate: '2021-04-15T18:30:00.000Z',
    notes: 'RECENTLY_UPDATED',
    price: 0,
    objectID: '8e8bf0060d0d3_dashboard_generated_id',
    _highlightResult: {
      title: {
        value: 'Core',
        matchLevel: 'none',
        matchedWords: [],
      },
    },
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F073.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F073.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: 'Hitchhiker - A Mystery Game',
    rating: 69,
    discount: 75,
    id: '071',
    publisherId: 'versus-evil',
    platform: ['Windows'],
    tags: ['Puzzle', 'Narration'],
    releaseDate: '2021-04-14T18:30:00.000Z',
    price: 589,
    objectID: 'bdb312686ef2a_dashboard_generated_id',
    _highlightResult: {
      title: {
        value: 'Hitchhiker - A Mystery Game',
        matchLevel: 'none',
        matchedWords: [],
      },
    },
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F071.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F071.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    title: 'Shadow Man Remastered',
    rating: 80,
    discount: 66,
    id: '070',
    publisherId: 'nightdive-studios',
    platform: ['Windows'],
    tags: ['Action', 'Horror', 'Adventure'],
    releaseDate: '2021-04-14T18:30:00.000Z',
    price: 469,
    objectID: 'a80564fb49844_dashboard_generated_id',
    _highlightResult: {
      title: {
        value: 'Shadow Man Remastered',
        matchLevel: 'none',
        matchedWords: [],
      },
    },
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F070.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F070.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
] as unknown as Game[]

export const unitsSold = [
  { id: '427', units: '510' },
  { id: '234', units: '450' },
  { id: '337', units: '331' },
  { id: '531', units: '191' },
  { id: '005', units: '126' },
  { id: '013', units: '109' },
  { id: '237', units: '72' },
]
export const anticipatedBy = [
  { id: '183', units: '230' },
  { id: '043', units: '190' },
  { id: '135', units: '166' },
  { id: '019', units: '94' },
  { id: '040', units: '80' },
  { id: '071', units: '71' },
  { id: '083', units: '56' },
]

export const reviews = [
  {
    reviewScore: 13,
    userName: 'Jon Dough',
    date: getDates().randomDate,
    review:
      'Most challenging game I have ever played. Took me 3 hours to get it to run.',
    approvalRate: 100,
  },
  {
    reviewScore: 1,
    userName: 'Jon Bo',
    date: getDates().randomDate,
    review:
      'I give this game first rank #1. Best game ever.🏆 🏆 🏆 😃 😃 😃 👍 ',
    approvalRate: 0,
  },
  {
    reviewScore: 97,
    userName: 'Jane Thor',
    date: getDates().randomDate,
    review:
      'Really enjoyed it to the core. I am typing this review from an internet cafe inside the game. I am a digital being now.',
    approvalRate: 25,
  },
  {
    reviewScore: 50,
    userName: 'Mediocre Madeline',
    date: getDates().randomDate,
    review: 'Meh.',
    approvalRate: 65,
  },
]

export const getUserGameIdList = ({
  ids,
  status,
}: {
  ids: string[]
  status: GameStatus
}) => ids.map((item) => ({ gameId: item, uid: 'any_id_here_', status }))

export const sampleUserGameIds: {
  gameId: string
  uid: string
  status: GameStatus
  updatedAt?: string
}[] = [
  {
    gameId: '030',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'WISHLISTED',
  },
  {
    gameId: '031',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'WISHLISTED',
  },
  {
    gameId: '029',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'IN_CART',
  },
  {
    gameId: '034',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'IN_CART',
  },
  {
    gameId: '028',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'WISHLISTED',
  },
  {
    gameId: '035',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'IN_CART',
  },
  {
    gameId: '036',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'WISHLISTED',
  },
  {
    gameId: '021',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'WISHLISTED',
  },
  {
    gameId: '059',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'WISHLISTED',
  },
  {
    gameId: '048',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'WISHLISTED',
  },
  {
    gameId: '037',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'WISHLISTED',
  },
  {
    gameId: '024',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'IN_CART',
  },
  {
    gameId: '011',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'IN_CART',
  },
  {
    gameId: '010',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'IN_CART',
  },
  {
    gameId: '135',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'PURCHASED',
  },
  {
    gameId: '043',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'PURCHASED',
  },
  {
    gameId: '007',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'PURCHASED',
  },
  {
    gameId: '005',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'PURCHASED',
  },
  {
    gameId: '002',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'PURCHASED',
  },
  {
    gameId: '551',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'PURCHASED',
  },
  {
    gameId: '472',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'PURCHASED',
  },
  {
    gameId: '004',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'PURCHASED',
  },
]

const sampleHighestDiscountEver = [
  {
    notes: ['HIGHEST_DISCOUNT'],
    tags: ['RPG', 'Strategy', 'Open World'],
    anticipatedBy: 64,
    id: '011',
    price: 709,
    publisherId: 'dear-villagers',
    discount: 60,
    releaseDate: '2021-06-07T18:30:00.000Z',
    title: 'Edge Of Eternity',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F011.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F011.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    releaseDate: '2021-05-21T18:30:00.000Z',
    tags: ['Action'],
    id: '019',
    publisherId: 'electronic-arts',
    title: 'Knockout City™',
    notes: ['HIGHEST_DISCOUNT'],
    anticipatedBy: 76,
    price: 1499,
    discount: 50,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F019.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F019.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    discount: 50,
    releaseDate: '2021-05-19T18:30:00.000Z',
    publisherId: '1c-entertainment',
    notes: ['HIGHEST_DISCOUNT'],
    id: '030',
    tags: ['Action', 'Shooter'],
    title: 'Viscerafest',
    price: 489,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F030.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F030.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    id: '038',
    notes: ['HIGHEST_DISCOUNT'],
    publisherId: 'unknown-worlds-entertainment',
    tags: ['Survival', 'Open World', 'Adventure'],
    releaseDate: '2019-01-29T18:30:00.000Z',
    price: 709,
    discount: 75,
    title: 'Subnautica Below Zero',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F038.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F038.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    discount: 75,
    title: 'Pine',
    releaseDate: '2020-09-14T18:30:00.000Z',
    price: 569,
    publisherId: 'kongregate',
    notes: ['HIGHEST_DISCOUNT'],
    id: '048',
    tags: ['Action', 'Action-Adventure', 'Open World', 'Adventure'],
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F048.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F048.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    publisherId: 'draknek-and-friends',
    title: 'Cosmic Express',
    price: 239,
    releaseDate: '2017-03-15T18:30:00.000Z',
    tags: ['Puzzle', 'Indie'],
    id: '059',
    discount: 66,
    notes: ['HIGHEST_DISCOUNT'],
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F059.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F059.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    tags: ['Action'],
    id: '078',
    notes: ['HIGHEST_DISCOUNT'],
    title: 'Knight Squad 2',
    discount: 75,
    publisherId: 'chainsawesome-games',
    price: 349,
    releaseDate: '2021-04-13T18:30:00.000Z',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F078.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F078.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    id: '100',
    discount: 50,
    releaseDate: '2021-03-25T18:30:00.000Z',
    tags: ['Simulation', 'City Builder'],
    notes: ['HIGHEST_DISCOUNT'],
    publisherId: 'frozen-district',
    title: 'The Tenants',
    price: 469,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F100.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F100.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    releaseDate: '2017-10-02T18:30:00.000Z',
    notes: ['HIGHEST_DISCOUNT'],
    publisherId: 'thq-nordic',
    tags: ['Action', 'RPG', 'Indie'],
    title: 'Battle Chasers: Nightwar',
    price: 999,
    id: '102',
    discount: 50,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F102.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F102.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    price: 1179,
    notes: ['HIGHEST_DISCOUNT'],
    title: 'Saviors of Sapphire Wings & Strangers of Sword City Revisited',
    tags: ['Exploration', 'RPG'],
    discount: 50,
    id: '115',
    publisherId: 'nis-america-inc.',
    releaseDate: '2021-03-15T18:30:00.000Z',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F115.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F115.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
]

export const sampleActionGames = [
  {
    price: 469,
    title: 'Chicory: A Colorful Tale',
    publisherId: 'finji',
    id: '004',
    tags: ['Action', 'Exploration', 'Adventure'],
    discount: 10,
    releaseDate: '2021-06-09T18:30:00.000Z',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F004.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F004.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    unitsSold: 615,
    publisherId: '505-games',
    description:
      "Ok, Scout, it's time to show us what you’re made of. Prove to yourself that you can break free from your city life and live like a real outdoorsman. The wilderness isn’t for the faint of heart, but if you work hard, hone your hunting and crafting skills, learn how to use the environment and be one with nature, you too can become a Master Outdoorsman and call the Open Country your home.",
    releaseDate: '2021-06-09T18:30:00.000Z',
    title: 'Open Country',
    discount: 0,
    id: '007',
    anticipatedBy: 83,
    tags: ['Open World', 'Action'],
    price: 829,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F007.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F007.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    discount: 10,
    price: 529,
    id: '017',
    tags: ['Action', 'RPG', 'Adventure'],
    publisherId: 'mwm-interactive',
    releaseDate: '2021-05-31T18:30:00.000Z',
    title: 'Stonefly',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F017.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F017.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    releaseDate: '2021-05-31T18:30:00.000Z',
    title: 'Necromunda: Hired Gun',
    tags: ['Action', 'Action-Adventure', 'Adventure'],
    price: 1599,
    discount: 0,
    publisherId: 'focus-home-interactive',
    id: '018',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F018.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F018.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    discount: 50,
    releaseDate: '2021-05-21T18:30:00.000Z',
    notes: ['HIGHEST_DISCOUNT'],
    title: 'Knockout City™',
    price: 1499,
    anticipatedBy: 76,
    tags: ['Action'],
    publisherId: 'electronic-arts',
    id: '019',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F019.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F019.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    tags: ['Action', 'Shooter'],
    id: '023',
    title: 'GRAVEN',
    price: 699,
    releaseDate: '2021-05-26T18:30:00.000Z',
    publisherId: '1c-entertainment-3d-realms',
    discount: 0,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F023.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F023.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
]

export const sampleAdventureGames = [
  {
    discount: 0,
    specialSections: {
      hoursToBeat: {
        units: '112',
        key: 'hours',
      },
      unitsSold: {
        units: '120',
        key: 'units',
      },
    },
    releaseDate: '2021-03-18T18:30:00.000Z',
    title: 'Doctor Who: The Lonely Assassins',
    id: '000',
    publisherId: 'maze-theory',
    price: 139,
    tags: ['Puzzle', 'Adventure', 'Indie'],
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F000.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F000.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    tags: ['Casual', 'Adventure', 'Indie'],
    publisherId: 'whitethorn-digital',
    id: '003',
    price: 239,
    discount: 0,
    title: 'Beasts of Maravilla Island',
    releaseDate: '2021-06-11T18:30:00.000Z',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F003.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F003.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    price: 469,
    title: 'Chicory: A Colorful Tale',
    publisherId: 'finji',
    id: '004',
    tags: ['Action', 'Exploration', 'Adventure'],
    discount: 10,
    releaseDate: '2021-06-09T18:30:00.000Z',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F004.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F004.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    id: '010',
    title: 'Genshin Impact',
    publisherId: 'mihoyo-limited',
    price: 0,
    tags: ['RPG', 'Open World', 'Adventure'],
    discount: 0,
    hoursToBeat: 103,
    releaseDate: '2021-06-08T18:30:00.000Z',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F010.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F010.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    discount: 0,
    price: 589,
    publisherId: 'raw-fury',
    title: 'Backbone',
    id: '012',
    releaseDate: '2021-06-07T18:30:00.000Z',
    tags: ['Adventure', 'Indie'],
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F012.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F012.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    discount: 10,
    price: 529,
    id: '017',
    tags: ['Action', 'RPG', 'Adventure'],
    publisherId: 'mwm-interactive',
    releaseDate: '2021-05-31T18:30:00.000Z',
    title: 'Stonefly',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F017.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F017.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
]

export const sampleNarrationGames = [
  {
    tags: ['Narration', 'Adventure'],
    discount: 0,
    id: '040',
    title: "The Lion's Song",
    publisherId: "mi'pu'mi-games",
    price: 189,
    releaseDate: '2021-05-12T18:30:00.000Z',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F040.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F040.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    id: '071',
    discount: 75,
    publisherId: 'versus-evil',
    releaseDate: '2021-04-14T18:30:00.000Z',
    tags: ['Puzzle', 'Narration'],
    price: 589,
    title: 'Hitchhiker - A Mystery Game',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F071.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F071.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    discount: 0,
    publisherId: 'daedalic-entertainment',
    price: 1499,
    releaseDate: '2017-08-14T18:30:00.000Z',
    id: '075',
    title: "Ken Follett's The Pillars of the Earth",
    tags: ['Puzzle', 'Narration', 'Adventure'],
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F075.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F075.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    tags: ['Narration', 'First Person', 'Indie'],
    price: 349,
    title: 'Before Your Eyes',
    discount: 0,
    publisherId: 'skybound-games',
    releaseDate: '2021-04-07T18:30:00.000Z',
    id: '083',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F083.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F083.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    price: 349,
    title: 'The Fabled Woods',
    tags: ['Action', 'Narration', 'First Person'],
    id: '101',
    discount: 10,
    publisherId: 'headup',
    releaseDate: '2021-03-24T18:30:00.000Z',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F101.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F101.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
  {
    releaseDate: '2021-03-10T18:30:00.000Z',
    price: 469,
    title: 'Cyanide & Happiness - Freakpocalypse',
    tags: ['Narration', 'Comedy', 'Adventure'],
    publisherId: 'serenity-forge',
    id: '119',
    discount: 66,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F119.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F119.jpg?alt=media',
    wishlisted: false,
    inCart: false,
    purchased: false,
  },
]

export const homeShowcaseGames = [
  {
    discount: 0,
    tags: ['Action', 'Open World', 'Adventure'],
    publisherId: 'ubisoft',
    title: 'Watch Dogs: Legion',
    price: 2999,
    homeScreen: 'L20nioDjCxU',
    releaseDate: '2020-10-28T18:30:00.000Z',
    id: '234',
    description:
      'In Watch Dogs Legion, you get to build a resistance to take back a near-future London that is facing its downfall.',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F234.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F234.jpg?alt=media',
  },
  {
    releaseDate: '2020-07-13T18:30:00.000Z',
    tags: ['Action', 'Action-Adventure', 'Open World', 'Adventure'],
    title: 'DEATH STRANDING',
    publisherId: '505-games',
    homeScreen: 'Mpn-MC2B6Zc',
    price: 4173,
    id: '337',
    discount: 0,
    description:
      'From legendary game creator Hideo Kojima comes an all-new, genre-defying experience. Sam Bridges must brave a world utterly transformed by the Death Stranding. Carrying the disconnected remnants of our future in his hands, he embarks on a journey to reconnect the shattered world.',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F337.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F337.jpg?alt=media',
  },
  {
    description:
      'After a secretive agency in New York is invaded by an otherworldly threat, you become the new Director struggling to regain Control.',
    releaseDate: '2019-08-26T18:30:00.000Z',
    id: '467',
    title: 'Control',
    price: 2161,
    discount: 90,
    tags: ['Action', 'Adventure'],
    notes: ['HIGHEST_DISCOUNT'],
    publisherId: '505-games',
    homeScreen: 'PT5yMfC9LQM',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F467.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F467.jpg?alt=media',
  },
  {
    price: 2999,
    anticipatedBy: 119,
    discount: 0,
    releaseDate: '2021-10-11T18:30:00.000Z',
    tags: ['Shooter', 'Horror', 'Action'],
    publisherId: 'warner-bros.-games',
    id: '183',
    description:
      'Back 4 Blood is a thrilling cooperative first-person shooter with an intense 4 player co-op narrative campaign, competitive multiplayer as human or Ridden, and frenetic gameplay that keeps you in the action.',
    title: 'Back 4 Blood',
    homeScreen: 'UkP8dOQrIyk',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F183.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F183.jpg?alt=media',
  },
  {
    title: 'Cyberpunk 2077',
    price: 2999,
    id: '201',
    publisherId: 'cd-projekt-red',
    description:
      'Enter the massive open world of Night City, a place that sets new standards in terms of visuals, complexity and depth.',
    discount: 0,
    releaseDate: '2020-12-09T18:30:00.000Z',
    homeScreen: 'Z8_JEaoYcOs',
    tags: ['Action', 'RPG', 'Open World', 'Adventure'],
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F201.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F201.jpg?alt=media',
  },
  {
    publisherId: 'rockstar-games',
    description:
      'Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, Red Dead Redemption 2 is an epic tale of honor and loyalty at the dawn of the modern age. Includes Red Dead Redemption 2: Story Mode and Red Dead Online.',
    discount: 0,
    homeScreen: 'eaW0tYpxyp0',
    id: '447',
    price: 3199,
    title: 'Red Dead Redemption 2',
    tags: ['Action', 'Narration', 'Open World'],
    releaseDate: '2019-11-04T18:30:00.000Z',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F447.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F447.jpg?alt=media',
  },
  {
    price: 595,
    releaseDate: '2016-07-06T18:30:00.000Z',
    homeScreen: 'yDm6PAgNohU',
    publisherId: 'playdead',
    tags: ['Puzzle', 'Adventure', 'Indie'],
    description:
      'Hunted and alone, a boy finds himself drawn into the center of a dark project.',
    videoId: 'yDm6PAgNohU',
    discount: 0,
    id: '555',
    title: 'Inside',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F555.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F555.jpg?alt=media',
  },
]

export const sampleWishlistIds = [
  {
    gameId: '056',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'WISHLISTED',
  },
  {
    gameId: '031',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'WISHLISTED',
  },
  {
    gameId: '029',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'WISHLISTED',
  },
  {
    gameId: '027',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'WISHLISTED',
  },
  {
    gameId: '025',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'WISHLISTED',
  },
  {
    gameId: '003',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'WISHLISTED',
  },
  {
    gameId: '183',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'WISHLISTED',
  },
  {
    gameId: '021',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'WISHLISTED',
  },
  {
    gameId: '059',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'WISHLISTED',
  },
  {
    gameId: '048',
    uid: 'cqGM5kzDzOQrDD7w3Mj2N2w8rxs2',
    status: 'WISHLISTED',
  },
]

export const sampleWishlistGames = [
  {
    id: '003',
    tags: ['Casual', 'Adventure', 'Indie'],
    releaseDate: '2021-06-11T18:30:00.000Z',
    publisherId: 'whitethorn-digital',
    discount: 0,
    price: 239,
    title: 'Beasts of Maravilla Island',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F003.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F003.jpg?alt=media',
    wishlisted: true,
  },
  {
    releaseDate: '2021-05-26T18:30:00.000Z',
    id: '021',
    tags: ['Casual', 'Adventure', 'Indie'],
    title: 'The Longest Road on Earth',
    price: 239,
    publisherId: 'raw-fury',
    discount: 0,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F021.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F021.jpg?alt=media',
    wishlisted: true,
  },
  {
    releaseDate: '2021-05-24T18:30:00.000Z',
    tags: ['Simulation'],
    publisherId: 'rebound-cg.',
    price: 1059,
    title: 'Tennis Manager 2021',
    id: '025',
    discount: 0,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F025.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F025.jpg?alt=media',
    wishlisted: true,
  },
  {
    releaseDate: '2021-05-20T18:30:00.000Z',
    id: '027',
    discount: 0,
    title: 'Wanna Survive',
    tags: ['RPG', 'Strategy', 'Adventure'],
    publisherId: 'nicalis-inc.',
    price: 349,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F027.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F027.jpg?alt=media',
    wishlisted: true,
  },
  {
    publisherId: 'curve-digital',
    releaseDate: '2021-05-19T18:30:00.000Z',
    title: 'Just Die Already',
    discount: 0,
    tags: ['Open World', 'Comedy', 'Adventure'],
    price: 459,
    id: '029',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F029.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F029.jpg?alt=media',
    wishlisted: true,
  },
  {
    price: 469,
    discount: 0,
    id: '031',
    releaseDate: '2021-05-19T18:30:00.000Z',
    title: 'Grindstone',
    tags: ['Puzzle', 'Indie'],
    publisherId: 'capybara-games',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F031.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F031.jpg?alt=media',
    wishlisted: true,
  },
  {
    discount: 75,
    price: 569,
    releaseDate: '2020-09-14T18:30:00.000Z',
    tags: ['Action', 'Action-Adventure', 'Open World', 'Adventure'],
    id: '048',
    title: 'Pine',
    notes: ['HIGHEST_DISCOUNT'],
    publisherId: 'kongregate',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F048.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F048.jpg?alt=media',
    wishlisted: true,
  },
  {
    releaseDate: '2020-09-09T18:30:00.000Z',
    title: "A Monster's Expedition",
    price: 469,
    tags: ['Puzzle', 'Adventure', 'Indie'],
    discount: 10,
    id: '056',
    publisherId: 'draknek-and-friends',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F056.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F056.jpg?alt=media',
    wishlisted: true,
  },
  {
    notes: ['HIGHEST_DISCOUNT'],
    title: 'Cosmic Express',
    publisherId: 'draknek-and-friends',
    tags: ['Puzzle', 'Indie'],
    price: 239,
    discount: 66,
    id: '059',
    releaseDate: '2017-03-15T18:30:00.000Z',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F059.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F059.jpg?alt=media',
    wishlisted: true,
  },
  {
    discount: 0,
    price: 2999,
    anticipatedBy: 119,
    id: '183',
    homeScreen: 'UkP8dOQrIyk',
    tags: ['Shooter', 'Horror', 'Action'],
    releaseDate: '2021-10-11T18:30:00.000Z',
    publisherId: 'warner-bros.-games',
    description:
      'Back 4 Blood is a thrilling cooperative first-person shooter with an intense 4 player co-op narrative campaign, competitive multiplayer as human or Ridden, and frenetic gameplay that keeps you in the action.',
    title: 'Back 4 Blood',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F183.jpg?alt=media',
    subImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/sub-images%2F183.jpg?alt=media',
    wishlisted: true,
  },
]
