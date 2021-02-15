import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
  },
  content: {
    padding: theme.spacing(3),
  },
  addButton: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  completedSubtask: {
    textDecoration: 'line-through',
  },
  fontWeightBold: {
    fontWeight: theme.typography.fontWeightBold,
  },
  tab: {
    '& .MuiTab-wrapper': {
      color: theme.palette.gray.main,
    },
  },
  isDeleting: {
    filter: `grayscale(100%)`,
    opacity: '0.2',
  },
}));
