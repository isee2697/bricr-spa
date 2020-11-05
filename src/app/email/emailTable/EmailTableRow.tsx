import React from 'react';
import { DateTime } from 'luxon';
import { useDrag } from 'react-dnd';
import clsx from 'classnames';

import { Box, Checkbox, IconButton, TableCell, TableRow, Typography, UserAvatar } from 'ui/atoms';
import { LinkIcon, MenuIcon, PinIcon } from 'ui/atoms/icons';

import { useStyles } from './EmailTable.styles';
import { EmailTableRowProps } from './EmailTable.types';

export const EmailTableRow = ({ email, checkedItems, onCheckItem }: EmailTableRowProps) => {
  const {
    id,
    from: { firstName, lastName, image },
    pinned,
    subject,
    links,
    date,
  } = email;
  const classes = useStyles();
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: 'UpdateEmailFolder',
      ...email,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const emailId = `email-list-checkbox-${id}`;

  return (
    <TableRow key={id} ref={drag} className={clsx(classes.row, isDragging && 'dragging')}>
      <TableCell padding="checkbox" className={clsx(classes.cell, isDragging && 'dragging')}>
        <Checkbox
          checked={checkedItems.findIndex(itemId => itemId === emailId) >= 0}
          color="primary"
          inputProps={{ 'aria-labelledby': emailId }}
          onChange={() => onCheckItem(emailId)}
        />
      </TableCell>
      <TableCell padding="none" className={clsx(classes.cell, isDragging && 'dragging')}>
        <Box display="flex" alignItems="center">
          <UserAvatar avatar={image} name={`${firstName} ${lastName}`} className={classes.avatar} />
          <Box mr={0.5} />
          <Typography variant="h5">
            {firstName} {lastName}
          </Typography>
        </Box>
      </TableCell>
      <TableCell padding="none" className={clsx(classes.cell, isDragging && 'dragging')}>
        <PinIcon color={pinned ? 'error' : 'action'} />
      </TableCell>
      <TableCell className={clsx(classes.cell, isDragging && 'dragging')}>{subject}</TableCell>
      <TableCell padding="none" className={clsx(classes.cell, isDragging && 'dragging')}>
        <Box display="flex" alignItems="center">
          <LinkIcon />
          <Typography variant="caption">{links > 0 ? links : '-'}</Typography>
        </Box>
      </TableCell>
      <TableCell padding="none" className={clsx(classes.cell, isDragging && 'dragging')}>
        <Typography variant="h5" className={classes.fontWeightMedium}>
          {date.toLocaleString(DateTime.DATE_SHORT)}
        </Typography>
        <Typography variant="h6">{date.toLocaleString(DateTime.TIME_24_WITH_SECONDS)}</Typography>
      </TableCell>
      <TableCell padding="none" className={clsx(classes.cell, isDragging && 'dragging')}>
        <IconButton size="small" variant="rounded">
          <MenuIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
