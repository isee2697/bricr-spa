import React from 'react';
import classNames from 'classnames';
import { CheckCircleRounded } from '@material-ui/icons';

import { SelectCard } from 'ui/molecules';

import { TileRadioProps } from './TileRadio.types';
import { useStyles } from './TileRadio.styles';

import { Box, Typography } from '..';

export const TileRadio = ({
  onClick,
  isSelected,
  children,
  title,
  isDisabled,
  className,
  orientation,
}: TileRadioProps) => {
  const classes = useStyles();

  if (orientation === 'horizontal')
    return (
      <SelectCard
        className={classNames(classes.card, { isDisabled, horizontal: true })}
        onClick={onClick}
        selected={isSelected}
      >
        <Box className={classNames(classes.icon, { isSelected })}>{children}</Box>
        <Typography className={classNames(classes.title, { isDisabled, isSelected })}>{title}</Typography>
        <Box display="flex" ml={2} mr={2}>
          {isSelected ? <CheckCircleRounded color="primary" /> : <Box className={classes.box} />}
        </Box>
      </SelectCard>
    );

  return (
    <div className={classNames(className, classes.root, !!isDisabled && classes.disabled, !!isSelected && 'selected')}>
      <SelectCard onClick={onClick} selected={isSelected} className={classNames(!!isSelected && 'card-selected')}>
        <div className={classNames(classes.content, children && 'hasIcon')}>
          {children}
          <div className="title">{title}</div>
        </div>
      </SelectCard>
    </div>
  );
};
