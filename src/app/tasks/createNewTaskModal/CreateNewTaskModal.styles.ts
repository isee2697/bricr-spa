import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  label: {
    display: 'flex',
  },
  assignee: {
    display: 'flex',
    alignItems: 'center',
  },
  assigneeAvatar: {
    marginRight: theme.spacing(1.5),
  },
  assignToMeButton: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    cursor: 'pointer',
  },
}));
