import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  brokerItem: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
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
