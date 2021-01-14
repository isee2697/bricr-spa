import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  hideSidebarButton: {
    background: theme.palette.white.main,
    boxShadow: theme.shadows[1],
    marginRight: theme.spacing(1),
  },
  avatarIcon: {
    marginRight: theme.spacing(1),
  },
  root: {
    minHeight: theme.spacing(3.5),
  },
}));
