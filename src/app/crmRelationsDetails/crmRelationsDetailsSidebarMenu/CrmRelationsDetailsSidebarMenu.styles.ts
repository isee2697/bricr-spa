import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  alternativeRelation: {
    border: `1px solid ${theme.palette.gray.main}`,
    borderRadius: theme.spacing(1),
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
