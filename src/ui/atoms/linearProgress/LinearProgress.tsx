import React from 'react';
import MuiLinearProgress from '@material-ui/core/LinearProgress';
import clsx from 'classnames';

import { LinearProgressProps } from './LinearProgress.types';
import { useStyles } from './LinearProgress.styles';

export const LinearProgress = ({ value = 0, max = 0, className, classes: passedClasses }: LinearProgressProps) => {
  const classes = useStyles();
  const percentage = max > 0 ? (value / max) * 100 : 0;

  return (
    <MuiLinearProgress
      variant="determinate"
      value={percentage > 100 ? 10000 / percentage : percentage}
      className={className}
      classes={{
        root: clsx(passedClasses?.root, classes.root),
        bar: clsx(passedClasses?.bar, classes.barPrimary),
        colorPrimary: clsx(passedClasses?.colorPrimary, percentage > 100 ? classes.barOrange : classes.barGray),
      }}
    />
  );
};
