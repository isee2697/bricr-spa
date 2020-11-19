import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTab-root': {
      minWidth: theme.spacing(11.25),
    },
  },
  tab: {
    overflow: 'visible',
  },
}));
