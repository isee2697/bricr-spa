import * as React from 'react';

import * as S from './Chip.styles';
import { useStyles } from './Chip.styles';
import { ChipProps } from './Chip.types';

export const Chip = ({ bgcolor, fontcolor, ...chipProps }: ChipProps) => {
  const classes = useStyles({ bgcolor, fontcolor });

  return <S.Chip className={classes.secondary} {...chipProps} />;
};
