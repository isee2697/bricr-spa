import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { CheckboxField } from 'form/fields';
import { Chip } from 'ui/atoms/chip/Chip.styles';

import { useStyles } from './ReorderableList.styles';
import { ListItemProps, ListTypeDragObject } from './ReorderableList.types';

export const ListItem = ({ index, data, hasCheckbox = true, onUpdateList }: ListItemProps) => {
  const ref = useRef(null);
  const classes = useStyles();
  const [, drag] = useDrag({
    item: {
      type: 'ListType',
      ...data,
      index,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'ListType',
    hover: (item: ListTypeDragObject, monitor) => {
      if (!ref.current) {
        return;
      }

      const currentItemIndex = item.index;
      const targetItemIndex = index;

      if (currentItemIndex === targetItemIndex) {
        return;
      }

      onUpdateList(currentItemIndex, targetItemIndex);
      item.index = targetItemIndex;
    },
  });

  drag(drop(ref));

  return (
    <span className={classes.itemContainer} ref={ref}>
      <Chip className={classes.itemCounter} size="small" variant="outlined" color="primary" label={index + 1} />

      {hasCheckbox ? (
        <div className={classes.item}>
          <CheckboxField name={data.key} label={data.label} />
        </div>
      ) : (
        <span className={classes.item}>{data.label}</span>
      )}
    </span>
  );
};
