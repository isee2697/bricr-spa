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
  },
  menuIcon: {
    marginRight: theme.spacing(2),
  },
}));
