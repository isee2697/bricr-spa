import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  resultTitles: {
    fontSize: `${spacing(1.4)}px`,
  },
  modal: {
    '& .MuiDialogTitle-root': {
      borderBottom: `1px solid ${palette.gray.light}`,
    },
    '& .MuiDialogActions-root': {
      borderTop: `1px solid ${palette.gray.light}`,
      paddingTop: spacing(2.5),
    },

    '& .MuiFormControlLabel-label': {
      '& .MuiTypography-h5': {
        fontSize: `${spacing(1.5)}px`,
        fontWeight: 500,
        lineHeight: `${spacing(2)}px`,
      },
      '& .MuiTypography-h6': {
        fontSize: `${spacing(1.25)}px`,
        fontWeight: 700,
        lineHeight: `${spacing(2)}px`,
        color: palette.gray.main,
      },
    },
  },
  stepperWrapper: {
    '& .ScrollbarsCustom-Wrapper': {
      position: 'static !important',
    },
    '& .ScrollbarsCustom-Scroller': {
      position: 'static !important',
    },
    '& .ScrollbarsCustom-Track.ScrollbarsCustom-TrackX': {
      display: 'none',
    },
  },
}));
