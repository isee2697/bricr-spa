import React, { useCallback } from 'react';
import { useTheme } from '@material-ui/core/styles';

import { Avatar, Box } from '../../atoms';

import { UserAvatarProps } from './UserAvatar.types';

export const UserAvatar = ({ name, avatar, ...avatarProps }: UserAvatarProps) => {
  const theme = useTheme();
  const initial = name && name.charAt(0);

  const getColor = useCallback((initial: string) => {
    const basicLetter = initial && initial.replace(/[^\w\s]/gi, '').toUpperCase();

    if ('ABCDE'.includes(basicLetter)) {
      return 'blue';
    } else if ('FGHI'.includes(basicLetter)) {
      return 'red';
    } else if ('JKLM'.includes(basicLetter)) {
      return 'orange';
    } else if ('NOPQ'.includes(basicLetter)) {
      return 'yellow';
    } else if ('RSTU'.includes(basicLetter)) {
      return 'green';
    } else if ('VWXYZ'.includes(basicLetter)) {
      return 'purple';
    } else return 'blue';
  }, []);

  return (
    <>
      <Avatar bgcolor={theme.palette[getColor(initial)]['light']} src={avatar && avatar} {...avatarProps}>
        <Box color={theme.palette[getColor(initial)]['main']}>{initial}</Box>
      </Avatar>
    </>
  );
};
