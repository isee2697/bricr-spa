import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  card: {
    width: '100%',
    height: '100%',
  },
  cardHeaderRoot: {
    padding: theme.spacing(1.5),

    '& .MuiCardHeader-action': {
      marginTop: 0,
    },
  },
  cardHeaderTitle: {
    fontSize: theme.typography.h5.fontSize,
    lineHeight: `${theme.spacing(1.5)}px`,
  },
  cardHeaderButtonRoot: {
    cursor: 'grabbing',
  },
  cardHeaderButton: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  btnDrag: {
    cursor: 'grabbing',
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
}));
