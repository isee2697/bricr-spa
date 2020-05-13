import React from 'react';
import RSC from 'react-scrollbars-custom';
import classNames from 'classnames';

import { ScrollableProps } from './Scrollable.types';
import { useStyles } from './Scrollable.styles';

export const Scrollable = ({ children, width, maxWidth, height, className }: ScrollableProps) => {
  const classes = useStyles();

  return (
    <RSC className={classNames(classes.root, className)} noDefaultStyles style={{ width, height, maxWidth }}>
      {children}
    </RSC>
  );
};
