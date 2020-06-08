import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, spacing, typography }) => ({
  tile: {
    marginBottom: spacing(2),
  },
  icon: {
    width: spacing(4),
    height: spacing(4),
    color: palette.gray.main,
  },
  tileTitle: {
    fontSize: typography.h5.fontSize,
    fontWeight: typography.h5.fontWeight,
    marginLeft: spacing(1.25),
  },
  listLabel: {
    marginTop: spacing(2),
    display: 'inline-block',
  },
  list: {
    maxHeight: spacing(28),
    overflow: 'scroll',
    '& > .MuiBox-root:last-child': {
      marginBottom: 0,
    },
  },
  actions: {
    marginTop: spacing(1),
    padding: spacing(1.75, 2, 2, 2),
    borderTop: `${spacing(0.25)}px solid ${palette.gray.light}`,
  },
  highlight: {
    color: 'red',
  },
  titleSelected: {
    '& svg': {
      color: palette.primary.main,
    },
  },
}));
