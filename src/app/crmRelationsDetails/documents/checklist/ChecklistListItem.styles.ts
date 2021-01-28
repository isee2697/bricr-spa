import { StepConnector, withStyles, makeStyles } from '@material-ui/core';

import { Checklist, ChecklistStatus } from './Checklist.types';

export const StatusStepConnector = withStyles(theme => ({
  alternativeLabel: {
    left: `calc(-100% + ${theme.spacing(3)}px)`,
    right: '100%',
  },
  active: {
    '& $line': {
      background: theme.palette.green.main,
    },
  },
  completed: {
    '& $line': {
      background: theme.palette.green.main,
    },
  },
  line: {
    background: theme.palette.gray.light,
    borderTopWidth: 0,
    minHeight: 2,
    height: 2,
  },
}))(StepConnector);

export const useStyles = makeStyles(theme => ({
  image: {
    width: theme.spacing(13),
    height: theme.spacing(19),
    marginRight: theme.spacing(2),
    filter: ({ status }: Checklist) => (status === ChecklistStatus.Inactive ? 'grayscale(1)' : ''),
    fontSize: '3em',
  },
  stepper: {
    background: 'transparent',
    width: '100%',
    padding: 0,
  },
  step: {
    padding: 0,
    maxWidth: theme.spacing(12),
    '&.Completed .MuiStepConnector-line': {
      background: theme.palette.green.main,
    },
    '&.Rejected .MuiStepConnector-line': {
      transform: 'matrix(-1, 0, 0, 1, 0, 0)',
      background: theme.palette.gradientGreenRed.main,
    },
    '&.InProgress .MuiStepConnector-line': {
      background: theme.palette.green.main,
    },
  },
  stepLabel: {
    alignItems: 'flex-start',
    lineBreak: 'anywhere',
    paddingRight: theme.spacing(2),
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
      textAlign: 'left',
      color: theme.palette.gray.main,
      marginTop: theme.spacing(1),
    },
    '&.Completed .MuiStepLabel-label': {
      color: theme.palette.green.main,
      fontWeight: theme.typography.fontWeightBold,
    },
    '&.Rejected .MuiStepLabel-label': {
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
    '&.Rejected': {
      background: theme.palette.red.main,
      border: `1px solid ${theme.palette.red.main}`,
      color: theme.palette.white.main,
    },
    '&.InProgress': {
      background: theme.palette.white.main,
      border: `1px solid ${theme.palette.green.main}`,
      color: theme.palette.black.main,
    },
  },
  stepLabelOptional: {
    color: theme.palette.gray.main,
  },
}));
