import { create } from '@storybook/theming'

const primaryPallete = {
  DEFAULT: 'hsl(209, 100%, 45%)',
  25: 'hsl(209, 100%, 98%)',
  50: 'hsl(209, 100%, 92%)',
  100: 'hsl(209, 100%, 85%)',
  200: 'hsl(209, 100%, 75%)',
  300: 'hsl(209, 100%, 65%)',
  400: 'hsl(209, 100%, 55%)',
  500: 'hsl(209, 100%, 45%)',
  600: 'hsl(209, 100%, 33%)',
  700: 'hsl(209, 100%, 20%)',
  800: 'hsl(209, 100%, 10%)',
  900: 'hsl(209, 100%, 04%)',
}

const grayPallete = {
  DEFAULT: 'hsl(209, 10%, 45%)',
  25: 'hsl(209, 10%, 98%)',
  50: 'hsl(209, 10%, 92%)',
  100: 'hsl(209, 10%, 85%)',
  200: 'hsl(209, 10%, 75%)',
  300: 'hsl(209, 10%, 65%)',
  400: 'hsl(209, 10%, 55%)',
  500: 'hsl(209, 10%, 45%)',
  600: 'hsl(209, 10%, 33%)',
  700: 'hsl(209, 10%, 20%)',
  800: 'hsl(209, 10%, 10%)',
  900: 'hsl(209, 10%, 04%)',
}

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

  colorPrimary: primaryPallete['DEFAULT'],
  colorSecondary: primaryPallete['600'],

  //   // UI
  appBg: grayPallete['900'],
  appContentBg: grayPallete['800'],
  appBorderColor: grayPallete['700'],
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  //   // Text colors
  //   textColor: 'black',
  //   textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: grayPallete['100'],
  barSelectedColor: grayPallete['50'],
  barBg: grayPallete['700'],

  // Form colors
  inputBg: grayPallete['700'],
  inputBorder: grayPallete['600'],
  inputTextColor: grayPallete['100'],
  inputBorderRadius: 4,

  brandTitle: `Epic Clone Designbook.
  Karthick Ragavendran`,
  brandUrl: 'https://iamkarthick.com',
  //   brandImage: 'https://place-hold.it/350x150',
})
