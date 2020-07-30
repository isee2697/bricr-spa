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
    borderBottom: `${theme.spacing(0.25)}px solid ${theme.palette.gray.light}`,
  },
  rowChecked: {
    background: theme.palette.info.main,
  },
  rowItem: {
    padding: theme.spacing(2.75, 2, 1.75, 0),
    width: '100%',
  },
}));
