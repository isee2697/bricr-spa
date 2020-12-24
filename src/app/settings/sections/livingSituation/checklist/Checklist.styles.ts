import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  columnHeader: {
    color: theme.palette.gray.main,
    fontSize: theme.typography.h5.fontSize,
    cursor: 'pointer',

    '&.sorted': {
      color: theme.palette.primary.main,
    },
  },
  row: {
    cursor: 'pointer',

    '&:hover': {
      background: theme.palette.gray.light,
    },
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

    '&.red': {
      color: theme.palette.error.main,
    },
  },
  orange: {
    color: theme.palette.orange.main,
  },
  marginRightOne: {
    marginRight: theme.spacing(1),
  },
  inlineBlock: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
}));
