import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  textField: {
    minHeight: theme.spacing(19),
    alignItems: 'flex-start',
    background: theme.palette.gray.light,
    borderTopLeftRadius: theme.spacing(1),
    borderTopRightRadius: theme.spacing(1),
  },
  textFieldInput: {
    margin: theme.spacing(1.5, 2),
  },
}));
