import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing, palette, typography, breakpoints }) => ({
  root: {
    '& .MuiPickersStaticWrapper-staticWrapperRoot': {
      minWidth: spacing(30),
      backgroundColor: 'transparent',
    },
    '& .MuiPickersBasePicker-pickerView': {
      minWidth: spacing(30),
    },
    '& .MuiPickersCalendar-transitionContainer': {
      marginTop: 0,
    },
    '& .MuiPickersCalendar-transitionContainer, & .MuiPickersBasePicker-pickerView': {
      minHeight: spacing(19),
      [breakpoints.up('lg')]: {
        minHeight: spacing(22),
      },
    },
    '& .MuiPickersDay-day': {
      width: spacing(3),
      height: spacing(3),
      '& .MuiTypography-root ': {
        fontWeight: typography.fontWeightBold,
      },
    },

    '& .MuiTypography-h5': {
      color: palette.gray.main,
    },
    '& .MuiPickersCalendarHeader-daysHeader': {
      maxHeight: spacing(3),
    },
    '& .MuiPickersCalendarHeader-daysHeader .MuiPickersCalendarHeader-dayLabel': {
      width: spacing(3),
      fontWeight: typography.fontWeightBold,
      paddingTop: spacing(1),
      paddingBottom: spacing(1.5),
    },
    '& .MuiPickersCalendarHeader-daysHeader .MuiPickersCalendarHeader-dayLabel:last-child': {
      marginRight: spacing(3.6),
      position: 'relative',
      '&:last-child::after': {
        content: '"W"',
        textAlign: 'center',
        width: spacing(3),
        color: palette.blue.dark,
        backgroundColor: palette.gray.light,
        position: 'absolute',
        right: spacing(-3.4),
        top: 0,
        paddingTop: spacing(1),
        paddingBottom: spacing(1.5),
        borderRadius: spacing(1, 1, 0, 0),
      },
    },
    '& .MuiPickersCalendar-week:last-child .MuiPickersDay-day.MuiPickersDay-dayDisabled:last-child': {
      paddingBottom: spacing(0.5),
      height: spacing(4),
      borderRadius: spacing(0, 0, 1, 1),
    },
  },
  week: {
    '& .MuiPickersDay-day:last-child': {
      color: palette.blue.dark,
      backgroundColor: palette.gray.light,
      borderRadius: 0,
    },
  },
}));
