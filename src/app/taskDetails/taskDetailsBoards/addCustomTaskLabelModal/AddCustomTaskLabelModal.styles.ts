import { makeStyles } from '@material-ui/core/styles';

import { IconSelectedTheme } from 'ui/molecules/iconPicker/IconPicker.types';
import { getSelectedThemeColors } from 'ui/molecules/iconPicker/IconPicker.styles';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  modal: {
    '& .MuiDialogContent-root': {
      paddingTop: spacing(1),
    },
  },
  col: {
    marginRight: '8.333333%',
    '& .MuiFormControl-root': {
      margin: 0,
    },
  },
  iconPreview: {
    width: spacing(9),
    height: spacing(9),
    border: `1px solid ${palette.gray.main}`,
    borderRadius: spacing(1),
    background: palette.gray.light,

    '& svg': {
      color: ({ selectedTheme }: { selectedTheme: IconSelectedTheme }) =>
        getSelectedThemeColors(palette, selectedTheme).color,
      fontSize: spacing(4.5),
    },
  },
  inputNameOfLabel: {
    marginTop: spacing(0),
  },
  tabs: {
    marginTop: spacing(4),
    marginLeft: -spacing(3),
    marginRight: -spacing(3),
  },
  tabContent: {
    padding: spacing(3, 3, 0, 3),
  },
  actions: {
    marginTop: spacing(1),
    padding: spacing(1.75, 2, 2, 2),
    borderTop: `${spacing(0.25)}px solid ${palette.gray.light}`,
  },
}));
