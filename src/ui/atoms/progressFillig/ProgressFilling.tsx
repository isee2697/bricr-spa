import React from 'react';

import { ProgressFillingProps } from './ProgressFilling.types';
import * as S from './ProgressFilling.styles';

const MAX_STAGE = 6;

export const ProgressFilling = ({ progress }: ProgressFillingProps) => {
  const intProgress = Math.round(progress * MAX_STAGE);

  return (
    <S.ProgressFilling>
      {Array.from({ length: MAX_STAGE }).map((item, index) => (
        <div key={`fill-${index}`} className={intProgress > index ? 'filled' : 'empty'} />
      ))}
    </S.ProgressFilling>
  );
};
