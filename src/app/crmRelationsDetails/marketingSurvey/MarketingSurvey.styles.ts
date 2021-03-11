import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  score: {
    fontWeight: theme.typography.fontWeightBold,
    width: theme.spacing(3.5),
    height: theme.spacing(3.5),
    border: `1px solid ${theme.palette.error.main}`,
    lineHeight: `${theme.spacing(3.5)}px`,
    borderRadius: '50%',
    textAlign: 'center',

    '&.warning': {
      border: `1px solid ${theme.palette.warning.main}`,
    },

    '&.success': {
      border: `1px solid ${theme.palette.success.main}`,
    },
  },
}));
