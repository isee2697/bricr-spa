import MaterialAvatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import { Spacing } from '@material-ui/core/styles/createSpacing';

import React from 'react';

import { AvatarProps, AvatarSize } from './Avatar.types';

const getAvatarSize = (size: AvatarSize, spacing: Spacing) => {
  switch (size) {
    case 'medium':
      return spacing(5);
    case 'large':
      return spacing(6);
    case 'small':
    default:
      return spacing(4);
  }
};

export const Avatar: React.ComponentType<AvatarProps> = withStyles(({ spacing }) => ({
  root: {
    background: ({ bgcolor }: AvatarProps) => bgcolor,
    outline: 'none',
    width: ({ size }: AvatarProps) => getAvatarSize(size, spacing),
    height: ({ size }: AvatarProps) => getAvatarSize(size, spacing),
  },
}))(MaterialAvatar);
