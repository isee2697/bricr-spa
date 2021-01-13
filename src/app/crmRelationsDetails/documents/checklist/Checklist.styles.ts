import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  badge: {
    color: theme.palette.gray.main,
    background: theme.palette.gray.light,

    '&.ActionRequired': {
      color: theme.palette.white.main,
      background: theme.palette.error.main,
    },
  },
  itemButton: {
    cursor: 'pointer',
  },
  row: {
    display: 'flex',
    alignItems: 'stretch',
    position: 'relative',
    marginBottom: theme.spacing(3),

    '&.actionRequired': {
      background: theme.palette.yellow.light,
    },

    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      width: `calc(100% - ${theme.spacing(4)}px)`,
      margin: theme.spacing(0, 2),
      borderBottom: `${theme.spacing(0.25)}px solid ${theme.palette.gray.light}`,
    },

    '&:last-child': {
      marginBottom: 0,
    },
  },
  rowChecked: {
    background: `${theme.palette.primary.main}08`,
  },
  rowItem: {
    padding: `22px 16px 22px 0`,
    width: '100%',
  },
  rowItemIndex: {
    margin: theme.spacing(2.5),
    width: theme.spacing(3),
    height: theme.spacing(3),
    textAlign: 'center',
    border: `1px solid ${theme.palette.gray.light}`,
    borderRadius: theme.spacing(1.5),
    color: theme.palette.gray.main,
  },
}));
