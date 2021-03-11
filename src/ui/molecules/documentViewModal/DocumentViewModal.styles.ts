import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  viewer: {
    minHeight: `calc(85vh - ${spacing(10)}px)`,
    '& #proxy-renderer': {
      background: palette.white.main,
    },
    '& #image-img': {
      minHeight: '65vh',
    },
  },
}));
