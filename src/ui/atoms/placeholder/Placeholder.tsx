import Skeleton from '@material-ui/lab/Skeleton';

import React from 'react';

import { PlaceholderProps } from './Placeholder.types';
import { useStyles } from './Placeholder.styles';

export const Placeholder = ({
  variant = 'rect',
  marginLeft,
  marginRight,
  borderRadius,
  ...props
}: PlaceholderProps) => {
  const classes = useStyles({
    ...props,
    variant,
    marginLeft,
    marginRight,
    borderRadius,
  });

  return <Skeleton className={classes.root} {...props} variant={variant} />;
};
