import { makeStyles } from '@material-ui/core/styles';

import { ImageHolderProps } from './ImageHolder.types';

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: ({ src }: ImageHolderProps) => `url(${src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    borderRadius: theme.spacing(1),
  },
  withBorder: {
    border: `1px ${theme.palette.gray.main} solid`,
  },
}));
