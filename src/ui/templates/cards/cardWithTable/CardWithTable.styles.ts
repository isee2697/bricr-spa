import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ spacing, palette, typography }) => ({
  count: {
    marginLeft: spacing(2),
    padding: 0,
    color: palette.gray.main,
    background: palette.gray.light,

    '& > .MuiChip-label': {
      padding: spacing(0, 1.5),
      fontSize: typography.h4.fontSize,
    },
  },
  list: {
    '& .card-file-list': {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },
    '& .card-file-list:nth-child(odd)': {
      backgroundColor: palette.gray.light,
    },
    '& .MuiChip-root': {
      borderColor: palette.gray.main,
      color: palette.gray.main,
      backgroundColor: palette.white.main,
    },
  },
}));
