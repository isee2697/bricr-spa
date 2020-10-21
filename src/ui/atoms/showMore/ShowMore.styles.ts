import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, typography }) => ({
  text: {
    color: palette.gray.main,
    fontWeight: typography.fontWeightBolder,
  },
}));
