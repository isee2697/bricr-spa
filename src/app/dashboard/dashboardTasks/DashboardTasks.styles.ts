import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  tabs: {
    '& .MuiTab-root': {
      minWidth: theme.spacing(11.25),
    },
  },
  scrollable: {
    right: -theme.spacing(1),
  },
  group: {
    paddingRight: theme.spacing(2),
  },
  date: {
    borderRight: `2px solid ${theme.palette.gray.light}`,
    minWidth: theme.spacing(7.5),
    margin: theme.spacing(1),
    marginLeft: 0,
    paddingRight: theme.spacing(2.75),
  },
  startDate: {
    width: '100%',
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: `${theme.spacing(2.25)}px`,
    '&:only-child': {
      marginTop: theme.spacing(),
    },
  },
  endDate: {
    width: '100%',
    color: theme.palette.gray.main,
    fontWeight: theme.typography.fontWeightBold,
  },
  task: {
    cursor: 'pointer',
  },
  taskItem: {
    marginBottom: theme.spacing(1),

    '&:last-child': {
      marginBottom: 0,
    },
  },
  title: {
    fontSize: theme.typography.h5.fontSize,
    lineHeight: `${theme.spacing(2)}px`,
  },
  emptyInfo: {
    paddingTop: theme.spacing(5.5),
    paddingBottom: theme.spacing(5.5),
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    fontSize: theme.typography.h5.fontSize,
  },
  orange: {
    color: theme.palette.orange.main,
  },
  taskTable: {
    '& > tr:last-child > td': {
      paddingBottom: 0,
    },
  },
  tableCell: {
    borderBottom: 'none',
    padding: 0,
  },
  paddingBottom: {
    paddingBottom: theme.spacing(3),
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));
