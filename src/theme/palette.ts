import { PaletteOptions } from '@material-ui/core/styles/createPalette';

const primary = '#0A57E9';
const secondary = '#EE2F57';
const black = '#2F1F5B';
const white = '#fff';
const whiteLight = 'rgba(255, 255, 255, 0.3)';
const gray = '#828DB8';
const grayLight = '#F3F5FA';
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
const purple = '#813FF6';
const purpleLight = '#F2EEFC';
const gradientPrimary = 'linear-gradient(315deg, #0A57E9 0%, #9FC0FF 100%)';

export const palette: PaletteOptions = {
  primary: {
    main: primary,
  },
  secondary: {
    main: secondary,
  },
  black: {
    main: black,
  },
  white: {
    main: white,
    light: whiteLight,
  },
  gray: {
    main: gray,
    light: grayLight,
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
  overlay: {
    main: 'rgba(130, 141, 185, 0.3)',
  },
};
