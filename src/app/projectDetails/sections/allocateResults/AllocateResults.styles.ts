import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    '& .form-section-title div': {
      backgroundColor: theme.palette.purple.main,
      color: theme.palette.white.main,
    },
  },
  allocateResults: {},
}));
