import React from 'react';

import { useStyles } from './Toolbar.styles';
import { ToolbarProps } from './Toolbar.types';

export const Toolbar = ({ children }: ToolbarProps) => {
  const classes = useStyles();

  return <div className={classes.container}>{children}</div>;
};
