import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(4),
  },
  editSwitcher: {
    marginRight: theme.spacing(3),
  },
  content: {
    background: theme.palette.gradientBlue.main,
    borderRadius: theme.spacing(1),
  },
  partnerItem: {
    background: theme.palette.gradientBlue.main,
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(2),

    '&:last-child': {
      marginBottom: 0,
    },
  },
  marginTopTwo: {
    marginTop: theme.spacing(2),
  },
}));
