import React from 'react';
import { useDrop } from 'react-dnd';
import clsx from 'classnames';

import { useStyles } from '../SettingsPictures.styles';

import { PictureItemPlaceholderDragObject, PictureItemPlaceholderProps } from './PictureItemPlaceholder.types';

export const PictureItemPlaceholder = ({ onAddItemToAddedList }: PictureItemPlaceholderProps) => {
  const classes = useStyles();

  const [{ isOver }, drop] = useDrop({
    accept: 'SettingsPictures',
    drop: (dropObject: PictureItemPlaceholderDragObject) => {
      onAddItemToAddedList(dropObject.item);
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
  });

  return <div className={clsx(classes.avatarPlaceholder, isOver && 'dragOver')} ref={drop} />;
};
