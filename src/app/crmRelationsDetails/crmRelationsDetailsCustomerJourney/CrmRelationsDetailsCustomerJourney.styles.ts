import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  header: {
    alignItems: 'center',
    marginTop: theme.spacing(3),
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
    background: theme.palette.gradientGreen.main,
  },
  badge: {
    '& .MuiBadge-badge': {
      right: -theme.spacing(1.25),
      width: 'fit-content',
      minWidth: theme.spacing(1),
      padding: theme.spacing(0.25, 0.5, 0, 0.5),
      height: theme.spacing(2),
      textAlign: 'center',
      borderRadius: theme.spacing(1),
      background: theme.palette.green.main,
      color: theme.palette.white.main,
    },
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
    padding: `${theme.spacing(2.75)}px ${theme.spacing(2)}px ${theme.spacing(2.75)}px 0`,
    width: '100%',
  },
  itemButton: {
    cursor: 'pointer',
  },
}));
