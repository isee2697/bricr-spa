import React from 'react';
import classNames from 'classnames';

import { Box } from 'ui/atoms';
import { WorkflowItemType } from '../../../Workflow.types';
import { useLocale } from 'hooks';

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

const texts = {
  [WorkflowItemType.ACTION]: 'settings.workflow.action_placeholder',
  [WorkflowItemType.TRIGGER]: 'settings.workflow.trigger_placeholder',
};

export const ItemPlaceholder = ({ type, isDrag, hovered }: ItemPlaceholderProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Box
      className={classNames(classes.placeholder, isDrag && classes.dragged, isDrag && hovered && classes.hovered)}
      {...sizes[type]}
    >
      {formatMessage({ id: texts[type] })}
    </Box>
  );
};
