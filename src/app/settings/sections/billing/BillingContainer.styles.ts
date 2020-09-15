import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => {
  const { palette, spacing } = theme;

  return {
    root: {
      backgroundColor: palette.gray.light,
      borderRadius: 0,
      marginTop: spacing(3),
      marginBottom: spacing(0.25),
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignSelf: 'stretch',
    },
    actions: {
      '& > *': {
        marginLeft: spacing(3),
      },
    },
    options: {
      backgroundColor: palette.white.main,
      color: palette.gray.main,
    },
    infoContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    info: {
      ...theme.typography.h5,
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.primary.main,
    },
  };
});
