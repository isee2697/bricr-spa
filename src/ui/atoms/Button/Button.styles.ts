import React from 'react';
import { Button as MaterialButton, ButtonProps, withStyles } from '@material-ui/core';

export const Button: React.ComponentType<ButtonProps> = withStyles({
  root: {
    overflow: 'hidden',
  },
  label: {
    textTransform: 'uppercase',
  },
})(MaterialButton);
