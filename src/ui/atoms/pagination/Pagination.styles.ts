import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  ul: {
    listStyle: 'none',
    display: 'flex',
    padding: 0,
    margin: 0,
    color: theme.palette.primary.main,
    fontSize: theme.typography.fontSize,
    lineHeight: theme.typography.h4.lineHeight,
    textAlign: 'center',
    '& *': {
      userSelect: 'none',
    },
    '& button': {
      width: theme.spacing(4),
      border: 0,
      padding: 0,
      cursor: 'pointer',
      fontSize: theme.typography.fontSize,
      '&:focus': {
        outline: 'none',
      },
      '&[disabled]': {
        color: theme.palette.gray.main,
        pointerEvents: 'none',
      },
    },
    '& li:not(:last-child)': {
      marginRight: theme.spacing(1),
    },
  },
  page: {
    border: 0,
    width: theme.spacing(4),
    lineHeight: theme.typography.h4.lineHeight,
    textAlign: 'center',
    color: theme.palette.primary.main,
    padding: 0,
  },
  selected: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.black.main,
  },
  nav: {
    color: theme.palette.primary.main,
    textTransform: 'capitalize',
    fontSize: 'inherit',
  },
  ellipsis: {
    width: theme.spacing(4),
    color: theme.palette.gray.main,
    fontSize: 'inherit',
  },
  perPage: {
    color: theme.palette.primary.main,
    fontSize: 'inherit',
  },
  perPageTitle: {
    userSelect: 'none',
    color: theme.palette.gray.main,
    '& ~ span': {
      userSelect: 'none',
      cursor: 'pointer',
      display: 'inline-block',
      textAlign: 'center',
      width: theme.spacing(4),
      marginRight: theme.spacing(1),
    },
  },
}));
