import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import clsx from 'classnames';

import { Avatar, Badge, Box } from 'ui/atoms';
import { useStyles } from '../SettingsPictures.styles';
import { CloseIcon } from 'ui/atoms/icons';
import { PictureItemPlaceholderDragObject } from '../pictureItemPlaceholder/PictureItemPlaceholder.types';

import { PictureItemProps } from './PictureItem.types';

export const PictureItem = ({ isAdded = false, onRemoveFromList, onChangeOrder, ...item }: PictureItemProps) => {
  const classes = useStyles();

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: 'SettingsPictures',
      item,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: 'SettingsPictures',
    drop: (dropObject: PictureItemPlaceholderDragObject) => {
      if (!!onChangeOrder) {
        onChangeOrder(dropObject.item, item);
      }
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div ref={drag}>
      <Box display="flex">
        {!isDragging && (
          <div ref={drop} className={classes.item}>
            <Avatar variant="rounded" src={item.image} className={clsx(classes.avatar, !isAdded && 'pointerCursor')} />
            {isAdded && !!onRemoveFromList && (
              <Badge
                className={clsx(classes.badge, 'badge')}
                onClick={() => onRemoveFromList(item)}
                badgeContent={<CloseIcon className={classes.badgeIcon} />}
                color="error"
                data-testid="remove-image"
              />
            )}
          </div>
        )}
        {isOver && <Box className={classes.avatarPlaceholder} ml={2} />}
      </Box>
    </div>
  );
};
