import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiDialogContent-root': {
      paddingTop: theme.spacing(1),
    },
  },
  priorityIcon: {
    marginRight: theme.spacing(1),
  },
  actions: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1.75, 2, 2, 2),
    borderTop: `${theme.spacing(0.25)}px solid ${theme.palette.gray.light}`,
  },
}));
