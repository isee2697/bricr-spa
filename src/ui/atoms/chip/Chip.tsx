import * as React from 'react';

import * as S from './Chip.styles';
import { useStyles } from './Chip.styles';
import { ChipProps } from './Chip.types';

export const Chip = (props: ChipProps) => {
  const classes = useStyles(props);

  return <S.Chip className={classes.secondary} {...props} />;
};
