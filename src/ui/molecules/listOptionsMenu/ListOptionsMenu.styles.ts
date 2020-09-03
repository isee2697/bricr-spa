import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  menu: {
    '& .MuiMenuItem-root': {
      borderBottom: `solid ${theme.spacing(0.25)}px ${theme.palette.gray.light}`,
      paddingBottom: theme.spacing(1),
      marginBottom: theme.spacing(1),
      display: 'flex',
      alignContent: 'center',
    },
    '& .MuiMenuItem-root .MuiSvgIcon-root': {
      marginRight: theme.spacing(1),
    },
    '& .MuiMenuItem-root.delete, & .MuiMenuItem-root.delete .MuiSvgIcon-root path ': {
      color: theme.palette.red.main,
      fill: theme.palette.red.main,
    },
  },
}));
