import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  content: {
    padding: 0,

    '&:last-child': {
      paddingBottom: theme.spacing(1),
    },
  },
}));
