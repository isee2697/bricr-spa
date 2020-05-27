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
}));
