import { makeStyles } from '@material-ui/core';

import { EmailProps } from './Email.types';

export const useStyles = makeStyles(theme => ({
  wrapper: {
    borderBottom: `1px solid ${theme.palette.gray.light}`,
    cursor: 'pointer',
    '& *': {
      userSelect: 'none',
    },
  },
  name: {
    fontSize: theme.spacing(1.5),
    lineHeight: `${theme.spacing(2)}px`,
    fontWeight: theme.typography.fontWeightBold,
    color: (props: Pick<EmailProps, 'open'>) => (props.open ? theme.palette.gray.main : theme.palette.black.main),
  },
  title: {
    fontSize: theme.spacing(1.5),
    lineHeight: `${theme.spacing(2)}px`,
    color: (props: Pick<EmailProps, 'open'>) => (props.open ? theme.palette.gray.main : theme.palette.black.main),
  },
  description: {
    fontSize: theme.spacing(1.25),
    lineHeight: `${theme.spacing(2)}px`,
    color: theme.palette.gray.main,
    display: '-webkit-box',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
  date: {
    fontSize: theme.spacing(1.25),
    lineHeight: `${theme.spacing(2)}px`,
    fontWeight: theme.typography.fontWeightBold,
    color: (props: Pick<EmailProps, 'open'>) => (props.open ? theme.palette.gray.main : theme.palette.black.main),
  },
}));
