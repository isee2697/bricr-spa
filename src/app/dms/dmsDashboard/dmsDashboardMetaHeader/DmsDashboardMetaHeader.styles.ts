import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
  },
  meta: {
    background: theme.palette.white.main,
    borderRadius: theme.spacing(1),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  metaCount: {
    textAlign: 'center',
    fontWeight: theme.typography.fontWeightMedium,
  },
  metaLabel: {
    textAlign: 'center',
    color: theme.palette.gray.main,
  },
}));
