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
      padding: theme.spacing(1.5, 2),
    },
  },
  marginRightTwo: {
    marginRight: theme.spacing(2),
  },
}));
