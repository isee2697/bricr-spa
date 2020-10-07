import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => ({
  root: {
    height: spacing(7.5),
    lineHeight: `${spacing(7.5)}px`,
    '&[class*="Label-emptyLabel"]': {
      height: spacing(3.75),
    },
  },
  empty: {
    height: spacing(3.75),
  },
  day: {
    // height: spacing(7.5),
    '& td[class*="TickCell-cell"]': {
      height: spacing(7.5),
    },
  },
}));
