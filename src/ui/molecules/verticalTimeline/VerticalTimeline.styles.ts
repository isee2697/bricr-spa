import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  stepper: {
    paddingLeft: 0,
    marginRight: theme.spacing(2),
  },
  stepConnector: {
    padding: 0,
  },
  stepLabel: {
    position: 'relative',
  },
  stepLabelContainer: {
    top: theme.spacing(0.5),
    left: 40,
  },
  stepContent: {
    marginTop: -theme.spacing(3),
    borderLeft: `2px solid ${theme.palette.green.main}`,
  },
  noBorder: {
    border: 'none',
  },
}));
