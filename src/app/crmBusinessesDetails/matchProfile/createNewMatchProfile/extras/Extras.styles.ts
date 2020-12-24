import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  editSwitcher: {
    marginRight: theme.spacing(3),
  },
  extraRadioGroup: {
    marginTop: theme.spacing(1.5),
    width: theme.spacing(27),
  },
  extraRadioGroupItem: {
    '&.MuiGrid-item': {
      paddingTop: 0,
      paddingBottom: 0,
      marginBottom: theme.spacing(1),
    },
    '&.MuiGrid-item:last-child': {
      marginBottom: 0,
    },
  },
}));
