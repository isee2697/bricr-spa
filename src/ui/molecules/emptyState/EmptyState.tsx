import React from 'react';

import { Box } from 'ui/atoms';

import { EmptyStateProps } from './EmptyState.types';
import { useStyles } from './EmptyState.styles';

export const EmptyState = ({ children }: EmptyStateProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <span role="img" aria-label="thinking face emoji" className={classes.emoji}>
        🤔
      </span>
      {children}
    </Box>
  );
};
