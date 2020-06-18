import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  content: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(3),
  },
  list: {
    padding: 0,
    '& .list-header': {
      marginBottom: theme.spacing(2),
    },
    '& .MuiCheckbox-root': {
      padding: theme.spacing(1),
      paddingLeft: 0,
    },
  },
  rowChecked: {
    background: `${theme.palette.primary.main}08`,
  },
  description: {
    marginTop: -theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));
