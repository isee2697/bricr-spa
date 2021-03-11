import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => ({
  popover: {
    pointerEvents: 'none',
  },
  preview: {
    width: spacing(27.5),
    height: spacing(45),
  },
  content: {
    width: spacing(12),
    height: spacing(16),
    position: 'relative',
    '& #image-renderer': {
      position: 'absolute',
    },
    '& [id$="-iframe"]': {
      width: spacing(37.5),
      height: spacing(45),
      marginLeft: -spacing(6.25),
      marginTop: -spacing(5),
    },
    '& div[id$="-page-wrapper"]': {
      position: 'absolute',
      margin: 0,
      left: 0,
      '& canvas': {
        width: `${spacing(12)}px !important`,
        height: `${spacing(16)}px !important`,
      },
    },
  },
}));
