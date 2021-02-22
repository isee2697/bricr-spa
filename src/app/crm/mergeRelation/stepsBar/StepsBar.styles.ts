import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette, typography }) => ({
  fontWeightBold: {
    fontWeight: typography.fontWeightBold,
  },
  stepperWrapper: {
    '& .ScrollbarsCustom-Wrapper': {
      position: 'static !important',
    },
    '& .ScrollbarsCustom-Scroller': {
      position: 'static !important',
    },
    '& .ScrollbarsCustom-Track.ScrollbarsCustom-TrackX': {
      display: 'none',
    },
  },
  stepper: {
    background: 'transparent',
    width: '100%',
  },
  step: {
    '&.completed .MuiStepConnector-line': {
      borderColor: palette.green.main,
    },
  },
  stepLabel: {
    paddingTop: spacing(1.5),
    justifyContent: 'flex-start',
    '& .MuiStepIcon-root': {
      color: palette.white.main,
      border: `1px solid ${palette.white.main}`,
      borderRadius: spacing(1.5),
    },
    '& .MuiStepIcon-root.MuiStepIcon-active': {
      color: palette.white.main,
      border: `1px solid ${palette.green.main}`,
      borderRadius: spacing(1.5),
    },
    '& .MuiStepIcon-root.MuiStepIcon-completed': {
      color: palette.green.main,
      border: `1px solid transparent`,
      borderRadius: spacing(1.5),
    },
    '& .MuiStepIcon-text': {
      fill: palette.black.main,
      fontWeight: typography.fontWeightMedium,
    },
    '& .MuiStepLabel-label': {
      color: palette.gray.main,
      fontSize: typography.h5.fontSize,
      fontWeight: typography.fontWeightRegular,
      marginTop: spacing(1),
      alignItems: 'flex-start',
      textAlign: 'left',
      '&.MuiStepLabel-active': {
        color: palette.black.main,
        fontWeight: typography.fontWeightBold,
      },
      '&.MuiStepLabel-completed': {
        color: palette.green.main,
        fontWeight: typography.fontWeightBold,
      },
    },
    '& .MuiStepLabel-alternativeLabel': {
      alignItems: 'flex-start',
      textAlign: 'left',
    },
  },
  lastLabel: {
    '& .MuiStepLabel-iconContainer': {
      visibility: 'hidden',
    },
    '& .MuiStepLabel-label': {
      marginTop: -spacing(3.5),
      marginLeft: spacing(3.5),
    },
  },
  stepLabelOptional: {
    color: palette.gray.main,
  },
}));
