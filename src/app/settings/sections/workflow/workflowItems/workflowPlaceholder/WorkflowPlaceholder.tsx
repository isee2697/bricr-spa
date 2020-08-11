import React from 'react';
import classNames from 'classnames';

import { Box } from 'ui/atoms';

import { WorkflowPlaceholderProps, PlaceholderType } from './WorkflowPlaceholder.types';
import { useStyles } from './WorkflowPlaceholder.styles';

const sizes = {
  [PlaceholderType.ACTION]: {
    width: 216,
    height: 48,
  },
  [PlaceholderType.TRIGGER]: {
    width: 120,
    height: 120,
  },
};

export const WorkflowPlaceholder = ({ type, hovered }: WorkflowPlaceholderProps) => {
  const classes = useStyles();

  return <Box className={classNames(classes.placeholder, hovered && classes.hovered)} {...sizes[type]} />;
};

WorkflowPlaceholder.types = PlaceholderType;
