import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: theme.palette.blue.light,
    boxShadow: 'none',
  },
  header: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1.25),
    borderBottom: `2px solid ${theme.palette.blue.main}`,
  },
  title: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  subTitle: {
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: theme.spacing(),
  },
  content: {
    color: theme.palette.gray.main,
    '&:last-child': {
      paddingBottom: theme.spacing(2),
    },
  },
  link: {
    color: theme.palette.gray.main,
    paddingBottom: theme.spacing(0.25),
    cursor: 'pointer',
  },
}));
