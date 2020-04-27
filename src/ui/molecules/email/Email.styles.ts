import { makeStyles } from '@material-ui/core';

import { fontWeight } from '../../../theme/typography';
import { palette } from '../../../theme/palette';

import { EmailProps } from './Email.types';

export const useStyles = makeStyles(theme => ({
  wrapper: {
    borderBottom: `1px solid ${palette.gray.light}`,
    cursor: 'pointer',
    '& *': {
      userSelect: 'none',
    },
  },
  name: {
    fontSize: theme.spacing(1.5),
    lineHeight: `${theme.spacing(2)}px`,
    fontWeight: fontWeight['semibold'],
    color: (props: EmailProps) => (props.open ? palette.gray.main : palette.black.main),
  },
  title: {
    fontSize: theme.spacing(1.5),
    lineHeight: `${theme.spacing(2)}px`,
    color: (props: EmailProps) => (props.open ? palette.gray.main : palette.black.main),
  },
  description: {
    fontSize: theme.spacing(1.25),
    lineHeight: `${theme.spacing(2)}px`,
    color: palette.gray.main,
    display: '-webkit-box',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
  date: {
    fontSize: theme.spacing(1.25),
    lineHeight: `${theme.spacing(2)}px`,
    fontWeight: fontWeight['semibold'],
    color: (props: EmailProps) => (props.open ? palette.gray.main : palette.black.main),
  },
}));
