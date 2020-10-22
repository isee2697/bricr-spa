import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(1),
  },
  propertyRadioGroup: {
    marginTop: theme.spacing(1.5),
    width: theme.spacing(27),
  },
  propertyRadioGroupItem: {
    '&.MuiGrid-item': {
      paddingTop: 0,
      paddingBottom: 0,
      marginBottom: theme.spacing(1),
    },
    '&.MuiGrid-item:last-child': {
      marginBottom: 0,
    },
  },
  propertyChoiceGroup: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  formField: {
    marginTop: theme.spacing(1),
  },
  marginTopFour: {
    marginTop: theme.spacing(4),
  },
  marginTopTwo: {
    marginTop: theme.spacing(2),
  },
  gray: {
    color: theme.palette.gray.main,
  },
}));
