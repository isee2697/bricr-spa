import React from 'react';
import { CircularProgressProps } from '@material-ui/core';

import * as S from './CircularProgress.styles';
import { useStyles } from './CircularProgress.styles';

export const CircularProgress = ({ color, size, ...props }: CircularProgressProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <S.CircularProgress
        color={color}
        variant="determinate"
        value={100}
        className={classes.top}
        size={size ? size : 16}
        thickness={4}
        {...props}
      />
      <S.CircularProgress
        color={color}
        variant="indeterminate"
        disableShrink
        className={classes.bottom}
        size={size ? size : 16}
        thickness={4}
        {...props}
      />
    </div>
  );
};
