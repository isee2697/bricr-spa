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
    width: 80,
    height: 64,
  },
  brokerTitle: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  brokerId: {
    color: theme.palette.gray.main,
  },
}));
