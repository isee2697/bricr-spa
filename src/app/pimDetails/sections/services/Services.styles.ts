import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  iconsHolder: {
    float: 'right',
    '& .MuiSvgIcon-root:first-child': {
      marginRight: theme.spacing(2),
    },
  },
  title: {
    float: 'left',
  },
  header: {
    '&.MuiGrid-item': {
      paddingBottom: 0,
    },
  },
  avatar: {
    backgroundColor: 'transparent',
    border: `2px solid ${theme.palette.gray.light}`,
    marginRight: theme.spacing(),
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  counter: {
    backgroundColor: theme.palette.gray.light,
    display: 'inline-flex',
  },
}));
