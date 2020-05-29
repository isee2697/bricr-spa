import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ typography, palette, spacing }) => ({
  root: {
    padding: spacing(2),
  },
  content: {
    padding: `${spacing(2)}px 0`,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    '&.edit-mode': {
      color: palette.primary.main,
    },
    '& .icon-reversed': {
      transform: 'rotate(180deg)',
    },
  },
  actions: {
    '& > *': {
      marginLeft: spacing(3),
    },
  },
  editLabel: {
    '& .MuiFormControlLabel-label': {
      fontSize: typography.h5.fontSize,
      fontWeight: typography.fontWeightMedium,
    },
  },
  options: {
    backgroundColor: palette.gray.light,
  },
}));
