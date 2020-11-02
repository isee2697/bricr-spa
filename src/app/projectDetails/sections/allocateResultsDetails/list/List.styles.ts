import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  content: {
    paddingTop: 0,
    paddingBottom: 0,

    '&:last-child': {
      paddingBottom: theme.spacing(1),
    },
  },
}));
