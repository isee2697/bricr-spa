import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    width: 'unset !important',
  },
  content: {
    '&:last-child': {
      paddingBottom: theme.spacing(2),
    },
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightBold,
  },
  fontWeightBolder: {
    fontWeight: theme.typography.fontWeightBolder,
  },
}));
