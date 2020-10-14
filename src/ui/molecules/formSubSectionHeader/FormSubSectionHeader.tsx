import React from 'react';
import classNames from 'classnames';

import { Box, Typography } from 'ui/atoms';

import { FormSubSectionHeaderProps } from './FormSubSectionHeader.types';
import { useStyles } from './FormSubSectionHeader.styles';

export const FormSubSectionHeader = ({ title, subtitle, noBorder, className }: FormSubSectionHeaderProps) => {
  const classes = useStyles();

  return (
    <Box className={classNames(classes.container, className, { [classes.noBorder]: noBorder })}>
      <Typography className={classes.title}>{title}</Typography>
      {subtitle && <Typography className={classes.subtitle}>{subtitle}</Typography>}
    </Box>
  );
};
