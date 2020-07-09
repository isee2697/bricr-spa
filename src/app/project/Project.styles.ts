import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(3),
    ' & .list-header': {
      marginBottom: theme.spacing(1),
    },
  },
  row: {
    display: 'flex',
    alignItems: 'flex-start',
    borderBottom: `2px solid ${theme.palette.gray.light}`,
  },
  rowChecked: {
    background: `${theme.palette.primary.main}08`,
  },
  rowItem: {
    padding: `22px 16px 22px 0`,
    width: '100%',
  },
}));
