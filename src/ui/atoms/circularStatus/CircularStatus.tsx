import React from 'react';
import classNames from 'classnames';
import { Typography, Box, CircularProgress } from 'ui/atoms';

import { CircularStatusProps } from './CircularStatus.types';
import { useStyles } from './CircularStatus.styles';

const getTextColor = (value: number) => {
  let color = 'green';

  if (value < 30) {
    color = 'red';
  } else if (value < 49) {
    color = 'orange';
  }

  return color;
};

export const CircularStatus = ({ value, size = '4rem', ...props }: CircularStatusProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} position="relative" display="inline-flex">
      <svg width="0" height="0">
        <linearGradient x1="0" y1="0" x2="50%" y2="100%" id="gradient">
          <stop className={classes.gradientGreen} offset="0%" />
          <stop className={classes.gradientOrange} offset="100%" />
        </linearGradient>
      </svg>
      <CircularProgress
        disableShrink={false}
        thickness={3}
        variant="static"
        size={size}
        color="secondary"
        value={value}
        {...props}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography className={classNames(getTextColor(value), classes.percentageText)} variant="h2">
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};
