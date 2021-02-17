import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette, typography, shadows }) => ({
  resultTitles: {
    fontSize: `${spacing(1.4)}px`,
  },
  modal: {
    '& .MuiDialogTitle-root': {
      borderBottom: `1px solid ${palette.gray.light}`,
    },
    '& .MuiDialogActions-root': {
      borderTop: `1px solid ${palette.gray.light}`,
      paddingTop: spacing(2.5),
    },

    '& .MuiFormControlLabel-label': {
      '& .MuiTypography-h5': typography.h5,
      '& .MuiTypography-h6': typography.h6,
    },
  },
  hideSidebarButton: {
    background: palette.white.main,
    boxShadow: shadows[1],
    marginRight: spacing(1),
  },
}));
