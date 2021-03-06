import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {},
  columnHeader: {
    color: theme.palette.gray.main,
    fontSize: theme.typography.h5.fontSize,
    cursor: 'pointer',

    '&.sorted': {
      color: theme.palette.primary.main,
    },
  },
  columnHeaderIcon: {
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
  row: {
    cursor: 'pointer',

    '&:hover': {
      background: theme.palette.gray.light,
    },
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    fontSize: theme.typography.h5.fontSize,
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
  columnSortIconPlaceholder: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    display: 'inline-block',
  },
}));
