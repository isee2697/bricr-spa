import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    borderBottomWidth: 2,
    borderBottomColor: theme.palette.gray.light,
    borderBottomStyle: 'solid',
    marginBottom: theme.spacing(2),
    width: '100%',
    fontSize: theme.typography.h3.fontSize,
    lineHeight: theme.typography.h3.lineHeight,
  },
  menu: {
    marginLeft: 'auto',
    '& .MuiIconButton-root': {
      padding: theme.spacing(0.75),
      marginLeft: theme.spacing(2),
    },
  },
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
