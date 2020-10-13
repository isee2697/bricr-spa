import RadioBase from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';

import React from 'react';

import { RadioProps } from './Radio.types';

export const Radio: React.ComponentType<RadioProps> = withStyles(theme => ({
  root: {
    color: theme.palette.gray.main,
    background: 'transparent',
  },
  colorPrimary: {
    '& .MuiSvgIcon-root': {
      fill: theme.palette.gray.main,
    },
    '&.Mui-checked .MuiSvgIcon-root': {
      fill: theme.palette.primary.main,
    },
  },
}))(RadioBase);
