import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  tabs: {
    '& .MuiTab-root': {
      minWidth: 90,
    },
  },
  scrollable: {
    right: -theme.spacing(1),
  },
  group: {
    paddingRight: theme.spacing(2),
  },
  moreButton: {
    justifyContent: 'left',
  },
  emptyCard: {},
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
}));
