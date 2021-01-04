import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, spacing, typography }) => ({
  select: {
    borderRadius: spacing(1),
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  },
  term: {
    marginBottom: spacing(0.5),
  },
  date: {
    margin: spacing(0, 1),
  },
  item: {
    display: 'flex',
    alignItems: 'center',
  },
  bottom: {
    marginTop: spacing(1),
    '& .MuiButton-root': {
      color: palette.blue.dark,
      marginLeft: -spacing(1.5),
      '& path': {
        fill: palette.blue.dark,
      },
    },
  },
}));
