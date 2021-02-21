import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { Chip } from 'ui/atoms/chip/Chip.styles';
import { Checkbox, FormControlLabel, Typography } from 'ui/atoms';

import { useStyles } from './ReorderableList.styles';
import { ListItemProps, ListTypeDragObject } from './ReorderableList.types';

export const ListItem = ({ index, data, onUpdateList, onUpdateCheckedStatus }: ListItemProps) => {
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

      onUpdateList(
        {
          key: item.key,
          label: item.label,
          checked: item.checked,
        },
        data,
      );
      item.index = targetItemIndex;
    },
  });

  drag(drop(ref));

  return (
    <span className={classes.itemContainer} ref={ref}>
      <Chip className={classes.itemCounter} size="small" variant="outlined" color="primary" label={index + 1} />

      <div className={classes.item}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={data.checked}
              onChange={(event, checked: boolean) => onUpdateCheckedStatus({ ...data, checked })}
            />
          }
          label={<Typography variant="h4">{data.label}</Typography>}
        />
      </div>
    </span>
  );
};
