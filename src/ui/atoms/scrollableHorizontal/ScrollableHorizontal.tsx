import React from 'react';
import RSC from 'react-scrollbars-custom';
import classNames from 'classnames';

import { ScrollableHorizontalProps } from './ScrollableHorizontal.types';
import { useStyles } from './ScrollableHorizontal.styles';

export const ScrollableHorizontal = ({ children, width, maxWidth, height, className }: ScrollableHorizontalProps) => {
  const classes = useStyles();

  return (
    <RSC className={classNames(classes.root, className)} noDefaultStyles style={{ width, height, maxWidth }}>
      {children}
    </RSC>
  );
};
