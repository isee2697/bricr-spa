import React from 'react';
import classNames from 'classnames';

import { Box } from 'ui/atoms';

import { InfoSectionProps } from './InfoSection.types';
import { useStyles } from './InfoSection.styles';

export const InfoSection = ({ children, emoji, className }: InfoSectionProps) => {
  const classes = useStyles();

  return (
    <Box className={classNames(classes.box, className)}>
      {!!emoji ? (
        <span role="img" aria-label="thinking face emoji" className={classes.emoji}>
          {emoji}
        </span>
      ) : null}
      {children}
    </Box>
  );
};
