import React from 'react';

import { Box, Typography } from 'ui/atoms';

import { FormSubSectionProps } from './FormSubSection.types';
import { useStyles } from './FormSubSection.styles';

export const FormSubSection = ({ title, subtitle }: FormSubSectionProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>{title}</Typography>
      <Typography className={classes.subtitle}>{subtitle}</Typography>
    </Box>
  );
};
