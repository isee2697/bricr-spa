import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing, palette, shadows }) => ({
  content: {
    padding: spacing(3),
  },
  hideSidebarButton: {
    background: palette.white.main,
    boxShadow: shadows[1],
    marginRight: spacing(1),
  },
}));
