import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, spacing, typography }) => ({
  inputField: {
    display: 'none',
  },
  chip: {
    backgroundColor: palette.gray.light,
    color: palette.blue.dark,
    borderRadius: spacing(1),
    fontWeight: typography.fontWeightBold,
  },
  error: {
    color: palette.red.main,
  },
}));
