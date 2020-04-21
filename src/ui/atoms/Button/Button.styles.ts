import React from 'react';
import { Button as MaterialButton, ButtonProps, withStyles } from '@material-ui/core';

export const Button: React.ComponentType<ButtonProps> = withStyles({
  label: {
    textTransform: 'uppercase',
  },
})(MaterialButton);
