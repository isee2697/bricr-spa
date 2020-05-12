import React from 'react';
import CheckboxBase from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

import { CheckboxProps } from './Checkbox.types';

export const Checkbox: React.ComponentType<CheckboxProps> = withStyles(theme => ({
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
}))(CheckboxBase);
