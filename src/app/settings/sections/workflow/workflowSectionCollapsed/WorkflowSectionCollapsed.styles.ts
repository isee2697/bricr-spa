import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    backgroundColor: palette.gray.light,
    borderRadius: 0,
    marginBottom: spacing(0.25),
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  actions: {
    '& > *': {
      marginLeft: spacing(3),
    },
  },
  options: {
    backgroundColor: palette.white.main,
    color: palette.gray.main,
  },
}));
