import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  date: {
    borderRight: `2px solid ${theme.palette.gray.light}`,
    minWidth: 60,
    margin: theme.spacing(1),
    marginLeft: 0,
  },
  startDate: {
    width: '100%',
    fontWeight: theme.typography.fontWeightBold,
    '&:only-child': {
      marginTop: theme.spacing(),
    },
  },
  endDate: {
    width: '100%',
    color: theme.palette.gray.main,
    fontWeight: theme.typography.fontWeightBold,
  },
  title: {
    fontSize: theme.typography.h5.fontSize,
    lineHeight: `${theme.spacing(2)}px`,
  },
}));
