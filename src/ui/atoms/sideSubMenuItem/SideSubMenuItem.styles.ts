import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ palette, shadows }) => ({
  item: {
    '&.Mui-selected, &:hover, &.Mui-selected:hover': {
      '&::after': {
        borderBottomColor: palette.gray.light,
      },
    },
  },
}));
