import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  infoButton: {
    color: theme.palette.gray.main,
    '& .MuiButtonBase-root': {
      marginRight: theme.spacing(-2),
    },
    '& .MuiButton-label': {
      fontWeight: theme.typography.fontWeightLight,
      fontSize: theme.typography.h5.fontSize,
    },
  },
  checkbox: {
    paddingBottom: theme.spacing(1.5),
  },
  gridContainer: {
    '& .MuiFormControl-root': {
      marginTop: 0,
    },
  },
  collapse: {
    width: '100%',
  },
}));
