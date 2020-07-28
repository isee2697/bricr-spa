import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    cursor: 'pointer',
    width: spacing(4),
    height: spacing(4),
    background: palette.white.main,
    borderRadius: '50%',
    overflow: 'hidden',
    border: `${spacing(0.125)}px solid rgba(130, 141, 184, 0.3)`,
    filter: `drop-shadow(0 ${spacing(0.25)}px ${spacing(0.5)}px rgba(16, 80, 202, 0.1))`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
