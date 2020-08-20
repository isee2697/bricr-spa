import React from 'react';
import classNames from 'classnames';

import { Box } from 'ui/atoms';
import { WorkflowItemType } from '../../../Workflow.types';

import { ItemPlaceholderProps } from './ItemPlaceholder.types';
import { useStyles } from './ItemPlaceholder.styles';

const sizes = {
  [WorkflowItemType.ACTION]: {
    width: 216,
    height: 48,
  },
  [WorkflowItemType.TRIGGER]: {
    width: 120,
    height: 120,
  },
};

export const ItemPlaceholder = ({ type, hovered }: ItemPlaceholderProps) => {
  const classes = useStyles();

  return <Box className={classNames(classes.placeholder, hovered && classes.hovered)} {...sizes[type]} />;
};
