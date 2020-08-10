import React from 'react';
import classNames from 'classnames';

import { Box, Emoji } from 'ui/atoms';

import { ImageContainerProps } from './ColoredImage.types';
import { useStyles } from './ColoredImage.styles';

export const ColoredImage = ({
  src,
  children,
  className,
  variant,
  grayscale,
  emptyEmoji = '📷',
  ...props
}: ImageContainerProps) => {
  const classes = useStyles({ src });

  return (
    <Box display="flex" {...props} className={classNames(classes.root, variant, className)}>
      {!src && (
        <Box className={classes.placeholder}>
          <Emoji>{emptyEmoji}</Emoji>
        </Box>
      )}
      <Box className={classNames(classes.image, grayscale && classes.grayscale)} />
      <Box className={classes.children}>{children}</Box>
    </Box>
  );
};
