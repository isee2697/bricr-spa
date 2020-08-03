import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(2),
    width: '100%',
    '& .MuiCardHeader-root': {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: theme.spacing(0),
      marginBottom: theme.spacing(2),
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
    padding: theme.spacing(2.75, 2, 2.75, 0),
    width: '100%',
  },
}));
