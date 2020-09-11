import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, spacing }) => ({
  actions: {
    marginTop: spacing(1),
    padding: spacing(1.75, 2, 2, 2),
    borderTop: `${spacing(0.25)}px solid ${palette.gray.light}`,
  },
  avatar: {
    marginLeft: spacing(1),
    marginRight: spacing(1),
  },
}));
