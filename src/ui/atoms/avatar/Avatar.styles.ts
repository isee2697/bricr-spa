import React from 'react';
import MaterialAvatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

import { AvatarProps } from './Avatar.types';

export const Avatar: React.ComponentType<AvatarProps> = withStyles({
  root: {
    background: (props: AvatarProps) => props.bgcolor,
    outline: 'none',
  },
})(MaterialAvatar);
