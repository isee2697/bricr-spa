import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: theme.shadows[1],
    background: theme.palette.white.main,
    overflowX: 'auto',
    minWidth: theme.spacing(13.5),
  },
  content: {
    height: theme.spacing(75),
    background: theme.palette.white.main,
    padding: theme.spacing(3, 2),
    overflow: 'scroll',
    paddingBottom: theme.spacing(15),
  },
  groupsContainer: {
    marginTop: theme.spacing(3),
  },
  collapseHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: theme.spacing(1.875),
    cursor: 'pointer',
    borderBottom: `${theme.spacing(0.25)}px solid ${theme.palette.gray.light}`,
    paddingBottom: theme.spacing(1),
  },
  collapseTitle: {
    ...theme.typography.h4,
    fontWeight: theme.typography.fontWeightMedium,
  },
  collapseContent: {
    paddingTop: theme.spacing(1),
    '& .MuiCollapse-wrapperInner': {
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
  item: {
    width: theme.spacing(11),
    display: 'flex',
    flexDirection: 'column',
  },
  itemIcon: {
    background: theme.palette.purple.light,
    width: theme.spacing(6),
    height: theme.spacing(6),
    borderRadius: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(1),

    '& svg': {
      fontSize: theme.spacing(4),
      color: theme.palette.purple.main,
    },
  },
}));
