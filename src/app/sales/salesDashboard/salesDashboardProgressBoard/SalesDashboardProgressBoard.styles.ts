import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  cardContent: {
    padding: 0,
    paddingTop: theme.spacing(2),
  },
  filterWrapper: {
    background: theme.palette.gray.light,
    padding: theme.spacing(1, 2, 0),
  },
  filter: {
    border: `1px solid ${theme.palette.gray.main}`,
    borderRadius: theme.spacing(1),
    marginRight: theme.spacing(1),
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  filterLabel: {
    color: theme.palette.gray.main,
    marginRight: theme.spacing(0.5),
  },
  filterTitle: {
    marginRight: theme.spacing(1),
  },
}));
