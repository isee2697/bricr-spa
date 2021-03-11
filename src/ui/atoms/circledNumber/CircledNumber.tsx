import React from 'react';

import { Typography } from 'ui/atoms';

import { CircledNumberProps } from './CircledNumber.types';
import { useStyles } from './CircledNumber.styles';

export const CircledNumber = ({ content }: CircledNumberProps) => {
  const classes = useStyles();

  return (
    <Typography variant="h5" className={classes.number}>
      {content}
    </Typography>
  );
};
