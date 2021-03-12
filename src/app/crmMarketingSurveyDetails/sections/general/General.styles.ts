import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  score: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    border: `${theme.spacing(0.5)}px solid ${theme.palette.success.main}`,
    borderRadius: '50%',
    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'center',
    lineHeight: `${theme.spacing(8)}px`,
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
