import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  infoSection: {
    borderRadius: theme.spacing(1),
    background: theme.palette.gradientBlue.light,
    marginTop: theme.spacing(4),
  },
  formField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
  employerRow: {
    borderRadius: theme.spacing(1),
    background: theme.palette.gradientBlue.light,
  },
  image: {
    borderTopLeftRadius: theme.spacing(1),
    borderBottomLeftRadius: theme.spacing(1),
    width: theme.spacing(20),
    height: theme.spacing(17),
    fontSize: '3em',
  },
  employerRowDetail: {
    padding: theme.spacing(2),
  },
  employerRowDetailHeader: {
    paddingBottom: theme.spacing(1),
    borderBottom: `2px solid ${theme.palette.white.main}`,
  },
  gray: {
    color: theme.palette.gray.main,
  },
  paddingBottomTwo: {
    paddingBottom: theme.spacing(2),
  },
  marginTopTwo: {
    marginTop: theme.spacing(2),
  },
  marginTopFour: {
    marginTop: theme.spacing(4),
  },
  marginBottomTwo: {
    marginBottom: theme.spacing(2),
  },
}));
