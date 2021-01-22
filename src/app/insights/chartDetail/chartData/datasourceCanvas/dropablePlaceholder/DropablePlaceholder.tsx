import React from 'react';
import { useDrop } from 'react-dnd';
import classNames from 'classnames';

import { Box } from 'ui/atoms';

import { DropablePlaceholderProps, DragObjectType, DropablePlaceholderCollectProps } from './DropablePlaceholder.types';
import { useStyles } from './DropablePlaceholder.styles';

export const DropablePlaceholder = ({ onDrop, hidePlaceholder, disabled }: DropablePlaceholderProps) => {
  const classes = useStyles();
  const [{ isOver, isDrag }, drop] = useDrop<DragObjectType, void, DropablePlaceholderCollectProps>({
    accept: 'Chart_Datasource',
    drop: onDrop,
    canDrop: () => true,
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      isDrag: !!monitor.canDrop(),
    }),
  });

  if (!isDrag && hidePlaceholder) return null;

  return (
    <div ref={disabled ? undefined : drop} className={classes.placeholderWrapper}>
      <Box
        className={classNames(
          classes.placeholder,
          !disabled && isDrag && classes.dragged,
          !disabled && isDrag && isOver && classes.hovered,
        )}
        width={50}
        height={50}
      />
    </div>
  );
};
