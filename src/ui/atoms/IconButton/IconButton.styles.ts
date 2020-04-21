import React from 'react';
import { IconButton as MaterialIconButton, IconButtonProps, withStyles } from '@material-ui/core';

export const IconButton: React.ComponentType<IconButtonProps> = withStyles({
  root: {
    overflow: 'hidden',
  },
})(MaterialIconButton);
