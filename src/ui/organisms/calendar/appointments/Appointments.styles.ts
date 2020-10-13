import { makeStyles } from '@material-ui/core/styles';

import { palette } from 'theme/palette';

export const useStyles = (color: string = palette.blue.main) =>
  makeStyles(({ spacing, typography }) => ({
    root: {
      backgroundColor: `${color}99`,

      borderTop: `${color} ${spacing(0.5)}px solid`,
      boxSizing: 'border-box',
      borderRadius: spacing(0, 0, 1, 1),
    },
    allDay: {
      border: 'none',
      borderRadius: spacing(0.5),
      marginTop: spacing(0.25),
      marginBottom: spacing(0.25),
      paddingTop: spacing(0.25),
      '& [class*="HorizontalAppointment-title"]': {
        fontWeight: typography.fontWeightBold,
      },
    },
  }))();
