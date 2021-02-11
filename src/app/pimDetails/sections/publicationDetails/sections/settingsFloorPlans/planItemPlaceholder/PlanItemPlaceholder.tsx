import React from 'react';
import { useDrop } from 'react-dnd';
import clsx from 'classnames';

import { useStyles } from '../SettingsFloorPlans.styles';

import { PlanItemPlaceholderDragObject, PlanItemPlaceholderProps } from './PlanItemPlaceholder.types';

export const PlanItemPlaceholder = ({ onAddItemToAddedList }: PlanItemPlaceholderProps) => {
  const classes = useStyles();

  const [{ isOver }, drop] = useDrop({
    accept: 'SettingsFloorPlan',
    drop: (dropObject: PlanItemPlaceholderDragObject) => {
      onAddItemToAddedList(dropObject.item);
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
  });

  return <div className={clsx(classes.avatarPlaceholder, isOver && 'dragOver')} ref={drop} />;
};
