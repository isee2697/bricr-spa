import React from 'react';
import { ArrowLeftIcon } from 'ui/atoms/icons';

import { useStyles } from './SidebarHideButton.styles';

export const SidebarHideButton = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ArrowLeftIcon />
    </div>
  );
};
