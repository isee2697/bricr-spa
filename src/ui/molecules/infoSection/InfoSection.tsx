import React from 'react';
import classNames from 'classnames';

import { Box, Emoji } from 'ui/atoms';

import { InfoSectionProps } from './InfoSection.types';
import { useStyles } from './InfoSection.styles';

export const InfoSection = ({ children, emoji, className, color = 'default', noPadding = false }: InfoSectionProps) => {
  const classes = useStyles();

  return (
    <Box className={classNames(classes.box, color, className, noPadding && 'noPadding')}>
      {!!emoji ? <Emoji className={classes.emoji}>{emoji}</Emoji> : null}
      {children}
    </Box>
  );
};
