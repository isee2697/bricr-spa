import React from 'react';
import classNames from 'classnames';

import { Button } from 'ui/atoms';

import { ToolbarButtonProps } from './ToolbarButton.types';
import { useStyles } from './ToolbarButton.styles';

export const ToolbarButton = ({ children, onClick, active }: ToolbarButtonProps) => {
  const classes = useStyles();

  return (
    <Button onClick={onClick} className={classNames(classes.root, active && classes.active)}>
      {children}
    </Button>
  );
};
