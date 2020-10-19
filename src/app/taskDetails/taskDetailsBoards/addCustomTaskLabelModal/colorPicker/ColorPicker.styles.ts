import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    width: spacing(32),
    margin: 'auto',
  },
}));
