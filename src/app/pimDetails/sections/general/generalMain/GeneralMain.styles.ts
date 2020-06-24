import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => ({
  avatarIcon: {
    marginRight: spacing(1),
  },
  textFields: {
    '& .MuiTextField-root': {
      marginTop: 0,
    },
  },
  tilesContainer: {
    marginTop: spacing(2),
  },
  subHeader: {
    marginTop: spacing(5),
    '&:first-child': {
      marginTop: spacing(1),
    },
  },
}));
