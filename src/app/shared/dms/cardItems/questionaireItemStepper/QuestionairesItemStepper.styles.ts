import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  date: {
    color: theme.palette.gray.main,
    fontSize: theme.typography.h6.fontSize,
    lineHeight: theme.typography.h6.lineHeight,
  },
  title: {
    fontSize: theme.typography.h3.fontSize,
    lineHeight: theme.typography.h3.lineHeight,
    fontWeight: theme.typography.fontWeightBold,
  },
  subtitle: {
    fontSize: theme.typography.h5.fontSize,
    lineHeight: theme.typography.h5.lineHeight,
    fontWeight: theme.typography.fontWeightBold,
  },
  menuItem: {
    padding: 0,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderBottom: `2px solid ${theme.palette.gray.light}`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    color: theme.palette.gray.main,
  },
  statusBar: {
    borderRadius: 999,
    color: theme.palette.gray.main,
    fontSize: theme.typography.h6.fontSize,
    lineHeight: theme.typography.h6.lineHeight,
    display: 'flex',
    alignItems: 'center',
  },
  statusIcon: {
    width: theme.spacing(1.75),
    height: theme.spacing(1.75),
    marginLeft: theme.spacing(1),
  },
  stepper: {
    background: 'transparent',
    width: '100%',
    padding: 0,
  },
  step: {
    padding: 0,
    '&.completed .MuiStepConnector-line': {
      background: theme.palette.green.main,
    },
    '&.rejected .MuiStepConnector-line': {
      transform: 'matrix(-1, 0, 0, 1, 0, 0)',
      background: theme.palette.gradientGreenRed.main,
    },
    '&.active .MuiStepConnector-line': {
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
    '&.completed .MuiStepLabel-label': {
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

    '&.completed': {
      background: theme.palette.green.main,
      border: `1px solid ${theme.palette.green.main}`,
      color: theme.palette.white.main,
    },
    '&.active': {
      background: theme.palette.white.main,
      border: `1px solid ${theme.palette.green.main}`,
      color: theme.palette.black.main,
    },
  },
  stepLabelOptional: {
    color: theme.palette.gray.main,
  },
}));
