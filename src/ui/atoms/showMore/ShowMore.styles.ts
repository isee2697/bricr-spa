import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette, typography }) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginTop: spacing(0.25),
    cursor: 'pointer',
  },
  text: {
    color: palette.gray.main,
    fontWeight: typography.fontWeightBolder,
  },
  appointment: {
    height: spacing(3.75),
    width: '100%',
    position: 'relative',
  },
  actions: {
    padding: spacing(1.75, 2, 2, 2),
    borderTop: `${spacing(0.25)}px solid ${palette.gray.light}`,
    '& .MuiButton-root': {
      margin: 0,
      marginLeft: 'auto',
    },
  },
}));
