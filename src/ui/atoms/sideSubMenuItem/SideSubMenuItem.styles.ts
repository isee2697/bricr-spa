import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ palette, shadows, spacing }) => ({
  item: {
    marginLeft: spacing(6),
    '&.Mui-selected, &:hover, &.Mui-selected:hover': {
      '&::after': {
        borderBottomColor: palette.gray.light,
        boxShadow: 'none',
      },
    },
    '&.Mui-selected::after': {
      boxShadow: 'none',
    },
  },
}));
