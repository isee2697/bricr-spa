import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    '& .form-section-title div': {
      backgroundColor: theme.palette.blue.dark,
      color: theme.palette.white.main,
    },
  },
  content: {
    ' & .list-header': {
      marginBottom: theme.spacing(1),
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
    background: theme.palette.info.main,
  },
  rowItem: {
    padding: theme.spacing(2.75, 4, 1.75, 0),
    width: '100%',
  },
}));
