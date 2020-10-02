import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.white.main,
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  loading: {
    display: 'flex',
    padding: `${theme.spacing()}px 0`,
    alignItems: 'flex-start',
    '& .MuiIconButton-root.Mui-disabled': {
      paddingTop: 0,
    },
    '& div:first-of-type': {
      flexGrow: 1,
    },
  },
  checkbox: {
    padding: theme.spacing(2.5),
  },
}));
