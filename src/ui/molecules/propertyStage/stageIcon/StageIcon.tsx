import React from 'react';
import { StepIconProps } from '@material-ui/core';

import { Typography } from 'ui/atoms';
import { CheckIcon } from 'ui/atoms/icons/check/CheckIcon';

import * as S from './StageIcon.styles';

export const StageIcon: React.FC<StepIconProps> = ({ active, completed, icon }) => {
  if (completed)
    return (
      <S.CompletedIcon>
        <CheckIcon />
      </S.CompletedIcon>
    );

  if (active)
    return (
      <S.ActiveIcon>
        <Typography variant="h5">{icon}</Typography>
      </S.ActiveIcon>
    );

  return (
    <S.InactiveIcon>
      <Typography variant="h5">{icon}</Typography>
    </S.InactiveIcon>
  );
};
