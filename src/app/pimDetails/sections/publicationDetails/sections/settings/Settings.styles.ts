import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  checkIcon: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    borderRadius: theme.spacing(7),
    background: theme.palette.success.main,
    color: theme.palette.white.main,
  },
  successPanel: {
    background: theme.palette.gradientPrimary.light,
    color: theme.palette.white.main,
    height: theme.spacing(29),

    '& svg': {
      fontSize: theme.spacing(8),
    },
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
