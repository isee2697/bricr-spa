import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  header: {
    alignItems: 'center',
    marginBottom: theme.spacing(3),
  },
  title: {
    flex: '1 1 auto',
  },
  textFieldAbout: {
    '& .MuiInputBase-input': {
      padding: `${theme.spacing(1.5)}px ${theme.spacing(2)}px`,
    },
  },
  marginRightTwo: {
    marginRight: theme.spacing(2),
  },
}));
