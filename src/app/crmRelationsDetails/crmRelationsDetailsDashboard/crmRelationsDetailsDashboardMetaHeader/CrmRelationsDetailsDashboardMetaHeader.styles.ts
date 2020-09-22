import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),
  },
  meta: {
    background: theme.palette.white.main,
    borderRadius: theme.spacing(1),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  metaCount: {
    textAlign: 'center',
  },
  metaLabel: {
    textAlign: 'center',
    color: theme.palette.gray.main,
  },
}));
