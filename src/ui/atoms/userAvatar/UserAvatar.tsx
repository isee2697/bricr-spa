import React, { useCallback } from 'react';

import { Avatar, Box } from '../../atoms';
import { palette } from 'theme/palette';

import { UserAvatarProps } from './UserAvatar.types';

export const UserAvatar = (props: UserAvatarProps) => {
  const { name, avatar } = props;
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
      <Avatar bgcolor={palette[getColor(initial)]['light']} src={avatar && avatar}>
        <Box color={palette[getColor(initial)]['main']}>{initial}</Box>
      </Avatar>
    </>
  );
};
