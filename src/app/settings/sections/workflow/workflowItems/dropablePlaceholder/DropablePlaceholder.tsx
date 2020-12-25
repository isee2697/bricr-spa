import React from 'react';
import { useDrop } from 'react-dnd';

import { DropablePlaceholderProps, DragObjectType, DropablePlaceholderCollectProps } from './DropablePlaceholder.types';
import { ItemPlaceholder } from './itemPlaceholder/ItemPlaceholder';

export const DropablePlaceholder = ({ type, onDrop, hidePlaceholder, disabled }: DropablePlaceholderProps) => {
  const [{ isOver, isDrag }, drop] = useDrop<DragObjectType, void, DropablePlaceholderCollectProps>({
    accept: type,
    drop: onDrop,
    canDrop: () => true,
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      isDrag: !!monitor.canDrop(),
    }),
  });

  if (!isDrag && hidePlaceholder) return null;

  return (
    <div ref={disabled ? undefined : drop}>
      <ItemPlaceholder type={type} hovered={isOver} isDrag={isDrag} disabled={disabled} />
    </div>
  );
};
