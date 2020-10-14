import React from 'react';
import classNames from 'classnames';

import { Box, Emoji } from 'ui/atoms';

import { InfoSectionProps } from './InfoSection.types';
import { useStyles } from './InfoSection.styles';

export const InfoSection = ({ children, emoji, className, color = 'default' }: InfoSectionProps) => {
  const classes = useStyles();

  return (
    <Box className={classNames(classes.box, color, className)}>
      {!!emoji ? <Emoji className={classes.emoji}>{emoji}</Emoji> : null}
      {children}
    </Box>
  );
};
