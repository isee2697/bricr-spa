import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => ({
  root: {
    '& .MuiDialogTitle-root': {
      paddingBottom: 0,
    },
    '& .MuiDialogContent-root': {
      paddingTop: spacing(2),
    },
  },
}));
