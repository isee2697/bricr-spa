import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  itemButton: {
    cursor: 'pointer',
  },
  row: {
    display: 'flex',
    alignItems: 'stretch',
    position: 'relative',

    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      width: `calc(100% - ${theme.spacing(4)}px)`,
      margin: theme.spacing(0, 2),
      borderBottom: `${theme.spacing(0.25)}px solid ${theme.palette.gray.light}`,
    },
  },
  rowChecked: {
    background: `${theme.palette.primary.main}08`,
  },
  rowItem: {
    padding: theme.spacing(2.75, 2, 2.75, 0),
    width: '100%',
  },
  rowIndex: {
    color: theme.palette.gray.main,
    border: `2px solid ${theme.palette.gray.light}`,
    borderRadius: theme.spacing(1.5),
    width: theme.spacing(3),
    height: theme.spacing(3),
    textAlign: 'center',
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2.75),
  },
  listContent: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  hideSidebarButton: {
    background: theme.palette.white.main,
    boxShadow: theme.shadows[1],
    marginRight: theme.spacing(1),
  },
}));
