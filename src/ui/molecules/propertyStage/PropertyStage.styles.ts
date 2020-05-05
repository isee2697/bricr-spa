import { makeStyles, withStyles } from '@material-ui/core/styles';

import { StepConnector, StepLabel } from 'ui/atoms';

export const useStyles = makeStyles(theme => ({
  step: {
    padding: 0,
  },
  stepper: {
    backgroundColor: 'transparent',
  },
}));

export const Connector = withStyles(theme => ({
  alternativeLabel: {
    top: 11,
    left: -76,
    right: 100,
  },
  active: {
    '& $line': {
      borderColor: theme.palette.success.main,
    },
  },
  completed: {
    '& $line': {
      borderColor: theme.palette.success.main,
    },
  },
  line: {
    borderColor: theme.palette.gray.light,
    borderTopWidth: 2,
    borderRadius: 1,
  },
}))(StepConnector);

export const Labels = withStyles(theme => ({
  root: {
    alignItems: 'flex-start',
  },
  labelContainer: {
    marginTop: theme.spacing(1),
  },
  label: {
    '&.MuiStepLabel-label': {
      textAlign: 'left',
      marginTop: 0,
    },
    '& > h6': {
      color: theme.palette.gray.main,
    },
  },
  active: {
    '& > h5': {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  completed: {
    '& > h5': {
      color: theme.palette.success.main,
      fontWeight: theme.typography.fontWeightBold,
    },
  },
}))(StepLabel);
