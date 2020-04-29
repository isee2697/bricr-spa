import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  list: {
    width: 216,
    paddingLeft: theme.spacing(3),
    boxShadow: 'inset -2px 0px 4px rgba(130, 141, 184, 0.2)',
    '& > .MuiListItem-root:not(:first-child)': {
      marginTop: theme.spacing(1),
    },
  },
}));
