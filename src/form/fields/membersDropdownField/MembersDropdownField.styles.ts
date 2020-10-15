import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  assignee: {
    display: 'flex',
    alignItems: 'center',
  },
  assigneeAvatar: {
    marginRight: theme.spacing(1.5),
  },
}));
