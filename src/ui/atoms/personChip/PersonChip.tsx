import React from 'react';
import { Avatar, Chip, Typography } from 'ui/atoms';

import { PersonChipProps } from './PersonChip.types';
import { useStyles } from './PersonChip.styles';

export const PersonChip = ({ name, image, label }: PersonChipProps) => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.label} variant="h6">
        {label}
      </Typography>
      <Chip
        className={classes.chip}
        avatar={<Avatar variant="square" alt={name} src={image} />}
        label={name}
        variant="outlined"
      />
    </>
  );
};
