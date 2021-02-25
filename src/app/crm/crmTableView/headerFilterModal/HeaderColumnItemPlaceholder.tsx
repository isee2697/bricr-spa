import React from 'react';
import { useDrop } from 'react-dnd';

import { useStyles } from './HeaderColumnItem.styles';
import { HeaderColumnItemPlaceholderProps } from './HeaderColumnItemPlaceholder.types';
import { HeaderColumnItemDragObject } from './HeaderFilterModal.types';

export const HeaderColumnItemPlaceholder = ({ onDropColumn }: HeaderColumnItemPlaceholderProps) => {
  const classes = useStyles();

  const [, drop] = useDrop({
    accept: 'CrmTableHeaderFilter',
    drop: (dropObject: HeaderColumnItemDragObject) => {
      onDropColumn(dropObject.item);
    },
  });

  return <div ref={drop} className={classes.placeholderItem} />;
};
