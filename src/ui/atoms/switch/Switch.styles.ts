import React from 'react';
import SwitchBase, { SwitchProps } from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

export const Switch: React.ComponentType<SwitchProps> = withStyles(theme => ({
  root: {
    width: theme.spacing(7),
    height: theme.spacing(4),
    borderRadius: theme.spacing(4),
    padding: 0,
    margin: theme.spacing(1),
    '& > span': {
      background: theme.palette.gray.light,
    },
  },
  switchBase: {
    background: theme.palette.white.main,
    padding: theme.spacing(0.125),
    '&$checked': {
      transform: `translateX(${theme.spacing(3)}px)`,
      color: theme.palette.common.white,
      '& + $track': {
        background: theme.palette.gradientPrimary.main,
        opacity: 1,
        border: 'none',
      },
    },
  },
  thumb: {
    width: `calc(${theme.spacing(4)}px - ${theme.spacing(0.25)}px)`,
    height: `calc(${theme.spacing(4)}px - ${theme.spacing(0.25)}px)`,
  },
  track: {
    borderRadius: theme.spacing(2),
    border: `${theme.spacing(0.125)}px solid ${theme.palette.gray.light}`,
    backgroundColor: theme.palette.gray.light,
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {
    '&.MuiButtonBase-root': {
      background: 'transparent',
    },
  },
}))(SwitchBase);
