import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  dialog: {
    marginTop: 0,
  },
  dialogContent: {
    padding: 0,

    '&:first-child': {
      padding: 0,
    },
  },
}));
