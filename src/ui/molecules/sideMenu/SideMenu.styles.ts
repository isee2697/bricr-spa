import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => ({
  list: {
    width: '100%',
    paddingLeft: spacing(3),
    overflow: 'hidden',
  },
}));
