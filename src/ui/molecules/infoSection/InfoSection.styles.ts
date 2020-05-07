import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  box: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  emoji: {
    fontSize: 64,
  },
}));
