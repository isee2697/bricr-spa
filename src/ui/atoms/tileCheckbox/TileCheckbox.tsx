import React from 'react';
import classNames from 'classnames';

import { Box, Typography } from 'ui/atoms';
import { CheckMarkIcon } from 'ui/atoms/icons';
import { SelectCard } from 'ui/molecules';

import { TileCheckboxProps } from './TileCheckbox.types';
import { useStyles } from './TileCheckbox.styles';

export const TileCheckbox = ({
  onClick,
  isSelected,
  children,
  title,
  isDisabled,
  orientation = 'vertical',
}: TileCheckboxProps) => {
  const classes = useStyles();

  if (orientation === 'horizontal')
    return (
      <SelectCard className={classNames(classes.card, { isDisabled })} onClick={onClick} selected={isSelected}>
        <Box className={classNames(classes.icon, { isSelected })}>{children}</Box>
        <Typography className={classNames(classes.title, { isDisabled, isSelected })}>{title}</Typography>
        <Box display="flex" ml={2} mr={2}>
          {isSelected ? <CheckMarkIcon color="primary" /> : <Box className={classes.box} />}
        </Box>
      </SelectCard>
    );

  return (
    <div className={classNames(classes.root, !!isDisabled && classes.disabled, !!isSelected && 'selected')}>
      <div className={classNames(classes.square)}>
        {!!isSelected && <CheckMarkIcon className={classes.checkMark} color="primary" />}
        <SelectCard onClick={onClick} selected={isSelected}>
          <div className={classNames(classes.content)}>{children}</div>
        </SelectCard>
      </div>
      <div className="title">{title}</div>
    </div>
  );
};
