import React from 'react';
import classNames from 'classnames';

import { Box, Typography, IconButton } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { SubtractIcon } from 'ui/atoms/icons/subtract/SubtractIcon';

import { QuantityInputProps } from './QuantityInput.types';
import { useStyles } from './QuantityInput.styles';

export const QuantityInput = ({ value = 0, onChange, min, max, label, disabled }: QuantityInputProps) => {
  const classes = useStyles({ disabled });

  const handleUp = () => {
    if (typeof max === 'undefined' || value < max) {
      onChange(value + 1);
    }
  };

  const handleDown = () => {
    if (typeof min === 'undefined' || value > min) {
      onChange(value - 1);
    }
  };

  return (
    <Box className={classNames(classes.root, { [classes.disabled]: disabled })}>
      <IconButton size="small" variant="roundedContained" onClick={handleDown} disabled={disabled}>
        <SubtractIcon />
      </IconButton>
      <Box className={classes.value}>
        <Typography variant="h3">{value}</Typography>
        <Typography variant="h6">{label}</Typography>
      </Box>
      <IconButton size="small" variant="roundedContained" onClick={handleUp} disabled={disabled}>
        <AddIcon />
      </IconButton>
    </Box>
  );
};
