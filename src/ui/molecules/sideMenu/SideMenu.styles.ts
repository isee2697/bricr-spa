import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  list: {
    width: '100%',
    paddingLeft: theme.spacing(3),
    '& > .MuiListItem-root:not(:first-child)': {
      marginTop: theme.spacing(1),
    },
  },
}));
