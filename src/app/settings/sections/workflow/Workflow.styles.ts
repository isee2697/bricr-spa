import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  controlButton: {
    backgroundColor: theme.palette.white.main,
  },
  controlContainer: {
    position: 'absolute',
    bottom: theme.spacing(3),
    right: ({ fullScreen }: { fullScreen: boolean }) => theme.spacing(Number(!fullScreen) * 8 + 2),
  },
  container: {
    maxHeight: ({ fullScreen }: { fullScreen: boolean }) =>
      fullScreen ? '100vh' : `calc(100vh - ${theme.spacing(11)}px)`,
    overflow: 'hidden',
  },
}));
