import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, spacing }) => ({
  button: {
    padding: spacing(1),
    '& svg': {
      color: ({ color }: { color: string }) => color ?? palette.gray.main,
      width: ({ size }: { size: number }) => size ?? spacing(4),
      height: ({ size }: { size: number }) => size ?? spacing(4),
    },
  },
  isSelected: {
    color: 'red',
    '& .MuiButtonBase-root': {
      border: `${spacing(0.125)}px solid ${palette.primary.main}`,
      padding: spacing(0.875),
      background: palette.blue.light,
      '& svg': {
        color: palette.primary.main,
      },
    },
  },
}));
