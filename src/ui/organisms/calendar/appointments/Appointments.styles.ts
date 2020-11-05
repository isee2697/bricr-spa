import { makeStyles } from '@material-ui/core/styles';

import { palette } from 'theme/palette';

export const useStyles = (color: string = palette.blue.main) =>
  makeStyles(({ spacing, typography }) => ({
    root: {
      backgroundColor: `${color}69`,
      boxSizing: 'border-box',
      borderRadius: spacing(0, 0, 1, 1),
      paddingTop: spacing(0.25),
      '&:hover': {
        backgroundColor: `${color}59`,
      },
    },
    allDay: {
      border: 'none !important',
      borderRadius: spacing(0.5),
      paddingTop: spacing(0.25),
      '& [class*="HorizontalAppointment-title"]': {
        fontWeight: typography.fontWeightBold,
      },
    },
    travelTime: {
      backgroundColor: palette.white.main,
      borderRadius: 0,
      borderTop: `${palette.blue.dark} ${spacing(0.25)}px solid !important`,
      borderBottom: `${palette.blue.dark} ${spacing(0.25)}px solid`,
    },
    Week: {
      borderTop: `${color} ${spacing(0.5)}px solid`,
    },
    Day: {
      borderTop: `${color} ${spacing(0.5)}px solid`,
    },
    Month: {
      borderRadius: spacing(1),
    },
    Group: {
      marginTop: spacing(1),
    },
    Warning: {
      left: `${spacing(-11.5)}px !important`,
      zIndex: 3,
    },
    task: {
      borderTop: 'none',
      borderRadius: spacing(0.5),
      paddingTop: 0,
    },
  }))();

export const useContentStyles = (color: string = palette.blue.main) =>
  makeStyles(({ typography, spacing }) => ({
    root: {
      color: palette.black.main,
      '& > div:first-child': {
        fontWeight: typography.fontWeightRegular,
      },
    },
    recurring: {
      flexDirection: 'row-reverse',
      '& > div:first-child': {
        width: `calc(100% - ${spacing(3)}px)`,
      },
      '& > div:last-child': {
        width: spacing(3),
        height: spacing(3),
      },
    },
    defaultIcon: {
      position: 'absolute',
      top: spacing(1),
      left: spacing(0.5),
      '& path': {
        fill: color,
      },
    },
    icon: {
      position: 'absolute',
      left: 0,
      top: 0,
      border: `${spacing(0.125)}px solid ${color}`,
      borderRadius: spacing(0.5),
      '& path': {
        fill: color,
      },
    },
  }))();
