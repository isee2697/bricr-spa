import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  stepper: {
    background: 'transparent',
    width: '100%',
  },
  step: {
    '&.completed .MuiStepConnector-line': {
      borderColor: theme.palette.green.main,
    },
  },
  stepLabel: {
    paddingTop: theme.spacing(1.5),
    '& .MuiStepIcon-root': {
      color: theme.palette.white.main,
      border: `1px solid ${theme.palette.green.main}`,
      borderRadius: theme.spacing(1.5),
    },
    '& .MuiStepIcon-root.MuiStepIcon-active': {
      color: theme.palette.white.main,
      border: `1px solid ${theme.palette.green.main}`,
      borderRadius: theme.spacing(1.5),
    },
    '& .MuiStepIcon-root.MuiStepIcon-completed': {
      color: theme.palette.green.main,
      border: `1px solid transparent`,
      borderRadius: theme.spacing(1.5),
    },
    '& .MuiStepIcon-text': {
      fill: theme.palette.black.main,
      fontWeight: theme.typography.fontWeightMedium,
    },
    '& .MuiStepLabel-label': {
      color: theme.palette.black.main,
      fontWeight: theme.typography.fontWeightBold,
      marginTop: theme.spacing(1),
    },
  },
  lastLabel: {
    '& .MuiStepLabel-iconContainer': {
      visibility: 'hidden',
    },
    '& .MuiStepLabel-label': {
      marginTop: -theme.spacing(3.5),
      marginLeft: theme.spacing(3.5),
    },
  },
  stepLabelOptional: {
    color: theme.palette.gray.main,
    marginTop: theme.spacing(1),
  },
}));
