import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  wrapper: {
    cursor: 'pointer',
    borderBottom: `1px solid ${theme.palette.gray.light}`,
  },
  children: {
    margin: 0,
    fontSize: theme.spacing(1.75),
    lineHeight: `${theme.spacing(3)}px`,
  },
  package: {
    fontSize: theme.spacing(1.25),
    lineHeight: `${theme.spacing(2)}px`,
    marginBottom: `${theme.spacing(1)}px`,
  },
  price: {
    fontSize: theme.spacing(2),
    lineHeight: `${theme.spacing(3)}px`,
    fontWeight: theme.typography.fontWeightBold,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: theme.spacing(3),
  },
}));
