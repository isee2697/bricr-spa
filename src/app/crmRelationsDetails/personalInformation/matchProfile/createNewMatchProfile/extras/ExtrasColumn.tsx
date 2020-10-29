import React from 'react';
import { useDrop } from 'react-dnd';
import clsx from 'classnames';

import { Badge, Box, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';

import { ExtrasColumnProps, ExtrasItemDragObject, ExtrasItemType } from './Extras.types';
import { useStyles } from './ExtrasColumn.styles';
import { ExtrasColumnItem } from './ExtrasColumnItem';
import { ExtrasPlaceholder } from './ExtrasPlaceholder';

export const ExtrasColumn = ({ isEditable, columnType, items, onUpdateExtraItemStatus }: ExtrasColumnProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const [{ isOver }, drop] = useDrop({
    accept: 'UpdateExtraItemStatus',
    drop: (item: ExtrasItemDragObject) => {
      onUpdateExtraItemStatus(item.item, columnType);
    },
    canDrop: () => true,
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div ref={isEditable ? drop : undefined} className={clsx(classes.root, isOver && 'draggingOver')}>
      <Box mb={2}>
        <Badge badgeContent={items.length} showZero color="secondary" className={classes.badge}>
          <Typography variant="h3">
            {formatMessage({ id: `dictionaries.match_profile_extra.${columnType}` })}
          </Typography>
        </Badge>
      </Box>
      <Box>
        {items.map((item: ExtrasItemType, index) => (
          <ExtrasColumnItem isEditable={isEditable} item={item} noMargin={items.length === index + 1} />
        ))}
      </Box>
      <ExtrasPlaceholder isFirst={items.length === 0} />
    </div>
  );
};
