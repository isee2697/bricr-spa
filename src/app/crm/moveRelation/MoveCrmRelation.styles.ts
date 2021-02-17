import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette, typography }) => ({
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
  fontWeightBold: {
    fontWeight: typography.fontWeightBold,
  },
}));
