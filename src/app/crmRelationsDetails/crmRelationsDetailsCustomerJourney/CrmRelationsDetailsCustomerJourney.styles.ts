import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  header: {
    alignItems: 'center',
    marginBottom: theme.spacing(3),
  },
  title: {
    flex: '1 1 auto',
  },
  tabs: {
    '& .MuiTab-root': {
      minWidth: 90,
    },
  },
  activeTabIndicator: {
    background: 'linear-gradient(315deg, #0ABE67 0%, #00E174 100%)',
  },
  noMargin: {
    paddingRight: 0,
    paddingLeft: 0,
  },
  marginRightTwo: {
    marginRight: theme.spacing(2),
  },
}));
