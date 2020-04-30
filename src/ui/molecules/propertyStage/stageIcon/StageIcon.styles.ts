import { withStyles } from '@material-ui/core/styles';

import { Avatar } from 'ui/atoms';

export const ActiveIcon = withStyles(theme => ({
  root: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    background: theme.palette.white.main,
    border: `1px solid ${theme.palette.success.main}`,
    '& > h5': {
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.text.primary,
    },
  },
}))(Avatar);

export const CompletedIcon = withStyles(theme => ({
  root: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    background: theme.palette.success.main,
    '& path': {
      fill: theme.palette.gray.light,
    },
  },
}))(Avatar);

export const InactiveIcon = withStyles(theme => ({
  root: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    background: theme.palette.background.default,
    '& > h5': {
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.text.secondary,
    },
  },
}))(Avatar);
