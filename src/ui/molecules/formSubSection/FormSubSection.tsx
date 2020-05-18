import React from 'react';
import classNames from 'classnames';

import { Box, Typography } from 'ui/atoms';

import { FormSubSectionProps } from './FormSubSection.types';
import { useStyles } from './FormSubSection.styles';

export const FormSubSection = ({ title, subtitle, noBorder, className }: FormSubSectionProps) => {
  const classes = useStyles();

  return (
    <Box className={classNames(classes.container, className, { [classes.noBorder]: noBorder })}>
      <Typography className={classes.title}>{title}</Typography>
      {subtitle && <Typography className={classes.subtitle}>{subtitle}</Typography>}
    </Box>
  );
};