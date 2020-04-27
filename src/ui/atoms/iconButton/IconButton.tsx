import React from 'react';

import { IconButtonProps } from './IconButton.types';
import * as S from './IconButton.styles';

export const IconButton = (props: IconButtonProps) => {
  return <S.IconButton {...props} />;
};
