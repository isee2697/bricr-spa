import React from 'react';
import MaterialButton, { ButtonProps } from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

export const Button: React.ComponentType<ButtonProps> = withStyles({
  label: {
    textTransform: 'uppercase',
  },
})(MaterialButton);
