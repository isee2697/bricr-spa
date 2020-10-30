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
const warmgray = '#C4C4C4';
const warmgrayLight = '#E5E5E5';
const red = '#EB5F60';
const redLight = '#F9ECED';
const orange = '#FFAD21';
const orangeLight = '#FFF6E8';
const yellow = '#FCC616';
const yellowLight = '#FEF9E7';
const green = '#0ABE67';
const greenLight = '#E7F8F0';
const blue = '#4CB9DF';
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
const purple = '#813FF6';
const purpleLight = '#F2EEFC';
const gradientPrimary = 'linear-gradient(354.85deg, #0A57E9 0%, #9FC0FF 100%)';
const gradientBlue = 'linear-gradient(339deg, #0a57e91a 0%, #9fc0ff1a 100%)';
const gradientLightBlue = 'linear-gradient(354deg, #0a57e91a 0%, #9fc0ff1a 100%)';
const gradientGreen = 'linear-gradient(315deg, #0ABE67 0%, #00E174 100%)';
const gradientWhite = 'linear-gradient(180deg, #F3F5FA 104px, rgba(243, 245, 250, 0) 312px)';

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
  },
  warmgray: {
    main: warmgray,
    light: warmgrayLight,
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
  overlay: {
    main: 'rgba(130, 141, 185, 0.3)',
    light: '#0A57E933',
  },
  info: {
    main: primaryInfo,
    dark: blackInfo,
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
};
