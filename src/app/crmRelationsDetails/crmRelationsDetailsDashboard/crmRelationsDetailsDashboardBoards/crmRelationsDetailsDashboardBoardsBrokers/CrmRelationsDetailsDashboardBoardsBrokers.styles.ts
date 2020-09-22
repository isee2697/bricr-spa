import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  brokerItem: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),

    '&:first-of-type': {
      paddingTop: 0,
    },

    '&:last-of-type': {
      paddingBottom: 0,
    },
  },
  brokerImage: {
    width: theme.spacing(10),
    height: theme.spacing(8),
  },
  brokerTitle: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  brokerId: {
    color: theme.palette.gray.main,
  },
}));
