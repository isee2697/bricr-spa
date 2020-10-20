import makeStyles from '@material-ui/core/styles/makeStyles';

import { IconSelectedTheme } from 'ui/molecules/iconPicker/IconPicker.types';
import { getSelectedThemeColors } from 'ui/molecules/iconPicker/IconPicker.styles';

export const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    cursor: 'pointer',
    margin: spacing(1.5, 1),
    width: spacing(6),
    height: spacing(6),
    borderRadius: spacing(3),
    padding: spacing(1) - 1,

    '&.selected': {
      border: `1px solid ${palette.primary.main}`,
    },
  },
  color: {
    width: spacing(4),
    height: spacing(4),
    borderRadius: spacing(2),
    background: ({ theme }: { theme: IconSelectedTheme }) => getSelectedThemeColors(palette, theme).color,
  },
}));
