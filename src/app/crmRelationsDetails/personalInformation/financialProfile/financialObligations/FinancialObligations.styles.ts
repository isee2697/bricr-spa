import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(4),
  },
  editSwitcher: {
    marginRight: theme.spacing(3),
  },
  obligationIndex: {
    color: theme.palette.gray.main,
    fontWeight: theme.typography.fontWeightMedium,
    borderRadius: theme.spacing(3),
    border: `2px solid ${theme.palette.gray.light}`,
    width: theme.spacing(3),
    height: theme.spacing(3),
    lineHeight: `${theme.spacing(3)}px`,
    textAlign: 'center',
  },
  obligationTitle: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  obligationInfo: {
    marginTop: theme.spacing(5),
  },
  formField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
  gray: {
    color: theme.palette.gray.main,
  },
  marginBottomTwo: {
    marginBottom: theme.spacing(2),
  },
  marginBottomFour: {
    marginBottom: theme.spacing(4),
  },
}));
