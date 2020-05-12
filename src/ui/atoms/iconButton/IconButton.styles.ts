import React from 'react';
import IconButtonBase from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

import { IconButtonProps } from './IconButton.types';

export const IconButton: React.ComponentType<IconButtonProps> = withStyles(theme => ({
  root: {
    borderRadius: (props: IconButtonProps) =>
      ['rounded', 'roundedContained'].includes(props.variant || '') ? theme.spacing(1) : undefined,
    backgroundColor: (props: IconButtonProps) =>
      ['circleContained', 'roundedContained'].includes(props.variant || '') ? theme.palette.gray.light : undefined,
    '&:disabled': {
      backgroundColor: (props: IconButtonProps) =>
        ['circleContained', 'roundedContained'].includes(props.variant || '') ? theme.palette.gray.light : undefined,
      opacity: 0.8,
    },
  },
}))(IconButtonBase);
