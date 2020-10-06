import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
  },
  count: {
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    marginLeft: theme.spacing(0.5),
    border: 'none',
    background: theme.palette.gray.light,
  },
  countLabel: {
    fontSize: theme.typography.h4.fontSize,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  index: {
    color: theme.palette.gray.main,
    border: `2px solid ${theme.palette.gray.light}`,
    borderRadius: theme.spacing(1.5),
    width: theme.spacing(3),
    height: theme.spacing(3),
    textAlign: 'center',
    marginRight: theme.spacing(1),
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  gray: {
    color: theme.palette.gray.main,
  },
}));
