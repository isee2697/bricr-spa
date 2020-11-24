import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '100%',
    '& .ScrollbarsCustom-Wrapper': {
      position: 'absoulte',
      top: 0,
      left: 0,
      bottom: 10,
      right: 0,
      overflow: 'hidden',
    },
    '&.noBottomScroller .ScrollbarsCustom-Wrapper': {
      bottom: 0,
    },
    '& .ScrollbarsCustom-Scroller': {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      overflow: 'scroll hidden',
      paddingBottom: '20px',
      marginBottom: '-21px',
    },
    '& .ScrollbarsCustom-Content': {
      boxSizing: 'border-box',
      minHeight: '100%',
      minWidth: '100%',
    },
    '& .ScrollbarsCustom-Track': {
      position: 'absolute',
      overflow: 'hidden',
      borderRadius: 3,
      background: 'rgba(0, 0, 0, 0.05)',
      userSelect: 'none',
    },
    '& .ScrollbarsCustom-TrackY': {
      width: 6,
      height: '100%',
      right: 0,
    },
    '& .ScrollbarsCustom-TrackX': {
      height: 6,
      width: '100%',
      left: 0,
      bottom: 8,
    },
    '& .ScrollbarsCustom-Thumb': {
      touchAction: 'none',
      cursor: 'pointer',
      borderRadius: 3,
      background: 'rgba(0, 0, 0, 0.05)',
    },
    '& .ScrollbarsCustom-ThumbY': {
      width: '100%',
    },
    '& .ScrollbarsCustom-ThumbX': {
      height: '100%',
    },
  },
}));
