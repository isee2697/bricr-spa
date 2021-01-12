import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  steopItem: {
    borderBottom: `1px solid ${theme.palette.gray.light}`,

    '&:last-of-type': {
      borderBottom: 'none',
    },
  },
  stepperWrapper: {
    position: 'relative',
  },
  stepper: {
    background: 'transparent',
    minWidth: theme.spacing(34.5),
    padding: 0,
    zIndex: 1,
    flex: '1 1',

    '&.inactive': {
      filter: 'grayscale(1)',
    },
  },
  step: {
    padding: 0,
    '& .MuiStepConnector-line': {
      background: theme.palette.gray.light,
    },
    '&.Completed .MuiStepConnector-line': {
      background: theme.palette.green.main,
    },
    '&.InProgress .MuiStepConnector-line': {
      background: theme.palette.green.main,
    },
    '&.active .MuiStepConnector-line': {
      background: theme.palette.green.main,
    },
  },
  stepLabel: {
    alignItems: 'flex-start',

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
    '& .MuiStepIcon-root.MuiStepIcon-Completed': {
      color: theme.palette.green.main,
      border: `1px solid transparent`,
      borderRadius: theme.spacing(1.5),
    },
    '& .MuiStepIcon-text': {
      fill: theme.palette.black.main,
      fontWeight: theme.typography.fontWeightMedium,
    },
    '& .MuiStepLabel-label': {
      textAlign: 'left',
      color: theme.palette.gray.main,
      marginTop: theme.spacing(1),
    },
    '&.Completed .MuiStepLabel-label': {
      color: theme.palette.green.main,
      fontWeight: theme.typography.fontWeightBold,
    },
    '&.rejected .MuiStepLabel-label': {
      color: theme.palette.red.main,
      fontWeight: theme.typography.fontWeightBold,
    },
    '&.active .MuiStepLabel-label': {
      color: theme.palette.black.main,
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  stepIcon: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    lineHeight: `${theme.spacing(3)}px`,
    background: theme.palette.gray.light,
    border: `1px solid ${theme.palette.gray.light}`,
    borderRadius: theme.spacing(1.5),
    color: theme.palette.gray.main,
    textAlign: 'center',

    '&.Completed': {
      background: theme.palette.green.main,
      border: `1px solid ${theme.palette.green.main}`,
      color: theme.palette.white.main,
    },
    '&.InProgress': {
      background: theme.palette.white.main,
      border: `1px solid ${theme.palette.green.main}`,
      color: theme.palette.text.primary,
    },
  },
  stepLabelOptional: {
    color: theme.palette.gray.main,
  },
  grayConnector: {
    position: 'absolute',
    width: `calc(100% - ${theme.spacing(3)}px)`,
    borderBottom: `2px solid ${theme.palette.gray.light}`,
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(1.5) - 1,
  },
  chip: {
    color: theme.palette.gray.main,
  },
}));
