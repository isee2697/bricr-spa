import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  hideSidebarButton: {
    background: theme.palette.white.main,
    boxShadow: theme.shadows[1],
    marginRight: theme.spacing(1),
  },
}));
