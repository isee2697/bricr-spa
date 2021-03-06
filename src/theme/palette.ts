import { PaletteOptions } from '@material-ui/core/styles/createPalette';

const primary = '#0A57E9';
const primaryLight = '#e2ecfd';
const primaryInfo = 'rgba(10, 88, 233, 0.02)';
const secondary = '#EE2F57';
const black = '#2F1F5B';
const blackLight = 'rgba(47, 31, 91, 0.6)';
const blackInfo = 'rgba(130, 141, 184, .5)';
const white = '#fff';
const whiteLight = 'rgba(255, 255, 255, 0.3)';
const gray = '#828DB8';
const grayLight = '#F3F5FA';
const grayDark = '#E1E1E1';
const warmgray = '#C4C4C4';
const warmgrayLight = '#E5E5E5';
const warmgrayDark = 'rgba(0, 0, 0, 0.55)';
const red = '#EB5F60';
const redLight = '#F9ECED';
const orange = '#FFAD21';
const orangeLight = '#FFF6E8';
const yellow = '#FCC616';
const yellowLight = '#FEF9E7';
const green = '#0ABE67';
const greenLight = '#E7F8F0';
const blue = '#4CB9DF';
const purple = '#8694EF';
const blueLight = '#ECF8FC';
const blueDark = '#0A57E9';

const blue100 = '#96BAFD';
const blue200 = '#6A9CFB';
const blue300 = '#538EFF';
const blue400 = '#2E75FC';
const blue500 = '#165FEA';
const blue600 = '#0A57E9';

const aqua100 = '#97DCFD';
const aqua200 = '#4DBFF1';
const aqua300 = '#3EA0E1';
const aqua400 = '#267EC7';
const aqua500 = '#23B7FB';
const aqua600 = '#0959A9';

const purple100 = '#D7DBFA';
const purple200 = '#D2D7FA';
const purple300 = '#BCC3F6';
const purple400 = '#B3BCF5';
const purple500 = '#A1ACF3';
const purple600 = '#8794EF';

const purpleLight = '#F2EEFC';
const pink = '#E90AE0';
const gold = '#FFCD50';
const silver = '#828db8';
const bronze = '#cd7732';
const blueInfo = '#DEECF1';
const gradientPrimary = 'linear-gradient(354.85deg, #0A57E9 0%, #9FC0FF 100%)';
const gradientPrimaryLight = 'linear-gradient(315deg, rgba(10, 190, 103, 0.1) 0%, rgba(196, 245, 222, 0.1) 100%)';
const gradientBlue = 'linear-gradient(339deg, #0a57e91a 0%, #9fc0ff1a 100%)';
const gradientLightBlue = 'linear-gradient(354deg, #0a57e91a 0%, #9fc0ff1a 100%)';
const gradientGreen = 'linear-gradient(315deg, #0ABE67 0%, #00E174 100%)';
const gradientWhite = 'linear-gradient(180deg, #F3F5FA 104px, rgba(243, 245, 250, 0) 312px)';
const gradientGold = 'linear-gradient(204.7deg, #D39E13 7.56%, #F8DC97 90.55%)';
// const gradientGold = 'linear-gradient(180deg, #C6A242 0%, rgba(198, 162, 66, 0) 100%)';
const gradientSilver = 'linear-gradient(213.93deg, #8A94BC 10.76%, rgba(138, 148, 188, 0) 106.28%)';
// const gradientSilver = 'linear-gradient(180deg, #828DB8 0%, rgba(130, 141, 184, 0) 100%)';
const gradientBronze = 'linear-gradient(204.7deg, #D57B34 7.56%, #E6BB99 90.55%)';
// const gradientBronze = 'linear-gradient(180deg, #CD7732 0%, rgba(205, 119, 50, 0) 100%)';
const gradientGreenRed = 'linear-gradient(90deg, #EB5F60 0%, #FFAD21 25.52%, #FCC616 52.6%, #0ABE67 100%)';
const gradientRed = 'linear-gradient(315deg, rgba(235, 95, 96, 0.1) 0%, rgba(247, 227, 227, 0.1) 100%)';
const gradientGray = 'linear-gradient(180deg, #364CE510 0%, #364ce550 50%, #364CE510 100%)';

export const palette: PaletteOptions = {
  primary: {
    main: primary,
    light: primaryLight,
  },
  secondary: {
    main: secondary,
  },
  black: {
    main: black,
    light: blackLight,
  },
  white: {
    main: white,
    light: whiteLight,
  },
  gray: {
    main: gray,
    light: grayLight,
    dark: grayDark,
  },
  warmgray: {
    main: warmgray,
    light: warmgrayLight,
    dark: warmgrayDark,
  },
  red: {
    main: red,
    light: redLight,
  },
  orange: {
    main: orange,
    light: orangeLight,
  },
  yellow: {
    main: yellow,
    light: yellowLight,
  },
  green: {
    main: green,
    light: greenLight,
  },
  blue: {
    main: blue,
    light: blueLight,
    dark: blueDark,
  },
  purple: {
    main: purple,
    light: purpleLight,
  },
  pink: {
    main: pink,
  },
  gold: {
    main: gold,
  },
  silver: {
    main: silver,
  },
  bronze: {
    main: bronze,
  },
  error: {
    main: red,
  },
  success: {
    main: green,
  },
  warning: {
    main: orange,
  },
  text: {
    primary: black,
    secondary: gray,
  },
  background: {
    default: grayLight,
  },
  gradientPrimary: {
    main: gradientPrimary,
    light: gradientPrimaryLight,
  },
  gradientBlue: {
    main: gradientBlue,
    light: gradientLightBlue,
  },
  gradientGreen: {
    main: gradientGreen,
  },
  gradientWhite: {
    main: gradientWhite,
  },
  gradientGold: {
    main: gradientGold,
  },
  gradientSilver: {
    main: gradientSilver,
  },
  gradientBronze: {
    main: gradientBronze,
  },
  gradientGreenRed: {
    main: gradientGreenRed,
  },
  gradientRed: {
    main: gradientRed,
  },
  gradientGray: {
    main: gradientGray,
  },
  overlay: {
    main: 'rgba(130, 141, 185, 0.3)',
    light: '#0A57E933',
  },
  info: {
    main: primaryInfo,
    dark: blackInfo,
    light: blueInfo,
  },
  aquaGradients: {
    '100': aqua100,
    '200': aqua200,
    '300': aqua300,
    '400': aqua400,
    '500': aqua500,
    '600': aqua600,
  },
  blueGradients: {
    '100': blue100,
    '200': blue200,
    '300': blue300,
    '400': blue400,
    '500': blue500,
    '600': blue600,
  },
  purpleGradients: {
    '100': purple100,
    '200': purple200,
    '300': purple300,
    '400': purple400,
    '500': purple500,
    '600': purple600,
  },
  chartColors: {
    '100': '#40C4FF',
    '200': '#FF5252',
    '300': '#00C853',
    '400': '#FFEB3B',
    '500': '#FF4081',
    '600': '#E040FB',
  },
};
