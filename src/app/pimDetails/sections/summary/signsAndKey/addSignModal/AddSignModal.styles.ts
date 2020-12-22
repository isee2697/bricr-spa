import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  searchPerson: {
    background: theme.palette.gray.light,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: 0,
    height: theme.spacing(6),
    borderBottom: `1px solid ${theme.palette.gray.main}`,
  },
  searchPersonField: {
    padding: theme.spacing(1, 1.5),
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderColor: 'transparent',
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    height: theme.spacing(6),
  },
  searchPersonFieldInput: {
    height: theme.spacing(6),

    '&:before': {
      content: 'none',
    },
    '&:after': {
      content: 'none',
    },
  },
  searchPersonFieldPlaceholder: {
    padding: theme.spacing(1, 1.5),
    height: theme.spacing(6),
    color: theme.palette.gray.main,
  },
}));
