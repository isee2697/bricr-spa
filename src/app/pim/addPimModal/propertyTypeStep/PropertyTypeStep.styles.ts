import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette, typography }) => ({
  selectCard: {
    paddingRight: spacing(3),
    '& button': {
      padding: spacing(1, 2),
      lineHeight: typography.h5.lineHeight,
    },
    '& button:hover': {
      '@media (hover: none)': {
        backgroundColor: palette.white.main,
      },
    },
  },
}));
