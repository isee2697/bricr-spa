import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  image: {
    width: theme.spacing(39.25),
    height: theme.spacing(25.5),
    marginRight: theme.spacing(2),
    fontSize: '3em',
  },
  date: {
    color: theme.palette.gray.main,
    fontSize: theme.typography.h6.fontSize,
    lineHeight: theme.typography.h6.lineHeight,
  },
  title: {
    fontSize: theme.typography.h3.fontSize,
    lineHeight: theme.typography.h3.lineHeight,
    fontWeight: theme.typography.fontWeightBold,
  },
  subtitle: {
    fontSize: theme.typography.h5.fontSize,
    lineHeight: theme.typography.h5.lineHeight,
    fontWeight: theme.typography.fontWeightBold,
  },
  menuItem: {
    padding: 0,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderBottom: `2px solid ${theme.palette.gray.light}`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    color: theme.palette.gray.main,
  },
  readyForReview: {
    borderRadius: 999,
    color: theme.palette.gray.main,
    fontSize: theme.typography.h6.fontSize,
    lineHeight: theme.typography.h6.lineHeight,
  },
}));
