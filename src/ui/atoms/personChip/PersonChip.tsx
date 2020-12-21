import React from 'react';

import { Avatar, Chip, Typography } from 'ui/atoms';

import { PersonChipProps } from './PersonChip.types';
import { useStyles } from './PersonChip.styles';

export const PersonChip = ({ name, image, label, onDelete }: PersonChipProps) => {
  const classes = useStyles();

  return (
    <>
      {label && (
        <Typography className={classes.label} variant="h6">
          {label}
        </Typography>
      )}
      <Chip
        className={classes.chip}
        avatar={image ? <Avatar variant="square" alt={name} src={image} /> : undefined}
        label={name}
        variant="outlined"
        onDelete={onDelete}
      />
    </>
  );
};
