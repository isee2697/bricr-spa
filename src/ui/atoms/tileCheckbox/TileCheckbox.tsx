import React from 'react';
import classNames from 'classnames';

import { SelectCard } from 'ui/molecules';
import { CheckMark } from 'ui/atoms/icons/checkMark/CheckMark';

import { TileCheckboxProps } from './TileCheckbox.types';
import { useStyles } from './TileCheckbox.styles';

export const TileCheckbox = ({ onClick, isSelected, children, title, isDisabled }: TileCheckboxProps) => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.root, !!isDisabled && classes.disabled, !!isSelected && 'selected')}>
      <div className={classNames(classes.square)}>
        {!!isSelected && <CheckMark className={classes.checkMark} color="primary" />}
        <SelectCard onClick={onClick} selected={isSelected}>
          <div className={classNames(classes.content)}>{children}</div>
        </SelectCard>
      </div>
      <div className="title">{title}</div>
    </div>
  );
};
