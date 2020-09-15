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
  }))();
