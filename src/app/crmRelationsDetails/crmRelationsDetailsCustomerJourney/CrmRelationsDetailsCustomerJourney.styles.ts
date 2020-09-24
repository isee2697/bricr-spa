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
    padding: `22px 16px 22px 0`,
    width: '100%',
  },
}));
