import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing, palette, typography }) => ({
  root: {
    position: 'relative',
    marginBottom: spacing(2.25),
  },
  sideMenu: {
    top: spacing(6),
  },
  banner: {
    width: '100%',
    backgroundColor: palette.gray.light,
    display: 'flex',
    alignItems: 'center',
    '& .MuiSvgIcon-root': {
      backgroundColor: palette.white.main,
      padding: spacing(0.5),
      margin: spacing(1, 2),
      borderRadius: spacing(1),
      width: spacing(4),
      height: spacing(4),
    },
    '& .MuiTypography-h5': {
      fontWeight: typography.fontWeightBold,
    },
  },
  pickers: {
    '& .MuiPickersStaticWrapper-staticWrapperRoot': {
      minWidth: 0,
      backgroundColor: 'transparent',
    },
    '& .MuiPickersBasePicker-pickerView': {
      minWidth: 0,
      maxWidth: `calc(100% - ${spacing(1)}px`,
      minHeight: spacing(18),
    },
    '& .MuiPickersDay-day': {
      width: spacing(3.2),
      height: spacing(3.2),
    },
    '& .MuiPickersCalendarHeader-dayLabel': {
      width: spacing(3.2),
    },
    '& .MuiPickersCalendar-transitionContainer': {
      minHeight: spacing(18),
    },
  },
  menuWrapper: {
    background: palette.white.main,
    boxShadow: 'inset -2px 0px 4px rgba(130, 141, 184, 0.2)',
    height: `calc(100vh - ${spacing(6)}px)`,
    top: spacing(6),
    paddingTop: spacing(2),
    overflowY: 'auto',
    position: 'sticky',
    '& a': {
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      fontWeight: typography.fontWeightMedium,
      fontSize: typography.h3.fontSize,
      color: palette.gray.main,
      '& svg': {
        marginRight: spacing(1),
      },
    },
  },
  hideButton: {
    position: 'absolute',
    right: -14,
    top: 24,
    zIndex: 10,
  },
}));
