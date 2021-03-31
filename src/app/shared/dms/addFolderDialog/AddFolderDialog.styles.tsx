import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  actions: {
    padding: spacing(2),
    margin: spacing(0, 1),
    borderTop: `1px solid ${palette.gray.light}`,
  },
}));
