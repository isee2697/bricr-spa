import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ typography, spacing }) => ({
  input: {
    marginTop: 0,
  },
  addressContainer: {
    overflow: 'visible',
  },
  avatar: {
    width: spacing(10.5),
    height: spacing(4),
  },
  fontWeightBold: {
    fontWeight: typography.fontWeightBold,
  },
}));
