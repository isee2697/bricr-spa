import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  header: {
    alignItems: 'center',
    marginBottom: theme.spacing(3),
  },
  title: {
    flex: '1 1 auto',
  },
  marginRightTwo: {
    marginRight: theme.spacing(2),
  },
  rowFilter: {
    width: theme.spacing(2),
    marginRight: theme.spacing(3.5),
  },
  tableActionCell: {
    cursor: 'pointer',
  },
}));
