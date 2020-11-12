import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  attachementRow: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(0.5),
    borderBottom: `2px solid ${theme.palette.gray.light}`,
  },
  index: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    borderRadius: theme.spacing(1.5),
    border: `1px solid ${theme.palette.gray.light}`,
    textAlign: 'center',
    marginRight: theme.spacing(1),
  },
}));
