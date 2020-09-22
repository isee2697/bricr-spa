import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
  },
  propertyItem: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),

    '&:first-of-type': {
      paddingTop: 0,
    },

    '&:last-of-type': {
      paddingBottom: 0,
    },
  },
  propertyImage: {
    width: 80,
    height: 64,
  },
  propertyTitle: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  propertyLabel: {
    color: theme.palette.gray.main,
  },
}));
