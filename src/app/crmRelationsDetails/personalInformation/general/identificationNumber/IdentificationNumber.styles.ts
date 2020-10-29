import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(4),
  },
  editSwitcher: {
    marginRight: theme.spacing(3),
  },
  marginTopTwo: {
    marginTop: theme.spacing(2),
  },
  marginTopFour: {
    marginTop: theme.spacing(4),
  },
  gray: {
    color: theme.palette.gray.main,
  },
  identificationNumberIndex: {
    color: theme.palette.gray.main,
    fontWeight: theme.typography.fontWeightMedium,
    borderRadius: theme.spacing(3),
    border: `2px solid ${theme.palette.gray.light}`,
    width: theme.spacing(3),
    height: theme.spacing(3),
    lineHeight: `${theme.spacing(3)}px`,
    textAlign: 'center',
  },
  identificationNumberTitle: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  identificationNumberFormFields: {
    marginBottom: theme.spacing(4),

    '&:last-of-type': {
      marginBottom: 0,
    },
  },
  formField: {
    marginTop: theme.spacing(1),
  },
}));
