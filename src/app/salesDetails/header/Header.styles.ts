import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  hideSidebarButton: {
    background: theme.palette.white.main,
    boxShadow: theme.shadows[1],
    marginRight: theme.spacing(1),
  },
  textFieldAbout: {
    '& .MuiInputBase-input': {
      padding: theme.spacing(1.5, 2),
    },
  },
}));
