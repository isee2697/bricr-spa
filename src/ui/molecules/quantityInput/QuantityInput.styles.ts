import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  value: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    '& h3': {
      fontSize: theme.typography.h1.fontSize,
      fontWeight: theme.typography.fontWeightMedium,
      lineHeight: `${theme.spacing(4)}px`,
    },
    '& h6': {
      color: theme.palette.gray.main,
    },
  },
}));
