import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
  },
  propertyItem: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
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
