import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: theme.typography.fontWeightMedium,
    width: '100%',
  },
  name: {
    lineHeight: `${theme.spacing(0.5)}px`,
  },
  step: {
    width: theme.spacing(1.75),
    height: theme.spacing(1.75),
    backgroundColor: theme.palette.gray.light,
    display: 'inline-flex',
    borderRadius: theme.spacing(2),
    margin: theme.spacing(5, 1, 1, 1),
    cursor: 'pointer',
  },
  active: {
    backgroundColor: theme.palette.blue.dark,
  },
  steps: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  form: {
    '& .MuiButton-root': {
      float: 'right',
    },
  },
  back: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: -theme.spacing(21),
    color: theme.palette.gray.main,
    zIndex: 1200,
    cursor: 'pointer',
    float: 'right',
  },
}));
