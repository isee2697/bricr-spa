import { makeStyles } from '@material-ui/core/styles';

import { palette } from 'theme/palette';

export const useStyles = (color: string = palette.blue.main) =>
  makeStyles(({ spacing, typography }) => ({
    root: {
      backgroundColor: `${color}99`,
      boxSizing: 'border-box',
      borderRadius: spacing(0, 0, 1, 1),
      '&:hover': {
        backgroundColor: `${color}89`,
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
      borderTop: `${color} ${spacing(0.5)}px solid`,
    },
    Warning: {
      left: `${spacing(-11.5)}px !important`,
      zIndex: 3,
    },
    task: {
      borderTop: 'none',
      borderRadius: spacing(0.5),
    },
  }))();

export const useContentStyles = (color: string = palette.blue.main) =>
  makeStyles(({ spacing }) => ({
    recurring: {
      flexDirection: 'row-reverse',

      '& > div:first-child': {
        width: `calc(100% - ${spacing(3)}px)`,
      },
      '& > div:last-child': {
        width: spacing(3),
        height: spacing(3),
        '& > svg': {
          position: 'absolute',
          left: 0,
          top: 0,
        },
      },
    },
    icon: {
      border: `${spacing(0.125)}px solid ${color}`,
      borderRadius: spacing(0.5),

      '& path': {
        fill: color,
      },
    },
  }))();
