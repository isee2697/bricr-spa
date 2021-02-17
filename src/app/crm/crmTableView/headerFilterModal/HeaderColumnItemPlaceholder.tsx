import React from 'react';
import { useDrop } from 'react-dnd';

import { useStyles } from './HeaderColumnItem.styles';
import { HeaderColumnItemPlaceholderProps } from './HeaderColumnItemPlaceholder.types';
import { HeaderColumnItemDragObject } from './HeaderFilterModal.types';

export const HeaderColumnItemPlaceholder = ({ addColumnToList }: HeaderColumnItemPlaceholderProps) => {
  const classes = useStyles();

  const [, drop] = useDrop({
    accept: 'CrmTableHeaderFilter',
    drop: (dropObject: HeaderColumnItemDragObject) => {
      addColumnToList(dropObject.item);
    },
  });

  return <div ref={drop} className={classes.placeholderItem} />;
};
