import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, spacing, typography }) => ({
  input: {
    display: 'flex',
    background: palette.gray.light,
    borderRadius: spacing(1),
    border: `${spacing(0.125)}px solid ${palette.gray.light}`,
    padding: spacing(0, 1.5, 0, 1),
    '&.MuiInput-underline::after, &.MuiInput-underline::before': {
      content: 'none',
    },
    '&.Mui-focused': {
      border: `${spacing(0.125)}px solid ${palette.primary.main}`,
    },
    '& input': {
      padding: spacing(1.375, 1.5, 1.375, 0.5),
      lineHeight: typography.h5.lineHeight,
      fontSize: typography.h5.fontSize,
      height: 'auto',
      fontWeight: typography.fontWeightMedium,
    },
  },
}));
