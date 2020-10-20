import { makeStyles } from '@material-ui/core/styles';
import { Palette } from '@material-ui/core/styles/createPalette';

import { IconSelectedTheme } from './IconPicker.types';

export const getSelectedThemeColors = (palette: Palette, theme: IconSelectedTheme) => {
  const colorsMap = {
    [IconSelectedTheme.DEFAULT]: {
      color: palette.primary.main,
      backgroundColor: palette.blue.light,
    },
    [IconSelectedTheme.ORANGE]: {
      color: palette.orange.main,
      backgroundColor: palette.orange.light,
    },
    [IconSelectedTheme.BLUE]: {
      color: palette.blue.main,
      backgroundColor: palette.blue.light,
    },
    [IconSelectedTheme.GREEN]: {
      color: palette.green.main,
      backgroundColor: palette.green.light,
    },
    [IconSelectedTheme.YELLOW]: {
      color: palette.yellow.main,
      backgroundColor: palette.yellow.light,
    },
    [IconSelectedTheme.RED]: {
      color: palette.red.main,
      backgroundColor: palette.red.light,
    },
    [IconSelectedTheme.PURPLE]: {
      color: palette.purple.main,
      backgroundColor: palette.purple.light,
    },
  };

  return colorsMap[theme];
};

export const useStyles = makeStyles(({ palette, spacing }) => ({
  button: {
    padding: spacing(1),
    '& svg': {
      color: ({ color }: { color: string }) => color ?? palette.gray.main,
      width: ({ size }: { size: number }) => size ?? spacing(4),
      height: ({ size }: { size: number }) => size ?? spacing(4),
    },
  },
  isSelected: {
    color: 'red',
    '& .MuiButtonBase-root': {
      border: ({ selectedTheme }: { selectedTheme: IconSelectedTheme }) =>
        `${spacing(0.125)}px solid ${getSelectedThemeColors(palette, selectedTheme).color}`,
      padding: spacing(0.875),
      background: ({ selectedTheme }: { selectedTheme: IconSelectedTheme }) =>
        getSelectedThemeColors(palette, selectedTheme).backgroundColor,
      '& svg': {
        color: ({ selectedTheme }: { selectedTheme: IconSelectedTheme }) =>
          getSelectedThemeColors(palette, selectedTheme).color,
      },
    },
  },
}));
