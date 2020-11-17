import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
  },
  editSwitcher: {
    margin: 0,
  },
  arrowIcon: {
    margin: theme.spacing(0, 0.5, 2.5, 0.5),
  },
  equalIcon: {
    margin: theme.spacing(0, 3, 2.5, 3),
  },
  annualIncome: {
    paddingRight: theme.spacing(4.5),
  },
  btnAction: {
    marginTop: theme.spacing(3),
  },
  marginTopFour: {
    marginTop: theme.spacing(4),
  },
  marginTopSix: {
    marginTop: theme.spacing(6),
  },
  gray: {
    color: theme.palette.gray.main,
  },
  bold: {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));
