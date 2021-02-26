import React from 'react';
import { useDrop } from 'react-dnd';

import { usePlaceholderStyles } from './ColumnModal.styles';
import { HeaderColumnItemDragObject, ColumnItemPlaceholderProps } from './ColumnModal.types';

export const ColumnModalItemPlaceholder = ({ onDropColumn }: ColumnItemPlaceholderProps) => {
  const classes = usePlaceholderStyles();

  const [, drop] = useDrop({
    accept: 'TableHeaderFilter',
    drop: (dropObject: HeaderColumnItemDragObject) => {
      onDropColumn(dropObject.item);
    },
  });

  return <div ref={drop} className={classes.placeholderItem} />;
};
