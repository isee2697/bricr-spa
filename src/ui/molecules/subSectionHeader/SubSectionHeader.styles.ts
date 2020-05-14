import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    borderBottomWidth: 2,
    borderBottomColor: theme.palette.gray.light,
    borderBottomStyle: 'solid',
    margin: theme.spacing(2),
    marginBottom: 0,
    width: `calc(100% - ${theme.spacing(4)}px)`,
    fontSize: theme.typography.h3.fontSize,
    lineHeight: theme.typography.h3.lineHeight,
  },
  menu: {
    marginLeft: 'auto',
  },
  menuIcon: {
    marginRight: theme.spacing(2),
  },
}));
