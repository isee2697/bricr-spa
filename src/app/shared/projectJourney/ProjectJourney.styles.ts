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
}));
