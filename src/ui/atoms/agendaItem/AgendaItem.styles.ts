import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  date: {
    borderRight: `2px solid ${theme.palette.gray.light}`,
    minWidth: 60,
    minHeight: '2.5em',
    margin: theme.spacing(1),
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
}));
