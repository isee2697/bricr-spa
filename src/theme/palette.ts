import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { Shadows } from '@material-ui/core/styles/shadows';

const primary = '#0A57E9';
const secondary = '#EE2F57';
const black = '#2F1F5B';
const white = '#fff';
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
    secondary: greenLight,
  },
  background: {
    default: grayLight,
  },
  gradientPrimary: {
    main: gradientPrimary,
  },
};

export const shadows: Shadows = [
  'none',
  '0px 2px 4px rgba(16, 80, 202, 0.1)',
  '0px 4px 8px rgba(159, 192, 255, 0.5)',
  '4px 0px 8px rgba(159, 192, 255, 0.5)',
  '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
  '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
  '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
  '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
  '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
  '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
  '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
  '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
  '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
  '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
  '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
  '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
  '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
  '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
  '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
  '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
  '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
  '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
  '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
  '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
  '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
];
