import { create } from '@storybook/theming'

const gray50 = 'rgb(249, 250, 251)'
const gray100 = 'rgb(243, 244, 246)'
const gray200 = 'rgb(229, 231, 235)'
const gray300 = 'rgb(209, 213, 219)'
const gray400 = 'rgb(156, 163, 175)'
const gray500 = 'rgb(107, 114, 128)'
const gray600 = 'rgb(75, 85, 99)'
const gray700 = 'rgb(55, 65, 81)'
const gray800 = 'rgb(31, 41, 55)'
const gray900 = 'rgb(17, 24, 39)'

const blue500 = 'rgb(59, 130, 246)'
const blue600 = 'rgb(37, 99, 235)'

export default create({
  //   base: 'dark',

  colorPrimary: blue500,
  colorSecondary: blue600,

  //   // UI
  appBg: gray900,
  appContentBg: gray800,
  appBorderColor: gray700,
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  //   // Text colors
  //   textColor: 'black',
  //   textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: gray200,
  barSelectedColor: gray50,
  barBg: gray700,

  // Form colors
  inputBg: gray700,
  inputBorder: gray600,
  inputTextColor: gray100,
  inputBorderRadius: 4,

  brandTitle: 'Epic Clone Designbook',
  brandUrl: 'https://iamkarthick.com',
  //   brandImage: 'https://place-hold.it/350x150',
})
