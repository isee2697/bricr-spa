import React from 'react';
import classNames from 'classnames';

import { useStyles } from './Toolbar.styles';
import { ToolbarProps } from './Toolbar.types';

export const Toolbar = ({ children, disabled }: ToolbarProps) => {
  const classes = useStyles();

  return <div className={classNames(classes.container, disabled && classes.disabled)}>{children}</div>;
};
