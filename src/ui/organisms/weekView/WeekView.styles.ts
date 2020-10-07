import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => ({
  root: {
    height: spacing(7.5),
    '&[class*="Label-emptyLabel"]': {
      height: spacing(3.75),
    },
  },
}));
