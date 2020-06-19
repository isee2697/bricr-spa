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
    '& > *:not(:first-child)': {
      marginLeft: spacing(3),
    },
  },
  editLabel: {
    '& .MuiFormControlLabel-label': {
      fontSize: typography.h5.fontSize,
      fontWeight: 'normal',
    },
  },
  options: {
    backgroundColor: palette.gray.light,
  },
  title: {
    alignItems: 'center',
    display: 'flex',
  },
  titleBadge: {
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    width: spacing(3),
    height: spacing(3),
    background: palette.gray.light,
    marginLeft: spacing(0.5),
    color: palette.gray.main,
    fontSize: typography.h4.fontSize,
  },
}));
