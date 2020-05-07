import React from 'react';

import { Box } from 'ui/atoms';

import { InfoSectionProps } from './InfoSection.types';
import { useStyles } from './InfoSection.styles';

export const InfoSection = ({ children, emoji }: InfoSectionProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      {!!emoji ? (
        <span role="img" aria-label="thinking face emoji" className={classes.emoji}>
          {emoji}
        </span>
      ) : null}
      {children}
    </Box>
  );
};
