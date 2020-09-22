import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  dropdownLabel: {
    color: theme.palette.gray.main,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(1),
  },
  status: {
    display: 'flex',
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
  name: {
    verticalAlign: 'top',
    lineHeight: `${theme.spacing(4)}px`,
  },
  label: {
    display: 'flex',
  },
  inlineBlock: {
    display: 'inline-block',
  },
  marginTopThree: {
    marginTop: theme.spacing(3),
  },
}));
