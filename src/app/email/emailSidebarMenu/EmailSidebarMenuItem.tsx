import React from 'react';
import clsx from 'classnames';
import { useDrop } from 'react-dnd';
import { useLocation, useRouteMatch } from 'react-router-dom';

import { Box, Typography } from 'ui/atoms';
import { EmailDragObject } from '../Email.types';

import { useStyles } from './EmailSidebarMenu.styles';
import { EmailSidebarMenuItemProps } from './EmailSidebarMenu.types';

export const EmailSidebarMenuItem = ({ value, count, icon }: EmailSidebarMenuItemProps) => {
  const { url } = useRouteMatch();
  const classes = useStyles();
  const { pathname } = useLocation();

  const [{ isOver }, drop] = useDrop({
    accept: 'UpdateEmailFolder',
    drop: (item: EmailDragObject) => {
      // TODO: Update email folder here
    },
    canDrop: () => true,
    collect: monitor => ({
      isOver: monitor.isOver(),
      isDrag: monitor.canDrop(),
    }),
  });

  return (
    <div
      ref={drop}
      className={clsx(
        classes.menuItem,
        !pathname.startsWith(`${url}/${value}`) && classes.gray,
        isOver && classes.draggingOver,
      )}
    >
      {icon}
      <Box ml={0.5} />
      <Box display="flex" flex={1} justifyContent="space-between">
        <Typography variant="h3" className={clsx(classes.title, isOver && 'draggingOver')}>
          {value}
        </Typography>
        {count !== undefined && (
          <Typography variant="h4" className={classes.badge}>
            {count === 0 ? '-' : count}
          </Typography>
        )}
      </Box>
    </div>
  );
};
