import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  hideSidebarButton: {
    background: theme.palette.white.main,
    boxShadow: theme.shadows[1],
    marginRight: theme.spacing(1),
  },
  bold: {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));
