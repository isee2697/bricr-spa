import React from 'react';
import classNames from 'classnames';

import { SelectCard } from 'ui/molecules';

import { TileRadioProps } from './TileRadio.types';
import { useStyles } from './TileRadio.styles';

export const TileRadio = ({ onClick, isSelected, children, title, isDisabled }: TileRadioProps) => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.root, !!isDisabled && classes.disabled, !!isSelected && 'selected')}>
      <SelectCard onClick={onClick} selected={isSelected} className={classNames(!!isSelected && 'card-selected')}>
        <div className={classNames(classes.content, children && 'hasIcon')}>
          {children}
          <div className="title">{title}</div>
        </div>
      </SelectCard>
    </div>
  );
};
