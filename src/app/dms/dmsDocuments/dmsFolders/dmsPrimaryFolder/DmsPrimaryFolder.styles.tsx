import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(3),
  },
  itemButton: {
    cursor: 'pointer',
  },
  listContent: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  listItem: {
    marginBottom: theme.spacing(2.5),
  },
  row: {
    display: 'flex',
    alignItems: 'flex-start',
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
    padding: `22px 16px 22px 0`,
    width: '100%',
  },
}));
