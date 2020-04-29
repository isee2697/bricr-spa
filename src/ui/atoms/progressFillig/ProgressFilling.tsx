import React from 'react';

import { ProgressFillingProps } from './ProgressFilling.types';
import * as S from './ProgressFilling.styles';

export const ProgressFilling = ({ stage }: ProgressFillingProps) => {
  const maxStage = 6;

  return (
    <S.ProgressFilling>
      {Array.from({ length: maxStage }).map((item, index) => (
        <div key={`fill-${index}`} className={stage > index ? 'filled' : 'empty'} />
      ))}
    </S.ProgressFilling>
  );
};
