import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
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

    '&:nth-child(2n + 1)': {
      background: theme.palette.gray.light,
    },

    '&.dragging': {
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: theme.spacing(1),
    },
  },
  cell: {
    '&.dragging': {
      borderTop: `1px solid ${theme.palette.primary.main}`,
      borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
  },
  avatar: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    fontSize: theme.typography.h5.fontSize,
  },
  marginRightOne: {
    marginRight: theme.spacing(1),
  },
  inlineBlock: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
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
}));
