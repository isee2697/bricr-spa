import classNames from 'classnames';
import React from 'react';

import { Typography } from 'ui/atoms';

import { useStyles } from './FieldItem.styles';
import { ContractTemplatesDetailsFieldItemProps, DndItemState } from './FieldItem.types';

export const ContractTemplatesDetailsFieldItem = ({ icon, state, title }: ContractTemplatesDetailsFieldItemProps) => {
  const classes = useStyles();

  return (
    <div
      className={classNames(
        classes.item,
        DndItemState.Dragged === state && 'background',
        DndItemState.Dropped === state && 'border',
      )}
    >
      <div className={classes.itemIcon}>{icon}</div>
      <Typography variant="h5">{title}</Typography>
    </div>
  );
};
