import React from 'react';
import clsx from 'classnames';
import { useDrop } from 'react-dnd';

import { ListItem } from './ListItem';
import { useStyles } from './ReorderableList.styles';
import { ListType, ListColumnProps } from './ReorderableList.types';

export const ListColumn = ({ items, hasCheckbox, onUpdateList }: ListColumnProps) => {
  const classes = useStyles();

  const [{ isOver }, drop] = useDrop({
    accept: 'ListType',
    canDrop: () => true,
    collect: monitor => ({
      isOver: monitor.isOver(),
      isDrag: monitor.canDrop(),
    }),
  });

  return (
    <div ref={drop} className={clsx(classes.listContainer, isOver && 'draggingOver')}>
      {items.map((item: ListType, index: number) => {
        return (
          <ListItem key={item.key} index={index} data={item} onUpdateList={onUpdateList} hasCheckbox={hasCheckbox} />
        );
      })}
    </div>
  );
};
