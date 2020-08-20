import React from 'react';
import { useDrop } from 'react-dnd';

import { WorkflowItemType } from '../../Workflow.types';

import { AddPlaceholder } from './addPlaceholder/AddPlaceholder';
import { DropablePlaceholderProps, DragObjectType, DropablePlaceholderCollectProps } from './DropablePlaceholder.types';
import { ItemPlaceholder } from './itemPlaceholder/ItemPlaceholder';

export const DropablePlaceholder = ({ type, onDrop }: DropablePlaceholderProps) => {
  const [{ isOver, isDrag }, drop] = useDrop<DragObjectType, void, DropablePlaceholderCollectProps>({
    accept: type,
    drop: onDrop,
    canDrop: () => true,
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      isDrag: !!monitor.canDrop(),
    }),
  });

  if (!isDrag) {
    return type === WorkflowItemType.ACTION ? <AddPlaceholder /> : null;
  }

  return (
    <div ref={drop}>
      <ItemPlaceholder type={type} hovered={isOver} />
    </div>
  );
};
