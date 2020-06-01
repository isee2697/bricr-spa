import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  selectCard: {
    paddingRight: theme.spacing(3),
    '& button:hover': {
      '@media (hover: none)': {
        backgroundColor: theme.palette.white.main,
      },
    },
  },
}));
