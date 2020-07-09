import React from 'react';
import classNames from 'classnames';

import { Box } from 'ui/atoms';

import { ImageContainerProps } from './ColoredImage.types';
import { useStyles } from './ColoredImage.styles';

export const ColoredImage = ({ src, children, className, variant, ...props }: ImageContainerProps) => {
  const classes = useStyles({ src });

  return (
    <Box display="flex" {...props} className={classNames(classes.root, variant, className)}>
      {children}
    </Box>
  );
};
