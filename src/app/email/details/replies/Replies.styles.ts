import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  row: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(2, 1.5),
    height: theme.spacing(10),
    borderRadius: theme.spacing(0.5),
    background: theme.palette.white.main,

    '&:last-child': {
      marginBottom: 0,
    },
  },

  rowContent: {
    height: '100%',
    background: theme.palette.gray.light,
    borderRadius: theme.spacing(0.5),
    paddingLeft: theme.spacing(2.25),
    paddingRight: theme.spacing(2.25),
  },
}));
