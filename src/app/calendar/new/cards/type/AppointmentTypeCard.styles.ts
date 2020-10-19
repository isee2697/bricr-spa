import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  button: {
    width: '100%',
    marginTop: spacing(1),
    marginBottom: spacing(2),
  },
  icon: {
    '& path': {
      fill: palette.green.main,
    },
  },
  ident: {
    marginLeft: spacing(3),
    width: `calc(100% - ${spacing(3)}px)`,
    '& .MuiFormControlLabel-root': {
      marginTop: spacing(1),
    },
    '& .MuiFormControlLabel-root, & .MuiFormControlLabel-label': {
      width: `calc(100% - ${spacing(2)}px)`,
      marginLeft: spacing(2),
    },
  },
}));
