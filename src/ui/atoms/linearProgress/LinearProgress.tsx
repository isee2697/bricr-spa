import React from 'react';
import MuiLinearProgress from '@material-ui/core/LinearProgress';

import { LinearProgressProps } from './LinearProgress.types';
import { useStyles } from './LinearProgress.styles';

export const LinearProgress = ({ value = 0, max = 0 }: LinearProgressProps) => {
  const classes = useStyles();
  const percentage = max > 0 ? (value / max) * 100 : 0;

  return (
    <MuiLinearProgress
      variant="determinate"
      value={percentage > 100 ? 10000 / percentage : percentage}
      classes={{
        root: classes.root,
        bar: classes.barPrimary,
        colorPrimary: percentage > 100 ? classes.barOrange : classes.barGray,
      }}
    />
  );
};
