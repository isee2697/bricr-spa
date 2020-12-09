import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, spacing }) => ({
  uploadRoot: {
    width: '100%',
    minHeight: spacing(30),
  },
}));
