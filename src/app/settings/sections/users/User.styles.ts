import { makeStyles } from '@material-ui/core/styles';

export const useStyles = (image?: string) =>
  makeStyles(theme => ({
    uploadImage: {
      marginTop: theme.spacing(3),
      height: theme.spacing(20),
      '& .MuiGrid-root': {
        height: '100%',
        width: '100%',
      },
    },
    label: {
      fontSize: theme.typography.h5.fontSize,
      fontWeight: theme.typography.fontWeightMedium,
      margin: theme.spacing(1, 0, 1, 0),
    },
  }))();
