import React from 'react';
import clsx from 'classnames';
import { useDrop } from 'react-dnd';

import { EmailDragObject } from '../Email.types';

import { useStyles } from './EmailSidebarMenu.styles';
import { EmailSidebarMenuSubItemProps } from './EmailSidebarMenu.types';

export const EmailSidebarSubMenuItem = ({ id, title, selected }: EmailSidebarMenuSubItemProps) => {
  const classes = useStyles();

  const [{ isOver }, drop] = useDrop({
    accept: 'UpdateEmailFolder',
    drop: (item: EmailDragObject) => {
      // TODO: Update email folder here
      console.log('Email updated: ', item);
    },
    canDrop: () => true,
    collect: monitor => ({
      isOver: monitor.isOver(),
      isDrag: monitor.canDrop(),
    }),
  });

  return (
    <div ref={drop} className={clsx(classes.subMenuItem, selected && 'selected', isOver && 'draggingOver')}>
      {title}
    </div>
  );
};
