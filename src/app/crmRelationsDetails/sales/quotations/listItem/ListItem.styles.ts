import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  row: {
    display: 'flex',
    alignItems: 'flex-start',
    position: 'relative',

    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      width: `calc(100% - ${theme.spacing(4)}px)`,
      margin: theme.spacing(0, 2),
      borderBottom: `${theme.spacing(0.25)}px solid ${theme.palette.gray.light}`,
    },

    '&.declined': {
      filter: 'grayscale(1)',
    },
  },
  rowChecked: {
    background: `${theme.palette.primary.main}08`,
  },
  rowItem: {
    padding: theme.spacing(2.75, 2, 2.75, 0),
  },
  image: {
    width: theme.spacing(13.25),
    height: theme.spacing(18.75),
    filter: `drop-shadow(-${theme.spacing(0.25)}px ${theme.spacing(0.5)}px ${theme.spacing(0.5)}px ${
      theme.palette.black.main
    }B0)`,
  },
  chip: {
    color: theme.palette.gray.main,
  },
  stepperWrapper: {
    position: 'relative',
  },
  stepper: {
    background: 'transparent',
    width: '100%',
    padding: 0,
    zIndex: 1,
  },
  step: {
    padding: 0,
    maxWidth: theme.spacing(12),
    '& .MuiStepConnector-line': {
      background: theme.palette.gray.light,
    },
    '&.completed .MuiStepConnector-line': {
      background: theme.palette.green.main,
    },
    '&.rejected .MuiStepConnector-line': {
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
    '&.rejected': {
      background: theme.palette.red.main,
      border: `1px solid ${theme.palette.red.main}`,
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
  grayConnector: {
    position: 'absolute',
    width: `calc(100% - ${theme.spacing(3)}px)`,
    borderBottom: `2px solid ${theme.palette.gray.light}`,
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(1.5) - 1,
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));
