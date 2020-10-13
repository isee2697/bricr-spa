import React from 'react';
import { Avatar } from '../../atoms';

import { useStyles } from './Counter.styles';
import { CounterProps } from './Counter.types';

export const Counter = ({ count, hasMarginLeft = false, hasMarginRight = false }: CounterProps) => {
  const classes = useStyles({ hasMarginLeft: hasMarginLeft, hasMarginRight: hasMarginRight });

  return <Avatar className={classes.counter}>{count}</Avatar>;
};
