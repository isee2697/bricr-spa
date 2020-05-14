import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ typography, palette, spacing }) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${spacing(0.75)}px 0`,
    borderBottomColor: palette.gray.light,
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
  },
  title: {
    fontSize: typography.h3.fontSize,
  },
  subtitle: {
    fontSize: typography.h5.fontSize,
    color: palette.gray.main,
  },
}));
