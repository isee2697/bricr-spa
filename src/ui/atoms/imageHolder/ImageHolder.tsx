import React from 'react';
import classNames from 'classnames';

import { Grid } from '../';

import { ImageHolderProps } from './ImageHolder.types';
import { useStyles } from './ImageHolder.styles';

export const ImageHolder = ({ src, withBorder, ...props }: ImageHolderProps) => {
  const classes = useStyles({ src });

  return <Grid className={classNames(classes.root, withBorder && classes.withBorder)} item></Grid>;
};
