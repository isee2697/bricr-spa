import { makeStyles } from '@material-ui/core/styles';

import { ImageContainerProps } from './ColoredImage.types';

export const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: theme.spacing(0.5),
    minHeight: theme.spacing(20),
    borderLeftWidth: theme.spacing(0.75),
    borderLeftStyle: 'solid',
    overflow: 'hidden',
    margin: theme.spacing(2, 0),
    '&.green': {
      borderLeftColor: theme.palette.green.main,
    },
    '&.orange': {
      borderLeftColor: theme.palette.orange.main,
    },
    '&.red': {
      borderLeftColor: theme.palette.red.main,
    },
  },
  children: {
    zIndex: 2,
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  image: {
    zIndex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundImage: ({ src }: ImageContainerProps) => `url(${src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  grayscale: {
    filter: 'grayscale(100%)',
  },
}));
