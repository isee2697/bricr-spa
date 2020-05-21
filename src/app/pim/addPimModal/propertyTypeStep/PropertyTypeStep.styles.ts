import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  selectCard: {
    '& button:hover': {
      '@media (hover: none)': {
        backgroundColor: theme.palette.white.main,
      },
    },
  },
}));
