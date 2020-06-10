import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  counter: {
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    width: theme.spacing(3),
    height: theme.spacing(3),
    border: `${theme.spacing(0.25)}px solid ${theme.palette.gray.light}`,
    marginRight: theme.spacing(1),
    color: theme.palette.gray.main,
    fontSize: theme.typography.h5.fontSize,
  },
}));
