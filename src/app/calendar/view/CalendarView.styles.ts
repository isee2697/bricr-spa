import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ palette, spacing }) => ({
  buttons: {
    '& .MuiButton-root': {
      backgroundColor: palette.white.main,
      '&:last-child': {
        marginLeft: spacing(1),
      },
    },
  },
}));
