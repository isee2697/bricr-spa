import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, spacing, typography }) => ({
  root: {
    backgroundColor: palette.gray.light,
    borderRadius: spacing(1, 1, 0, 0),
    height: spacing(4),
    '& .MuiTableCell-root.MuiTableCell-body': {
      border: 'none',
    },
    '& [class*="Cell-dayOfWeek-"]': {
      paddingTop: 0,
      color: palette.text.primary,
      fontWeight: typography.fontWeightBold,
    },
  },
  appointmentRoot: {
    height: '180px',
  },
}));
