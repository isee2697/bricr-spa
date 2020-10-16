import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  label: {
    display: 'flex',
  },
  assignToMeButton: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    cursor: 'pointer',
  },
}));
