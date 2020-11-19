import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.white.main,
  },
  tab: {
    boxShadow: theme.shadows[1],
    overflowX: 'auto',
    minWidth: theme.spacing(13.5),
  },
  content: {
    height: `calc(100vh - ${theme.spacing(14)}px)`,
    padding: theme.spacing(3, 2),
    overflowX: 'hidden',
    overflowY: 'auto',
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
}));
