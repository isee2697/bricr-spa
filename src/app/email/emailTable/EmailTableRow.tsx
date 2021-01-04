import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { useDrag } from 'react-dnd';
import clsx from 'classnames';
import { useHistory, useParams } from 'react-router-dom';

import { Box, Checkbox, IconButton, Menu, MenuItem, TableCell, TableRow, Typography, UserAvatar } from 'ui/atoms';
import { HomeIcon, LinkIcon, MenuIcon, PinIcon, ClockIcon, DeleteIcon } from 'ui/atoms/icons';
import { useEntityType } from 'app/shared/entityType';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { useLocale } from 'hooks';

import { useStyles } from './EmailTable.styles';
import { EmailTableRowProps } from './EmailTable.types';

export const EmailTableRow = ({ email, checkedItems, onCheckItem }: EmailTableRowProps) => {
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const { push } = useHistory();
  const { formatMessage } = useLocale();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);
  const { id, from, image, pinned, subject, links, date } = email;
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

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  const actions = [
    {
      value: 'reply',
      icon: <HomeIcon />,
      onClick: () => {},
    },
    {
      value: 'replyToAll',
      icon: <ClockIcon />,
      onClick: () => {},
    },
    {
      value: 'forward',
      icon: <ClockIcon />,
      onClick: () => {},
    },
    {
      value: 'markAsUnread',
      icon: <ClockIcon />,
      onClick: () => {},
    },
    {
      value: 'addAsRelation',
      icon: <ClockIcon />,
      onClick: () => {},
    },
    {
      value: 'linkToSales',
      icon: <ClockIcon />,
      onClick: () => {},
    },
    {
      value: 'linkToPim',
      icon: <ClockIcon />,
      onClick: () => {},
    },
    {
      value: 'linkToCalendar',
      icon: <ClockIcon />,
      onClick: () => {},
    },
    {
      value: 'archive',
      icon: <ClockIcon />,
      onClick: () => {},
    },
    {
      value: 'delete',
      icon: <DeleteIcon color="inherit" />,
      onClick: () => {},
      color: 'red',
    },
  ];

  const emailId = `email-list-checkbox-${id}`;

  return (
    <>
      <TableRow
        key={id}
        ref={drag}
        className={clsx(classes.row, isDragging && 'dragging')}
        onClick={() => push(`${joinUrlParams(`${baseUrl}/inbox/:inboxId/:folderId`, urlParams)}/${email.id}`)}
      >
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
            <UserAvatar avatar={image} name={`${from[0].name}`} className={classes.avatar} />
            <Box mr={0.5} />
            <Typography variant="h5">{from[0].name}</Typography>
          </Box>
        </TableCell>
        <TableCell padding="none" className={clsx(classes.cell, isDragging && 'dragging')}>
          <PinIcon color={pinned ? 'error' : 'action'} />
        </TableCell>
        <TableCell className={clsx(classes.cell, isDragging && 'dragging')}>{subject}</TableCell>
        <TableCell padding="none" className={clsx(classes.cell, isDragging && 'dragging')}>
          <Box display="flex" alignItems="center">
            <LinkIcon />
            <Typography variant="caption">{links && links > 0 ? links : '-'}</Typography>
          </Box>
        </TableCell>
        <TableCell padding="none" className={clsx(classes.cell, isDragging && 'dragging')}>
          <Typography variant="h5" className={classes.fontWeightMedium}>
            {DateTime.fromSeconds(parseInt(date, 10)).toLocaleString(DateTime.DATE_SHORT)}
          </Typography>
          <Typography variant="h6">
            {DateTime.fromSeconds(parseInt(date, 10)).toLocaleString(DateTime.TIME_24_WITH_SECONDS)}
          </Typography>
        </TableCell>
        <TableCell padding="none" className={clsx(classes.cell, isDragging && 'dragging')}>
          <IconButton size="small" variant="rounded" onClick={onMenuClick}>
            <MenuIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <Menu id={id} open={Boolean(menuEl)} onClose={onMenuClose} anchorEl={menuEl} placement="bottom-end">
        {actions.map((action, index) => (
          <MenuItem
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation();
              setMenuEl(null);
              action.onClick();
            }}
            className={clsx(classes.menuItem, action.color)}
          >
            {action.icon}
            <Typography variant="subtitle1">
              {formatMessage({
                id: `email.table.action.${action.value}`,
              })}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
