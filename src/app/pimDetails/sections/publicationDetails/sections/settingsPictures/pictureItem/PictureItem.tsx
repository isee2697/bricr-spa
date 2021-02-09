import React from 'react';
import { useDrag } from 'react-dnd';
import clsx from 'classnames';

import { Avatar, Badge } from 'ui/atoms';
import { useStyles } from '../SettingsPictures.styles';
import { CloseIcon } from 'ui/atoms/icons';

import { PictureItemProps } from './PictureItem.types';

export const PictureItem = ({ isAdded = false, onRemoveFromList, ...item }: PictureItemProps) => {
  const classes = useStyles();

  const [, drag] = useDrag({
    item: {
      type: 'SettingsPictures',
      item,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className={classes.item}>
      <Avatar variant="rounded" src={item.image} className={clsx(classes.avatar, !isAdded && 'pointerCursor')} />
      {isAdded && !!onRemoveFromList && (
        <Badge
          className={classes.badge}
          onClick={() => onRemoveFromList(item)}
          badgeContent={<CloseIcon className={classes.badgeIcon} />}
          color="error"
          data-testid="remove-image"
        />
      )}
    </div>
  );
};
