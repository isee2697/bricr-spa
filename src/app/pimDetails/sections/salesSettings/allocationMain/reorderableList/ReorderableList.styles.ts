import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  listItemContainer: {},
  itemContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'move',
  },
  item: {
    lineHeight: `${theme.spacing(7.25)}px`,
    border: `1px solid ${theme.palette.gray.light}`,
    padding: `0 ${theme.spacing(2)}px`,
    marginBottom: theme.spacing(2) + 'px',
    borderRadius: theme.spacing() + 'px',
    flex: 1,
    userSelect: 'none',

    '& .MuiFormControlLabel-root': {
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      margin: 0,
    },
  },
  itemCounter: {
    marginBottom: theme.spacing(2) + 'px',
    marginRight: theme.spacing(2),
    '& .MuiChip-label': {
      padding: 0,
    },
  },

  square: {
    backgroundColor: 'white',
    border: '1px solid',
  },
}));
